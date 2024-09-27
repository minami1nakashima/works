<template>
  <!-- 全体カード -->
  <v-card
    variant="outlined"
    class="custom-border"
    height="230"
    max-width="180"
    flat
  >
    <!-- 背景イメージ -->
    <v-img src="@/assets/Components/back.jpg" cover>
      <v-row>
        <!-- タイトル -->
        <v-col
          cols="12"
          class="ml-2 my-3 text-subtitle-1 text-blue-grey-darken-3 fontStyle"
        >
          韓国便利情報
        </v-col>

        <!-- コンテンツボタン -->
        <v-col
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          class="pt-0 px-6 d-flex align-center justify-center"
        >
          <v-btn
            rounded="0"
            block
            flat
            @click="openDialog(item)"
            class="textStyle text-caption"
          >
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-img>

    <!-- ダイアログ -->
    <v-dialog v-model="dialog" width="900">
      <v-card>
        <v-card-title class="pa-4 fontStyle">
          {{ selectedItem.title }}
        </v-card-title>
        <!-- コンテンツ -->
        <v-card-text>
          <p class="fontStyle">
            {{ selectedItem.imgTitle1 }}
          </p>
          <v-img :src="selectedItem.src1"></v-img>
          <v-img :src="selectedItem.src2"></v-img>
          <p class="fontStyle">{{ selectedItem.imgTitle3 }}</p>
          <v-img :src="selectedItem.src3"></v-img>
          <v-img :src="selectedItem.src4"></v-img>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="dialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  import calendar2024 from "@/assets/Components/2024.jpg";
  import holiday2024 from "@/assets/Components/holiday_2024.jpg";
  import calendar2025 from "@/assets/Components/2025.jpg";
  import holiday2025 from "@/assets/Components/holiday_2025.jpg";
  import subway from "@/assets/Components/subway.jpg";

  export default {
    data() {
      return {
        items: [
          {
            title: "韓国のカレンダー",
            imgTitle1: "2024",
            src1: calendar2024,
            src2: holiday2024,
            imgTitle3: "2025",
            src3: calendar2025,
            src4: holiday2025,
          },
          { title: "地下鉄路線図", src1: subway },
        ],
        dialog: false,
        selectedItem: {},
      };
    },
    methods: {
      openDialog(item) {
        this.selectedItem = item;
        this.dialog = true;
      },
    },
  };
</script>

<style>
  .custom-border {
    border: 2px solid #d9dcfa !important;
  }
</style>
