<template>
  <!-- 1時間の天気カード -->
  <v-card height="200" width="100%">
    <v-card-item class="font-weight-bold">
      <p>1時間ごとの詳しい天気</p>
    </v-card-item>
    <div>
      <v-slider
        v-model="time"
        :max="25"
        :ticks="labels"
        color="primary"
        density="compact"
        show-ticks="always"
        thumb-size="0"
        width="1100px"
        readonly
      ></v-slider>
      <div class="d-flex flex-wrap ml-10">
        <div
          v-for="(entry, index) in weatherData.hourly"
          :key="index"
          style="width: 44px"
        >
          <v-icon
            :color="weatherIcon(entry.weatherCode).color"
            :icon="weatherIcon(entry.weatherCode).icon"
          ></v-icon>
          <p class="text-caption">{{ entry.temperature2m }}°C</p>
          <p class="text-caption">{{ entry.precipitationProbability }}%</p>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
  import axios from "axios";

  export default {
    props: {
      latitude: Number,
      longitude: Number,
    },
    data() {
      return {
        time: new Date().getHours() + 1, // 現在の時間を初期値に設定
        labels: {
          0: "",
          1: "0",
          2: "1",
          3: "2",
          4: "3",
          5: "4",
          6: "5",
          7: "6",
          8: "7",
          9: "8",
          10: "9",
          11: "10",
          12: "11",
          13: "12",
          14: "13",
          15: "14",
          16: "15",
          17: "16",
          18: "17",
          19: "18",
          20: "19",
          21: "20",
          22: "21",
          23: "22",
          24: "23",
          25: "",
        },
        weatherData: {
          current: {},
          hourly: [],
        },
        params: {
          latitude: this.latitude,
          longitude: this.longitude,
          //時間毎の気温＋降水確率＋天気コード
          hourly: [
            "temperature_2m",
            "precipitation_probability",
            "weather_code",
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
          console.log("Hourlyレスポンス", response.data); // ここでレスポンスを確認
          this.responses = response.data;
          this.processWeatherData(); //レスポンスデータがnullの場合に実行
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      //レスポンスデータがnullの場合に実行
      processWeatherData() {
        if (!this.responses) {
          console.error("Invalid response data");
          return;
        }

        const utcOffsetSeconds = this.responses.utc_offset_seconds || 0; //日本時間または0を代入
        const hourly = this.responses.hourly || {}; //時間毎のデータ代入

        // 時間毎の天気データ
        this.weatherData.hourly = hourly.time
          ? hourly.time.map((t, index) => {
              const dateTime = new Date(t);
              return {
                time: dateTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                temperature2m: Math.round(hourly.temperature_2m[index]), // 小数点を消す
                precipitationProbability:
                  hourly.precipitation_probability[index],
                weatherCode: hourly.weather_code[index],
              };
            })
          : [];
      },

      // 天気アイコンを取得する関数
      weatherIcon(code) {
        if (code == "0") {
          return { icon: "mdi-weather-sunny", color: "orange-darken-4" };
        } else if (code <= "3") {
          return {
            icon: "mdi-weather-partly-cloudy",
            color: "yellow-lighten-2",
          };
        } else if (code <= "48") {
          return { icon: "mdi-weather-fog", color: "blue-grey" };
        } else if (code <= "55") {
          return { icon: "mdi-weather-pouring", color: "blue-darken-4" };
        } else if (code <= "57") {
          return {
            icon: "mdi-weather-snowy-rainy",
            color: "light-blue-lighten-3",
          };
        } else if (code <= "65") {
          return { icon: "mdi-weather-pouring", color: "blue-darken-4" };
        } else if (code <= "67") {
          return {
            icon: "mdi-weather-snowy-rainy",
            color: "light-blue-lighten-3",
          };
        } else if (code <= "75") {
          return { icon: "mdi-weather-snowy", color: "blue-lighten-4" };
        } else if (code == "77") {
          return { icon: "mdi-weather-snowy-heavy", color: "blue-lighten-4" };
        } else if (code <= "82") {
          return { icon: "mdi-weather-rainy", color: "light-blue-lighten-3" };
        } else if (code <= "86") {
          return { icon: "mdi-weather-snowy-heavy", color: "blue-lighten-4" };
        } else if (code == "95") {
          return { icon: "mdi-weather-lightning", color: "yellow" };
        } else if (code <= "99") {
          return { icon: "mdi-weather-lightning-rainy", color: "yellow" };
        } else {
          return { icon: "mdi-weather-cloudy", color: "grey" }; // デフォルトのアイコンと色
        }
      },
    },
    computed: {
      filteredHourlyData() {
        return this.weatherData.hourly.filter(
          (entry) => parseInt(entry.time.split(":")[0]) === this.time,
        );
      },
    },
    created() {
      this.fetchWeather();
    },
  };
</script>
