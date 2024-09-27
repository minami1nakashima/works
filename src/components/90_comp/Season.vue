<template>
  <div>
    <h1>Weather Data</h1>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else-if="weatherData">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Max Temperature (°C)</th>
            <th>Min Temperature (°C)</th>
            <th>Precipitation (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in weatherData.daily.time" :key="index">
            <td>{{ data }}</td>
            <td>{{ weatherData.daily.temperature2mMax[index] }}</td>
            <td>{{ weatherData.daily.temperature2mMin[index] }}</td>
            <td>{{ weatherData.daily.precipitationSum[index] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading weather data...</p>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        weatherData: null,
        error: null,
        threeYearsAgo: "",
        lastYearEnd: "",
      };
    },
    async created() {
      this.date();
      const params = {
        latitude: 37.566,
        longitude: 126.9784,
        start_date: this.threeYearsAgo,
        end_date: this.lastYearEnd,
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "precipitation_sum",
        ],
        timezone: "Asia/Tokyo",
      };
      const url = "https://archive-api.open-meteo.com/v1/archive";

      try {
        const response = await axios.get(url, { params });
        console.log("API Response:", response.data); // デバッグ用に追加
        this.processWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.error = "Error fetching weather data: " + error.message;
      }
    },
    methods: {
      // 過去の天気データ取得
      processWeatherData(response) {
        const daily = response.daily;

        this.weatherData = {
          daily: {
            time: daily.time,
            temperature2mMax: daily.temperature_2m_max,
            temperature2mMin: daily.temperature_2m_min,
            precipitationSum: daily.precipitation_sum,
          },
        };
      },
      // 検索条件の日付
      date() {
        // 今年の年を取得
        const currentYear = new Date().getFullYear();

        // 日付をYYYY-MM-DD形式でフォーマットする関数
        function formatDate(date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        }

        // 3年前の1月1日
        const threeYearsAgo = new Date(currentYear - 3, 0, 1);
        const formattedThreeYearsAgo = formatDate(threeYearsAgo);
        console.log(`3年前の1月1日: ${formattedThreeYearsAgo}`);
        this.threeYearsAgo = formattedThreeYearsAgo;

        // 去年の12月31日
        const lastYearEnd = new Date(currentYear - 1, 11, 31);
        const formattedLastYearEnd = formatDate(lastYearEnd);
        console.log(`去年の12月31日: ${formattedLastYearEnd}`);
        this.lastYearEnd = formattedLastYearEnd;

        return {
          threeYearsAgo: this.threeYearsAgo,
          lastYearEnd: this.lastYearEnd,
        };
      },
    },
  };
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }
</style>
