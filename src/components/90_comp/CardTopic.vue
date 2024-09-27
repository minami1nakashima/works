<template>
  <v-row class="mt-5">
    <!-- カードコンテンツタイトル -->
    <v-col
      cols="12"
      :class="SpCheck() ? 'pa-0 ml-5 text-subtitle-2' : 'text-h6'"
      class="fontStyle"
    >
      {{ $t("CardTopic") }}
      <br />
      <span :class="SpCheck() ? 'text-caption mb-5' : 'text-subtitle-2 mb-5'">
        {{ $t("CardSubTopic") }}
      </span>
    </v-col>

    <!-- カードコンテンツ -->
    <v-col v-for="item in cardTopics" :key="item.component" class="pa-5">
      <v-card
        id="relative"
        class="mx-auto"
        :width="SpCheck() ? '' : '240'"
        :height="SpCheck() ? '200' : '250'"
      >
        <v-img
          :height="SpCheck() ? '100' : '140'"
          :src="item.src"
          cover
        ></v-img>
        <v-card-title
          class="TitleFont"
          :class="SpCheck() ? 'text-caption font-weight-black mx-n2' : ''"
        >
          {{ $t(item.titleKey) }}
        </v-card-title>
        <p
          style="white-space: pre-wrap"
          :class="SpCheck() ? 'text-caption ml-2' : 'ml-4 text-body-2'"
        >
          {{ $t(item.subKey) }}
        </p>
        <!-- クリックでダイアログ表示 -->
        <p
          id="more"
          class="text-blue font-weight-black pa-3"
          flat
          :class="SpCheck() ? 'text-caption' : 'text-body-2'"
          @click="click(item.component)"
        >
          {{ $t("CardMore") }}
        </p>
      </v-card>
    </v-col>
  </v-row>

  <!-- ダイアログ -->
  <v-dialog v-model="dialog" max-width="1000">
    <v-card>
      <CardNewsDialog :topic="table()" />
    </v-card>
  </v-dialog>
</template>

<script>
  import { cardTopics } from "@/components/90_comp/data/CardTopic.js";
  import CardNewsDialog from "@/components/90_comp/CardNewsDialog.vue";

  export default {
    components: {
      CardNewsDialog,
    },
    data() {
      return {
        dialog: false,
        dialogComp: "", //ダイアログ切り替え
        cardTopics,
      };
    },
    methods: {
      //カードニュースダイアログ
      click(clickComponent) {
        this.dialogComp = clickComponent;
        this.dialog = true;
      },
      // ダイアログ表示処理
      table() {
        const topicsArray = Object.values(this.cardTopics);
        let check = topicsArray.filter((value) => {
          return value.component == this.dialogComp;
        });
        return check[0];
      },
      // SP画面区別処理
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
  };
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap");
  #relative {
    position: relative;
  }

  #more {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .TitleFont {
    font-family: "M PLUS Rounded 1c", sans-serif !important;
    font-weight: 500 !important;
    font-style: normal;
    font-size: 18px !important;
  }

  .textFont {
    font-family: "M PLUS Rounded 1c", sans-serif !important;
    font-weight: 400 !important;
    font-style: normal;
  }
</style>
