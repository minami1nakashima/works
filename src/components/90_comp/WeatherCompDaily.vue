<template>
  <h3 class="fontStyle mb-3">明日以降の天気</h3>
  <v-divider :thickness="4" color="info" class="my-2"></v-divider>
  <!-- 明日以降の天気カード -->
  <div class="card-container">
    <v-card
      v-for="(time, index) in weatherData.daily.time.slice(1)"
      :key="index"
      width="350"
      height="180"
    >
      <!-- 日付 -->
      <v-card-item class="text-subtitle-1 font-weight-bold">
        {{ time.toLocaleDateString() }}
      </v-card-item>

      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <!-- 天気予報 -->
          <v-col class="fontStyle text-h5 d-flex justify-center" cols="6">
            {{ weatherIcon(weatherData.daily.weatherCode[index + 1]).text }}
          </v-col>
          <!-- 天気アイコン -->
          <v-col class="d-flex justify-center mt-n2" cols="5">
            <v-icon
              :color="
                weatherIcon(weatherData.daily.weatherCode[index + 1]).color
              "
              :icon="weatherIcon(weatherData.daily.weatherCode[index + 1]).icon"
              size="60"
            ></v-icon>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider
        :thickness="3"
        color="indigo"
        class="mx-auto my-2 border-opacity-100"
        width="90%"
      ></v-divider>
      <!-- 詳細 -->
      <div class="mt-2 d-flex justify-space-between text-subtitle-2">
        <v-list-item density="compact">
          <p>最高気温</p>
          <p class="text-red">
            {{ weatherData.daily.temperature2mMax[index + 1] }}°C
          </p>
        </v-list-item>
        <v-list-item density="compact">
          <p>最低気温</p>
          <p class="text-blue">
            {{ weatherData.daily.temperature2mMin[index + 1] }}°C
          </p>
        </v-list-item>
        <v-list-item density="compact">
          <p>降水確率</p>
          <p>{{ weatherData.daily.precipitationProbabilityMax[index + 1] }}%</p>
        </v-list-item>
      </div>
    </v-card>
  </div>
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
        weatherData: {
          daily: {
            time: [],
            weatherCode: [],
            temperature2mMax: [],
            temperature2mMin: [],
            precipitationProbabilityMax: [],
          },
        },
      };
    },
    // 天気情報取得
    async created() {
      // 検索条件
      const params = {
        latitude: this.latitude,
        longitude: this.longitude,
        daily: [
          "weather_code",
          "temperature_2m_max",
          "temperature_2m_min",
          "precipitation_probability_max",
        ],
        timezone: "Asia/Tokyo",
        forecast_days: 3,
      };
      const url = "https://api.open-meteo.com/v1/forecast";

      // データ代入
      try {
        const response = await axios.get(url, { params });
        const data = response.data;
        console.log("Dailyレスポンス", data);

        if (data && data.daily) {
          const daily = data.daily;

          if (daily.time && Array.isArray(daily.time)) {
            this.weatherData.daily.time = daily.time.map((t) => new Date(t));
            this.weatherData.daily.weatherCode = daily.weather_code || [];
            this.weatherData.daily.temperature2mMax =
              daily.temperature_2m_max || [];
            this.weatherData.daily.temperature2mMin =
              daily.temperature_2m_min || [];
            this.weatherData.daily.precipitationProbabilityMax =
              daily.precipitation_probability_max || [];
          } else {
            console.error("データ構造が無効です:", data);
          }
        }
      } catch (error) {
        console.error("天気データの取得エラー:", error);
      }
    },
    methods: {
      // 天気アイコン＋イメージ
      weatherIcon(code) {
        // 晴れ
        if (code === "0") {
          return {
            icon: "mdi-weather-sunny",
            color: "orange-darken-4",
            text: "快晴",
          };
          // 晴れ一部曇り
        } else if (code <= "3") {
          return {
            icon: "mdi-weather-partly-cloudy",
            color: "yellow-lighten-2",
            text: "晴れ",
          };
          // 霧
        } else if (code <= "48") {
          return {
            icon: "mdi-weather-fog",
            color: "blue-grey",
            text: "霧",
          };
          // 霧雨
        } else if (code <= "55") {
          return {
            icon: "mdi-weather-pouring",
            color: "blue-darken-4",
            text: "雨",
          };
          // 凍結霧雨
        } else if (code <= "57") {
          return {
            icon: "mdi-weather-snowy-rainy",
            color: "light-blue-lighten-3",
            text: "雨",
          };
          // 雨
        } else if (code <= "65") {
          return {
            icon: "mdi-weather-pouring",
            color: "blue-darken-4",
            text: "雨",
          };
          // 凍結雨
        } else if (code <= "67") {
          return {
            icon: "mdi-weather-snowy-rainy",
            color: "light-blue-lighten-3",
            text: "雨",
          };
          // 雪
        } else if (code <= "75") {
          return {
            icon: "mdi-weather-snowy",
            color: "blue-lighten-4",
            text: "雪",
          };
          // 雪玉
        } else if (code == "77") {
          return {
            icon: "mdi-weather-snowy-heavy",
            color: "blue-lighten-3",
            text: "雪",
          };
          // 大雨
        } else if (code <= "82") {
          return {
            icon: "mdi-weather-rainy",
            color: "light-blue-lighten-3",
            text: "大雨",
          };
          // 大雪
        } else if (code <= "86") {
          return {
            icon: "mdi-weather-snowy-heavy",
            color: "blue-lighten-4",
            text: "大雪",
          };
          //雷
        } else if (code == "95") {
          return {
            icon: "mdi-weather-lightning",
            color: "yellow",
            tet: "雷",
          };
          //台風
        } else if (code <= "99") {
          return {
            icon: "mdi-weather-lightning-rainy",
            color: "yellow",
            text: "台風",
          };
        } else {
          return {
            icon: "mdi-weather-cloudy",
            color: "grey",
          };
        }
      },
    },
  };
</script>

<style>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 38px; /* カード間のスペース */
  }
</style>
