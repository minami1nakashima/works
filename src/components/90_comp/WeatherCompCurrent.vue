<template>
  <!-- 現在の天気カード -->
  <v-card width="300" height="230">
    <v-img class="text-white" height="160" :src="weatherIcon.image" cover>
      <!-- 都市名 -->
      <v-card-item :title="title">
        <template v-slot:subtitle>
          {{ weatherData.current.date }} {{ weatherData.current.time }}
        </template>
      </v-card-item>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <!-- 現在の気温 -->
          <v-col class="text-h3" cols="7">
            {{ weatherData.current.temperature2m }}°C
          </v-col>
          <!-- 天気アイコン -->
          <v-col class="text-right" cols="5">
            <v-icon
              :color="weatherIcon.color"
              :icon="weatherIcon.icon"
              size="70"
            ></v-icon>
          </v-col>
        </v-row>
      </v-card-text>
    </v-img>
    <!-- 詳細 -->
    <div
      class="mt-2 d-flex justify-space-between textStyle"
      v-for="(entry, index) in weatherData.daily"
      :key="index"
    >
      <v-list-item density="compact" :title="$t('temperature2mMax')">
        <p class="text-red">{{ entry.temperature2mMax }}°C</p>
      </v-list-item>
      <v-list-item density="compact" :title="$t('temperature2mMin')">
        <p class="text-blue">{{ entry.temperature2mMin }}°C</p>
      </v-list-item>
      <v-list-item density="compact" :title="$t('precipitationProbabilityMax')">
        <p>{{ entry.precipitationProbabilityMax }}%</p>
      </v-list-item>
    </div>
  </v-card>
</template>

<script>
  import axios from "axios";
  import sunny from "@/assets/Seoul/weather/sunny.jpg";
  import sunnyEvening from "@/assets/Seoul/weather/sunnyEvening.jpg";
  import sunnyNight from "@/assets/Seoul/weather/sunnyNight.jpg";
  import cloudySunny from "@/assets/Seoul/weather/cloudySunny.jpg";
  import cloudySunnyEvening from "@/assets/Seoul/weather/cloudySunnyEvening.jpg";
  import cloudySunnyNight from "@/assets/Seoul/weather/cloudySunnyNight.jpg";
  import fog from "@/assets/Seoul/weather/fog.jpg";
  import fogEvening from "@/assets/Seoul/weather/fogEvening.jpg";
  import fogNight from "@/assets/Seoul/weather/fogNight.jpg";
  import drizzle from "@/assets/Seoul/weather/drizzle.jpg";
  import drizzleNight from "@/assets/Seoul/weather/drizzleNight.jpg";
  import rainy from "@/assets/Seoul/weather/rainy.jpg";
  import rainyNight from "@/assets/Seoul/weather/rainyNight.jpg";
  import freezingRain from "@/assets/Seoul/weather/freezingRain.jpg";
  import freezinRainNight from "@/assets/Seoul/weather/freezingRainNight.jpg";
  import snow from "@/assets/Seoul/weather/snow.jpg";
  import snowNight from "@/assets/Seoul/weather/snowNight.jpg";
  import rainShower from "@/assets/Seoul/weather/rainShower.jpg";
  import rainShowerNight from "@/assets/Seoul/weather/rainShowerNight.jpg";
  import snowShower from "@/assets/Seoul/weather/snowShower.jpg";
  import snowShowerNight from "@/assets/Seoul/weather/snowShowerNight.jpg";
  import thunder from "@/assets/Seoul/weather/thunder.jpg";
  import thunderBig from "@/assets/Seoul/weather/thunderBig.jpg";

  export default {
    props: {
      title: String,
      latitude: Number,
      longitude: Number,
    },
    data() {
      return {
        // 天気データ取得
        weatherData: {
          current: {},
          daily: [],
        },
        // 天気アイコンデフォルト
        weatherIcon: {
          icon: "mdi-weather-cloudy",
          color: "grey",
          image: sunny, // デフォルトの画像
        },
        // 検索条件
        params: {
          latitude: this.latitude,
          longitude: this.longitude,
          current: ["temperature_2m", "weather_code"],
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
      // 天気データ取得
      async fetchWeather() {
        try {
          const response = await axios.get(this.url, { params: this.params });
          this.responses = response.data;
          console.log("Currentレスポンス", response);
          this.processWeatherData(); //天気データ
        } catch (error) {
          console.error("Currentレスポンス", error);
        }
      },
      // レスポンス取得
      processWeatherData() {
        if (!this.responses) {
          console.error("Invalid response data");
          return;
        }

        const current = this.responses.current || {};
        const daily = this.responses.daily || {};

        const currentDateTime = current.time
          ? new Date(current.time)
          : new Date();

        // 現在の天気データ
        this.weatherData.current = {
          date: currentDateTime.toLocaleDateString(),
          time: currentDateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temperature2m: current.temperature_2m || null,
          weatherCode: current.weather_code || null,
        };

        // 時間ごとの天気データ
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
      // 天気アイコン＋イメージ
      updateWeatherIcon() {
        const code = this.weatherData.current.weatherCode;
        const time = parseInt(this.weatherData.current.time.split(":")[0], 10); // 時間を数値に変換
        let image;

        // 晴れ
        if (code === "0") {
          if (time > 5 && time < 16) {
            image = sunny;
          } else if (time < 19) {
            image = sunnyEvening;
          } else {
            image = sunnyNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-sunny",
            color: "orange-darken-4",
            image: image,
          };
          // 晴れ一部曇り
        } else if (code <= "3") {
          if (time > 5 && time < 16) {
            image = cloudySunny;
          } else if (time < 19) {
            image = cloudySunnyEvening;
          } else {
            image = cloudySunnyNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-partly-cloudy",
            color: "yellow-lighten-2",
            image: image,
          };
          // 霧
        } else if (code <= "48") {
          if (time > 5 && time < 16) {
            image = fog;
          } else if (time < 19) {
            image = fogEvening;
          } else {
            image = fogNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-fog",
            color: "blue-grey",
            image: image,
          };
          // 霧雨
        } else if (code <= "55") {
          if (time > 5 && time < 16) {
            image = drizzle;
          } else if (time < 19) {
            image = drizzle;
          } else {
            image = drizzleNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-pouring",
            color: "blue-darken-4",
            image: image,
          };
          // 凍結霧雨
        } else if (code <= "57") {
          if (time > 5 && time < 16) {
            image = drizzle;
          } else if (time < 19) {
            image = drizzle;
          } else {
            image = drizzleNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-snowy-rainy",
            color: "light-blue-lighten-3",
            image: image,
          };
          // 雨
        } else if (code <= "65") {
          if (time > 5 && time < 16) {
            image = rainy;
          } else if (time < 19) {
            image = rainy;
          } else {
            image = rainyNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-pouring",
            color: "blue-darken-4",
            image: image,
          };
          // 凍結雨
        } else if (code <= "67") {
          if (time > 5 && time < 16) {
            image = freezingRain;
          } else if (time < 19) {
            image = freezinRainNight;
          } else {
            image = freezinRainNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-snowy-rainy",
            color: "light-blue-lighten-3",
            image: image,
          };
          // 雪
        } else if (code <= "75") {
          if (time > 5 && time < 16) {
            image = snow;
          } else if (time < 19) {
            image = snowNight;
          } else {
            image = snowNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-snowy",
            color: "blue-lighten-4",
            image: image,
          };
          // 雪玉
        } else if (code == "77") {
          if (time > 5 && time < 16) {
            image = snow;
          } else if (time < 19) {
            image = snowNight;
          } else {
            image = snowNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-snowy-heavy",
            color: "blue-lighten-3",
            image: image,
          };
          // 大雨
        } else if (code <= "82") {
          if (time > 5 && time < 16) {
            image = rainShower;
          } else if (time < 19) {
            image = rainShowerNight;
          } else {
            image = rainShowerNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-rainy",
            color: "light-blue-lighten-3",
            image: image,
          };
          // 大雪
        } else if (code <= "86") {
          if (time > 5 && time < 16) {
            image = snowShower;
          } else if (time < 19) {
            image = snowShowerNight;
          } else {
            image = snowShowerNight;
          }
          this.weatherIcon = {
            icon: "mdi-weather-snowy-heavy",
            color: "blue-lighten-4",
            image: image,
          };
          // 雷
        } else if (code == "95") {
          this.weatherIcon = {
            icon: "mdi-weather-lightning",
            color: "yellow",
            image: thunder,
          };
          // 台風
        } else if (code <= "99") {
          this.weatherIcon = {
            icon: "mdi-weather-lightning-rainy",
            color: "yellow",
            image: thunderBig,
          };
        } else {
          this.weatherIcon = {
            icon: "mdi-weather-cloudy",
            color: "grey",
            image: image,
          }; // デフォルトのアイコンと色
        }
      },
    },
    watch: {
      "weatherData.current.time"(newVal) {
        if (newVal) {
          this.updateWeatherIcon(); // timeが設定された後にweatherIconを更新
        }
      },
    },
    created() {
      this.fetchWeather();
    },
  };
</script>
