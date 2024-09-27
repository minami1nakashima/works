<template>
  <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
    <v-col class="d-flex align-center justify-center">
      <HomeComp city="seoul"></HomeComp>
    </v-col>
    <v-col class="d-flex align-centerjustify-center mt-7">
      <WeatherCompCurrent
        title="Seoul"
        :latitude="37.566"
        :longitude="126.9784"
      ></WeatherCompCurrent>

      <Rate class="mx-10" rateColor="seoul-card"></Rate>

      <UsefulInfomation></UsefulInfomation>
    </v-col>
    <CardTopic />
    <NewsComp />
  </v-row>
</template>

<script>
  import HomeComp from "@/components/90_comp/HomeComp.vue";
  import CardTopic from "@/components/90_comp/CardTopic.vue";
  import NewsComp from "@/components/90_comp/NewsComp.vue";
  import WeatherCompCurrent from "@/components/90_comp/WeatherCompCurrent.vue";
  import Rate from "@/components/90_comp/Rate.vue";
  import UsefulInfomation from "@/components/90_comp/UsefulInfomation.vue";

  export default {
    name: "HomeSeoul",
    components: {
      HomeComp,
      CardTopic,
      NewsComp,
      WeatherCompCurrent,
      Rate,
      UsefulInfomation,
    },
    methods: {
      // SP画面区別処理
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
  };
</script>
