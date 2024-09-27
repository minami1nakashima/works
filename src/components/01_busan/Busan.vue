<template>
  <!-- 背景色 -->
  <v-tabs
    v-model="tab"
    density="compact"
    bg-color="amber-lighten-5"
    color="amber-darken-3"
    grow
  >
    <div width="1200" class="mx-auto">
      <v-tab
        v-for="menuItem in tabs"
        :key="menuItem"
        :value="menuItem"
        class="font-weight-black comfortable"
        :class="SpCheck() ? 'text-caption' : 'text-subtitle-2'"
      >
        {{ $t(menuItem) }}
      </v-tab>
    </div>
  </v-tabs>

  <!-- 画面内容表示 -->
  <v-container>
    <v-divider class="mt-7 mb-5 mx-auto" length="95%"></v-divider>
    <component :is="tab + 'Busan'"></component>
  </v-container>
</template>

<script>
  import HomeBusan from "./00_menu/HomeBusan.vue";
  // import Spots from "@/components/00_Seoul/00_menu/Spots.vue";
  // import Gourmet from "@/components/00_Seoul/00_menu/Gourmet.vue";
  // import Traffic from "@/components/00_Seoul/00_menu/Traffic.vue";
  // import Hotel from "@/components/00_Seoul/00_menu/Hotel.vue";
  // import Airplane from "@/components/00_Seoul/00_menu/Airplane.vue";
  // import MannersBusan from "./00_menu/MannersBusan.vue";
  import WordBusan from "./00_menu/WordBusan.vue";
  import SeasonBusan from "./00_menu/SeasonBusan.vue";

  export default {
    components: {
      HomeBusan,
      // Spots,
      // Gourmet,
      // Traffic,
      // Hotel,
      // Airplane,
      // MannersBusan,
      WordBusan,
      SeasonBusan,
    },
    data() {
      return {
        tab: "Home",
        tabs: [
          "Home",
          // "Spots",
          // "Gourmet",
          // "Traffic",
          // "Hotel",
          // "Airplane",
          // "Manners",
          "Word",
          "Season",
        ],
      };
    },
    methods: {
      // SP画面区別処理
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
  };
</script>

<style>
  #tb_menu:hover {
    color: #00a0ea;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .size {
    min-width: auto !important;
  }
</style>
