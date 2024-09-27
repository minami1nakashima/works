<template>
  <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
    <HomeComp city="gangneung"></HomeComp>
    <v-col class="d-flex align-center justify-center">
      <WeatherCompCurrent
        title="Gangneung"
        :latitude="37.7527"
        :longitude="128.8724"
        class="my-7"
      ></WeatherCompCurrent>
    </v-col>

    <v-col cols="6" class="mx-5">
      <Rate class="my-7" rateColor="gangneung-card"></Rate>
    </v-col>
    <v-col class="d-flex align-center justify-center px-0">
      <UsefulInfomation></UsefulInfomation>
    </v-col>

    <CardTopic />
    <NewsComp />
  </v-row>
</template>

<script>
  import HomeComp from "@/components/90_comp/HomeComp.vue";
  import WeatherCompCurrent from "@/components/90_comp/WeatherCompCurrent.vue";
  import CardTopic from "@/components/90_comp/CardTopic.vue";
  import NewsComp from "@/components/90_comp/NewsComp.vue";
  import Rate from "@/components/90_comp/Rate.vue";
  import UsefulInfomation from "@/components/90_comp/UsefulInfomation.vue";

  export default {
    name: "HomeBusan",
    components: {
      HomeComp,
      WeatherCompCurrent,
      CardTopic,
      NewsComp,
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
