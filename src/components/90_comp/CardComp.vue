<template>
  <v-row>
    <v-col
      v-for="item in cardItem"
      :key="item.component"
      :class="SpCheck() ? 'px-0' : ''"
    >
      <!-- カードコンポーネント -->
      <v-card
        id="relative"
        flat
        :height="SpCheck() ? SpHeight : PcHeight"
        :width="SpCheck() ? '155' : '240'"
        class="mb-4 mx-auto"
      >
        <!-- 写真 -->
        <v-img
          :src="item.src"
          cover
          class="img"
          :height="SpCheck() ? '100' : '145'"
        ></v-img>
        <!-- エリア名 -->
        <p
          class="font-weight-black"
          :class="SpCheck() ? 'text-caption' : 'text-body-1'"
        >
          {{ item.area }}
        </p>
        <!-- エリア説明（スポットページのみ表示） -->
        <div v-if="page == 'Spots'">
          <p
            class="text-light-blue-lighten-3 font-weight-bold"
            :class="SpCheck() ? 'text-caption' : 'my-2'"
          >
            {{ item.text }}
          </p>
        </div>
        <!-- ホテル名＋値段（ホテルページのみ表示） -->
        <div v-else="page == 'Hotel'">
          <p class="my-2" :class="SpCheck() ? 'text-caption' : 'my-2'">
            {{ item.text }}
          </p>
          <p>{{ item.level }}</p>
          <p>1泊/1部屋￥{{ item.price }}～</p>
        </div>
        <!-- ダイアログ表示ボタン -->
        <v-btn
          id="more"
          :size="SpCheck() ? 'x-small' : 'small'"
          class="bg-light-blue-lighten-2 text-white font-weight-black"
          :class="SpCheck() ? 'text-caption' : 'text-body-2'"
          @click="click(item.component)"
        >
          詳細を見る
        </v-btn>
      </v-card>
    </v-col>
  </v-row>

  <!-- スポットダイアログ表示 -->
  <v-row v-if="page == 'Spots'">
    <v-dialog v-model="dialog" max-width="1100">
      <v-card class="pa-5">
        <component :is="dialogComp"></component>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- ホテルダイアログ表示 -->
  <v-row v-else>
    <v-dialog v-model="dialog" max-width="1300">
      <v-card class="pa-5">
        <HotelComp :table="table()" />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import SpotsMyeongdong from "@/components/00_Seoul/02_spots/SpotsMyeongdong.vue";
  import SpotsDongdaemun from "../00_Seoul/02_spots/SpotsDongdaemun.vue";
  import SpotsJongno from "../00_Seoul/02_spots/SpotsJongno.vue";
  import HotelComp from "@/components/90_comp/HotelComp.vue";
  import hotelData from "../00_Seoul/05_hotel/hotelData";

  export default {
    props: {
      page: String,
      SpHeight: Number,
      PcHeight: Number,
      cardItem: Object,
    },
    components: {
      SpotsMyeongdong,
      SpotsDongdaemun,
      SpotsJongno,
      HotelComp, //ホテルは１つのコンポーネント
    },
    data() {
      return {
        hotelData, //ホテルデータ
        dialog: false,
        dialogComp: "", //スポットダイアログ切り替え
      };
    },
    methods: {
      // ダイアログ表示処理
      click(clickComponent) {
        this.dialogComp = clickComponent;
        this.dialog = true;
      },
      // ホテルダイアログ表示処理
      table() {
        let check = this.cardItem.filter((value) => {
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
  .img {
    border-radius: 5px;
  }

  #relative {
    position: relative;
  }

  #more {
    position: absolute;
    bottom: 0;
  }

  .ex {
    color: rgb(1, 198, 232);
  }
</style>
