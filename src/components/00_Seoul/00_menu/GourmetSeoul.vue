<template>
  <div>
    <p
      class="fontStyle"
      :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'"
    >
      K-FOODおすすめ紹介
    </p>
    <v-sheet :class="SpCheck() ? 'mx-1' : 'mx-10'">
      <!-- ランキング表タブ -->
      <v-item-group>
        <v-tabs v-model="tab">
          <!-- タブタイトル -->
          <v-tab
            v-for="item in gourmetData.Category"
            :key="item.page"
            :class="tabSpCheck(item)"
            :value="item.page"
            class="textFont rounded-t-lg ml-1 border-t-lg border-e-lg border-s-lg"
            :width="SpCheck() ? '30' : '120'"
            :height="SpCheck() ? '28' : '35'"
          >
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </v-item-group>

      <!-- ランキング表 -->
      <v-window v-model="tab" :class="SpCheck() ? 'mt-n6' : 'mt-n4'">
        <v-window-item :value="tab">
          <gourmetcomp :tab="tab" :table="table"></gourmetcomp>
        </v-window-item>
      </v-window>
    </v-sheet>
  </div>
</template>

<script>
  import gourmetcomp from "@/components/90_comp/GourmetComp.vue";
  import gourmetData from "@/components/00_Seoul/03_gourmet/gourmetData.js";

  export default {
    components: {
      gourmetcomp,
    },
    data() {
      return {
        gourmetData, // データ別ファイル
        tab: "1", // 初期タブを設定
      };
    },
    methods: {
      // SP画面切り替え
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
      // タブタイトルでclassに文字列と関数を適用
      tabSpCheck(category) {
        return this.$vuetify.display.smAndDown
          ? `text-caption ${category.css}`
          : category.css;
      },
    },
    computed: {
      // 各タブごとにランキング表データを切り替える
      table() {
        if (this.tab === "1") {
          return this.gourmetData.theme.food;
        } else if (this.tab === "2") {
          return this.gourmetData.theme.cafe;
        } else {
          return this.gourmetData.theme.convenience;
        }
      },
    },
  };
</script>

<style>
  .id1 {
    background-color: rgb(224, 237, 254);
  }

  .id2 {
    background-color: rgb(254, 245, 224);
  }

  .id3 {
    background-color: #eeffd8;
  }

  .v-tab-item--selected.id1 {
    background-color: rgb(167, 239, 255);
  }

  .v-tab-item--selected.id2 {
    background-color: rgb(255, 196, 152);
  }

  .v-tab-item--selected.id3 {
    background-color: #deffb3;
  }

  .v-card.styleColor1 {
    border-color: rgb(231, 249, 253) !important;
  }

  .v-card.styleColor2 {
    border-color: rgb(254, 245, 224) !important;
  }

  .v-card.styleColor3 {
    border-color: #eeffd8 !important;
  }

  .bgColor1 {
    background-color: rgb(231, 249, 253);
  }

  .bgColor2 {
    background-color: rgb(254, 245, 224);
  }

  .bgColor3 {
    background-color: #eeffd8;
  }
</style>
