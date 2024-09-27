<template>
  <div>
    <!-- タイトル -->
    <p
      class="fontStyle"
      :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'"
    >
      今日の天気
    </p>
    <v-sheet class="mx-10">
      <v-row>
        <!-- 現在の天気カード -->
        <v-col cols="4">
          <WeatherCompCurrent
            :title="title"
            :latitude="latitude"
            :longitude="longitude"
          ></WeatherCompCurrent>
        </v-col>

        <!-- 1時間の天気カード -->
        <v-col></v-col>
      </v-row>

      <h1>Current Weather</h1>
      <p v-if="weatherData.current.date">
        Date: {{ weatherData.current.date }}
      </p>
      <p v-if="weatherData.current.time">
        Time: {{ weatherData.current.time }}
      </p>
      <p v-if="weatherData.current.temperature2m">
        Temperature: {{ weatherData.current.temperature2m }}°C
      </p>
      <p v-if="weatherData.current.weatherCode">
        Weather Code: {{ weatherData.current.weatherCode }}
      </p>

      <h2>Hourly Forecast</h2>
      <ul>
        <li v-for="(entry, index) in weatherData.hourly" :key="index">
          Date: {{ entry.date }} - Time: {{ entry.time }} - Temp:
          {{ entry.temperature2m }}°C, Precipitation:
          {{ entry.precipitationProbability }}%, Weather Code:
          {{ entry.weatherCode }}
        </li>
      </ul>

      <h2>Daily Forecast</h2>
      <ul>
        <li v-for="(entry, index) in weatherData.daily" :key="index">
          Date: {{ entry.date }} - Max Temp: {{ entry.temperature2mMax }}°C, Min
          Temp: {{ entry.temperature2mMin }}°C, Max Precipitation:
          {{ entry.precipitationProbabilityMax }}%
        </li>
        {{
          weatherData.daily
        }}
      </ul>
    </v-sheet>
  </div>
</template>

<script>
  import axios from "axios";
  import WeatherCompCurrent from "./WeatherCompCurrent.vue";

  export default {
    props: {
      title: String,
      latitude: Number,
      longitude: Number,
    },
    components: {
      WeatherCompCurrent,
    },
    data() {
      return {
        labels: {
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          10: "10",
          11: "11",
          12: "12",
          13: "13",
          14: "14",
          15: "15",
          16: "16",
          17: "17",
          18: "18",
          19: "19",
          20: "20",
          21: "21",
          22: "22",
          23: "23",
          24: "24",
        },
        expand: false,
        time: 0,
        forecast: [
          {
            day: "Tuesday",
            icon: "mdi-white-balance-sunny",
            temp: "24\xB0/12\xB0",
          },
          {
            day: "Wednesday",
            icon: "mdi-white-balance-sunny",
            temp: "22\xB0/14\xB0",
          },
          { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
        ],
        weatherData: {
          current: {},
          hourly: [],
          daily: [],
        },
        params: {
          latitude: this.latitude,
          longitude: this.longitude,
          //現在の気温＋天気コード
          current: ["temperature_2m", "weather_code"],
          //時間毎の気温＋降水確率＋天気コード
          hourly: [
            "temperature_2m",
            "precipitation_probability",
            "weather_code",
          ],
          //1日の最高気温＋最低気温＋降水確率
          daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "precipitation_probability_max",
          ],
          timezone: "Asia/Tokyo",
          forecast_days: 1,
        },
        url: "https://api.open-meteo.com/v1/forecast",
        responses: null,
      };
    },
    methods: {
      // 天気取得
      async fetchWeather() {
        try {
          const response = await axios.get(this.url, { params: this.params });
          console.log("API Response:", response.data); // ここでレスポンスを確認
          this.responses = response.data;
          this.processWeatherData(); //エラーメゾット呼び出し
          // this.logWeatherData(); //コンソールログメゾット呼び出し
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      // 時間範囲を形成するためのヘルパー関数
      range(start, stop, step) {
        return Array.from(
          { length: (stop - start) / step },
          (_, i) => start + i * step,
        );
      },
      //レスポンスデータがnullの場合に実行
      processWeatherData() {
        if (!this.responses) {
          console.error("Invalid response data");
          return;
        }

        const utcOffsetSeconds = this.responses.utc_offset_seconds || 0; //日本時間または0を代入
        const current = this.responses.current || {}; //現在のデータ代入
        const hourly = this.responses.hourly || {}; //時間毎のデータ代入
        const daily = this.responses.daily || {}; //1日のデータ代入

        const currentDateTime = current.time ? new Date(current.time) : null;

        //現在の天気データ
        this.weatherData.current = {
          date: currentDateTime ? currentDateTime.toLocaleDateString() : null,
          time: currentDateTime ? currentDateTime.toLocaleTimeString() : null,
          temperature2m: current.temperature_2m || null,
          weatherCode: current.weather_code || null,
        };

        // 時間毎の天気データ
        this.weatherData.hourly = hourly.time
          ? hourly.time.map((t, index) => {
              const dateTime = new Date(t);
              return {
                date: dateTime.toLocaleDateString(),
                time: dateTime.toLocaleTimeString(),
                temperature2m: hourly.temperature_2m[index],
                precipitationProbability:
                  hourly.precipitation_probability[index],
                weatherCode: hourly.weather_code[index],
              };
            })
          : [];

        // 1日の天気データ
        this.weatherData.daily = daily.time
          ? daily.time.map((t, index) => {
              const dateTime = new Date(t);
              return {
                date: dateTime.toLocaleDateString(),
                time: dateTime.toLocaleTimeString(),
                temperature2mMax: daily.temperature_2m_max[index],
                temperature2mMin: daily.temperature_2m_min[index],
                precipitationProbabilityMax:
                  daily.precipitation_probability_max[index],
              };
            })
          : [];
      },
      // 天気アイコンを取得する関数
      weatherIcon() {
        const code = this.weatherData.current.weatherCode;
        if (code == "0") {
          return { icon: "mdi-weather-sunny", color: "yellow" };
        } else if (code <= "3") {
          return { icon: "mdi-weather-partly-cloudy", color: "grey" };
        } else if (code <= "48") {
          return { icon: "mdi-weather-fog", color: "blue-grey" };
        } else if (code <= "55") {
          return { icon: "mdi-weather-pouring", color: "blue" };
        } else if (code <= "57") {
          return { icon: "mdi-weather-snowy-rainy", color: "light-blue" };
        } else if (code <= "65") {
          return { icon: "mdi-weather-pouring", color: "dark-blue" };
        } else if (code <= "67") {
          return { icon: "mdi-weather-snowy-rainy", color: "light-blue" };
        } else if (code <= "75") {
          return { icon: "mdi-weather-snowy", color: "white" };
        } else if (code == "77") {
          return { icon: "mdi-weather-snowy-heavy", color: "white" };
        } else if (code <= "82") {
          return { icon: "mdi-weather-rainy", color: "blue" };
        } else if (code <= "86") {
          return { icon: "mdi-weather-snowy-heavy", color: "white" };
        } else if (code == "95") {
          return { icon: "mdi-weather-lightning", color: "yellow" };
        } else if (code <= "99") {
          return { icon: "mdi-weather-lightning-rainy", color: "yellow" };
        } else {
          return { icon: "mdi-weather-cloudy", color: "grey" }; // デフォルトのアイコンと色
        }
      },
      // SP画面切り替え
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
    created() {
      this.fetchWeather();
    },
  };
</script>
