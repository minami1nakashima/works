<template>
  <div :class="bgColor" class="pa-2 mt-15">
    <p class="fontStyle text-h6 mt-4">{{ city }}の四季</p>
    <v-divider
      :thickness="3"
      color="indigo-darken-4"
      class="my-2 mx-auto"
      width="100%"
    ></v-divider>
    <!-- テキスト -->
    <p class="textFont ml-5 mt-5" style="line-height: 2">
      韓国の四季を見てみましょう。
      <br />
      韓国にも四季はありますが、春・秋は短く、夏・冬が比較的長いのが特徴です。
      <br />
      また、韓国の冬は日本と比べ、とても寒いです。
      <br />
      <strong>
        過去3年分の平均気温をグラフにまとめてみました。
        <br />
        12、1、2月の
        <span class="text-light-blue-lighten-1">
          平均最低気温がマイナス気温
        </span>
        になっていることから、とても寒いことがうかがえます。
        <br />
        6、7、8月の
        <span class="text-red-darken-1">平均最高気温</span>
        を見ると、日本に比べ気温が低いです。湿気も（ムシムシ）比較的低いため、夏は日本より過ごしやすいかもしれません。
      </strong>
    </p>

    <!-- チャートグラフ -->
    <div v-if="monthlyAverages">
      <apexchart
        class="mt-5 bg-white"
        ref="chart"
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>

      <!-- 詳細パネル -->
      <v-expansion-panels class="my-1" flat>
        <v-expansion-panel>
          <!-- タイトル -->
          <v-expansion-panel-title class="font-weight-black">
            詳しいデータを見る
          </v-expansion-panel-title>
          <!-- コンテンツ -->
          <v-expansion-panel-text>
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Average Max Temperature (°C)</th>
                  <th>Average Min Temperature (°C)</th>
                  <th>Average Precipitation (mm)</th>
                </tr>
              </thead>
              <tbody>
                平均になってる
                <tr v-for="(data, month) in monthlyAverages" :key="month">
                  <td>{{ month }}</td>
                  <td>{{ data.avgMaxTemp }}</td>
                  <td>{{ data.avgMinTemp }}</td>
                  <td>{{ data.avgPrecipitation }}</td>
                </tr>
              </tbody>
            </table>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import VueApexCharts from "vue3-apexcharts";

  export default {
    components: {
      apexchart: VueApexCharts,
    },
    props: {
      city: String,
      bgColor: String,
      title: String,
      latitude: Number,
      longitude: Number,
    },
    data() {
      return {
        series: [], //チャートの中身
        weatherData: null, //天気データ
        threeYearsAgo: "", //検索日付
        lastYearEnd: "", //検索日付
        monthlyAverages: null, //天気データの平均
      };
    },
    async created() {
      this.date(); //日付のフォーマット
      const params = {
        latitude: this.latitude, //緯度
        longitude: this.longitude, //経度
        start_date: this.threeYearsAgo, //検索日付
        end_date: this.lastYearEnd, //検索日付
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
        console.log("Chartレスポンス", response.data);
        this.processWeatherData(response.data); //天気データ取得
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
            temperature2mMax: daily.temperature_2m_max, //最高気温
            temperature2mMin: daily.temperature_2m_min, //最低気温
            precipitationSum: daily.precipitation_sum, //降水量
          },
        };

        this.Averages(); //平均計算処理
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

        // 年だけ
        const threeYearsAgoYear = currentYear - 3;
        this.threeYearsAgoYear = String(threeYearsAgoYear);

        // 去年の12月31日
        const lastYearEnd = new Date(currentYear - 1, 11, 31);
        const formattedLastYearEnd = formatDate(lastYearEnd);
        console.log(`去年の12月31日: ${formattedLastYearEnd}`);
        this.lastYearEnd = formattedLastYearEnd;

        // 年だけ
        const lastYear = currentYear - 1;
        this.lastYear = String(lastYear);
        console.log(this.lastYear);

        return {
          threeYearsAgo: this.threeYearsAgo,
          lastYearEnd: this.lastYearEnd,
          title: "(" + this.threeYearsAgoYear + "-" + this.lastYear + ")",
        };
      },
      // 各月ごとの平均を計算
      Averages() {
        const monthlyData = {};

        this.weatherData.daily.time.forEach((date, index) => {
          const month = date.slice(5, 7); // MM形式に変換

          if (!monthlyData[month]) {
            monthlyData[month] = {
              maxTempSum: 0,
              minTempSum: 0,
              precipitationSum: 0,
              count: 0,
            };
          }

          monthlyData[month].maxTempSum +=
            this.weatherData.daily.temperature2mMax[index];
          monthlyData[month].minTempSum +=
            this.weatherData.daily.temperature2mMin[index];
          monthlyData[month].precipitationSum +=
            this.weatherData.daily.precipitationSum[index];
          monthlyData[month].count += 1;
        });

        this.monthlyAverages = Object.keys(monthlyData).reduce((acc, month) => {
          const data = monthlyData[month];
          acc[month] = {
            avgMaxTemp: (data.maxTempSum / data.count).toFixed(2),
            avgMinTemp: (data.minTempSum / data.count).toFixed(2),
            avgPrecipitation: (data.precipitationSum / data.count).toFixed(2),
          };
          return acc;
        }, {});

        this.updateChartSeries();
      },
      // グラフのデータを更新
      updateChartSeries() {
        const months = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
        const avgMaxTemp = months.map(
          (month) => this.monthlyAverages[month]?.avgMaxTemp || 0,
        );
        const avgMinTemp = months.map(
          (month) => this.monthlyAverages[month]?.avgMinTemp || 0,
        );
        const avgPrecipitation = months.map(
          (month) => this.monthlyAverages[month]?.avgPrecipitation || 0,
        );

        this.series = [
          {
            name: "平均最高気温",
            type: "line",
            data: avgMaxTemp,
            color: "#C62828", // 赤色
          },
          {
            name: "平均最低気温",
            type: "line",
            data: avgMinTemp,
            color: "#29B6F6",
          },
          {
            name: "平均降水量",
            type: "column",
            data: avgPrecipitation,
            color: "#90A4AE",
          },
        ];
      },
    },
    // データの加工をしやすくするためcomputed
    computed: {
      chartOptions() {
        let option = {
          chart: {
            height: 350,
            type: "line",
          },
          stroke: {
            width: [4, 4], // 折れ線グラフの線の太さ
          },
          title: {
            text: this.date().title,
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [0, 1],
          },
          labels: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          yaxis: [
            {
              title: {
                text: "気温（°C）",
              },
              min: -10, // y軸の最小値
              max: 40, // y軸の最大値
              tickAmount: 5, // メモリの数
              seriesName: ["平均最高気温", "平均最低気温"], // 左のy軸に関連付けるシリーズ名
            },
            {
              opposite: true,
              title: {
                text: "降水量（mm）",
              },
              min: 0, // y軸の最小値
              max: 100, // y軸の最大値
              tickAmount: 5, // メモリの数
              seriesName: ["平均降水量"], // 右のy軸に関連付けるシリーズ名
            },
          ],
        };
        console.log("this", this.date());
        return option;
      },
    },
  };
</script>
