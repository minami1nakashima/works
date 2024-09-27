<template>
  <div>
    <!-- タイトル -->
    <p
      class="fontStyle"
      :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'"
    >
      現在の天気
    </p>
    <v-sheet class="mx-10">
      <v-row>
        <v-col cols="4">
          <WeatherCompCurrent
            title="Gangneung"
            :latitude="37.7527"
            :longitude="128.8724"
          ></WeatherCompCurrent>
        </v-col>
        <v-col cols="8">
          <WeatherCompDaily
            :latitude="37.7527"
            :longitude="128.8724"
          ></WeatherCompDaily>
        </v-col>
        <v-col cols="12">
          <WeatherCompHourly
            :latitude="37.7527"
            :longitude="128.8724"
          ></WeatherCompHourly>
        </v-col>
      </v-row>
      <Chart
        city="江陵"
        title="Gangneung"
        :latitude="37.7527"
        :longitude="128.8724"
        bgColor="bg-deep-purple-lighten-5"
      ></Chart>
    </v-sheet>
  </div>
</template>
<script>
  import WeatherCompCurrent from "@/components/90_comp/WeatherCompCurrent.vue";
  import WeatherCompDaily from "@/components/90_comp/WeatherCompDaily.vue";
  import WeatherCompHourly from "@/components/90_comp/WeatherCompHourly.vue";
  import Chart from "@/components/90_comp/Chart.vue";

  export default {
    components: {
      WeatherCompCurrent,
      WeatherCompDaily,
      WeatherCompHourly,
      Chart,
    },
    methods: {
      // SP画面切り替え
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
  };
</script>
