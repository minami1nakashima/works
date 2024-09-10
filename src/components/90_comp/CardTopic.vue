<template>
  <v-row class="mt-5">
    <!-- カードコンテンツタイトル -->
    <v-col
      cols="12"
      :class="SpCheck() ? 'pa-0 ml-5 text-subtitle-2' : 'text-h5'"
      class="font-weight-black"
    >
      韓国のあんなこんな
      <br />
      <span :class="SpCheck() ? 'text-caption mb-5' : 'text-subtitle-2 mb-5'">
        \ 様々な情報をお伝えします。/
      </span>
    </v-col>

    <!-- カードコンテンツ -->
    <v-col v-for="item in CardTopic.topic" :key="item" class="pa-5">
      <v-card
        id="relative"
        class="mx-auto"
        :width="SpCheck() ? '' : '240'"
        :height="SpCheck() ? '200' : '280'"
      >
        <v-img
          :height="SpCheck() ? '100' : '150'"
          :src="item.src"
          cover
        ></v-img>
        <v-card-title
          :class="SpCheck() ? 'text-caption font-weight-black mx-n2' : ''"
        >
          {{ item.title }}
        </v-card-title>
        <p
          style="white-space: pre-wrap"
          :class="SpCheck() ? 'text-caption ml-2' : 'ml-4 text-body-2'"
        >
          {{ item.sub }}
        </p>
        <!-- クリックでダイアログ表示 -->
        <p
          id="more"
          class="text-blue font-weight-black pa-3"
          flat
          :class="SpCheck() ? 'text-caption' : 'text-body-2'"
          @click="click(item.component)"
        >
          もっと見る
        </p>
      </v-card>
    </v-col>
  </v-row>

  <!-- ダイアログ -->
  <!-- 中身未作成 -->
  <v-dialog v-model="dialog" max-width="1000">
    <v-card>
      <CardNewsDialog :topic="table()" />
    </v-card>
  </v-dialog>
</template>

<script>
  import CardTopic from "./data/CardTopic";
  import CardNewsDialog from "./CardNewsDialog.vue";

  export default {
    components: {
      CardNewsDialog,
    },
    data() {
      return {
        dialog: false,
        dialogComp: "", //ダイアログ切り替え
        CardTopic,
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
        const topicsArray = Object.values(this.CardTopic.topic);
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
  #relative {
    position: relative;
  }

  #more {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
