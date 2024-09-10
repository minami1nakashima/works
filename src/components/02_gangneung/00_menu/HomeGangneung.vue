<template>
  <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
    <HomeComp city="gangneung"></HomeComp>
    <CardTopic />
    <NewsComp />
  </v-row>
</template>

<script>
  import HomeComp from "@/components/90_comp/HomeComp.vue";
  import CardTopic from "@/components/90_comp/CardTopic.vue";
  import NewsComp from "@/components/90_comp/NewsComp.vue";

  export default {
    name: "HomeBusan",
    components: {
      HomeComp,
      CardTopic,
      NewsComp,
    },
    methods: {
      // SP画面区別処理
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
  };
</script>
