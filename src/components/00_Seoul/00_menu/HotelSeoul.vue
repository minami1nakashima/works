<template>
  <div>
    <!-- ホテル画面概要 -->
    <p
      class="fontStyle"
      :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'"
    >
      おすすめホテル紹介
    </p>

    <v-row
      class="textFont"
      style="line-height: 2"
      :class="SpCheck() ? 'mx-1' : 'mx-10'"
    >
      <!-- 説明 -->
      <v-col cols="12" sm="6">
        <p :class="SpCheck() ? 'text-caption mt-2' : 'mt-5'">
          ソウルには数多くの宿泊エリアがありますが、
          <br />
          その中でもおすすめなのが以下の
          <strong>5エリア</strong>
          <br />
          旅行の目的によっておすすめのエリアも変わってくるので、
          <br />
          自分の目的に合ったエリアからホテルを探してみてください。
        </p>

        <!-- エリア表 -->
        <div
          class="bg-light-blue-lighten-5"
          :class="SmCheck() ? 'pa-3 mt-10' : 'pa-2 mt-2'"
          :width="SpCheck() ? '350' : '400'"
        >
          <v-list density="compact" class="pa-0">
            <v-list-item v-for="item in hotelData.hotelArea" :key="item">
              <v-list-item-title
                v-text="item"
                :class="SpCheck() ? 'text-caption pa-0' : 'text-subtitle-2'"
                class="textFont"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
      </v-col>

      <!-- エリア地図-->
      <v-col align-self="end">
        <v-sheet
          class="bg-grey-lighten-1 mx-auto mb-3"
          :width="SpCheck() ? '90%' : '75%'"
        >
          <v-img
            src="@/assets/Seoul/hotel/map.jpg"
            class="pa-5 mx-auto"
            width="99%"
          ></v-img>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- エリアを絞る -->
    <v-row :class="SpCheck() ? 'mt-5 mx-1' : 'mx-10'">
      <v-col :align-self="SpCheck() ? 'center' : 'end'" cols="5">
        <p
          class="fontStyle"
          :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'"
        >
          ホテル一覧表
        </p>
      </v-col>

      <v-spacer></v-spacer>

      <!-- エリア選択プルダウン -->
      <v-col
        align-self="end"
        cols="4"
        :class="SpCheck() ? 'mr-3 px-0' : 'mr-10 pt-0'"
      >
        <v-select
          v-model="select"
          :items="hotelData.tableName"
          autofocus
          multiple
          variant="underlined"
          :item-props="itemProps"
          :class="SpCheck() ? 'select-text-font' : ''"
          label="エリアで絞る"
        ></v-select>
      </v-col>
    </v-row>

    <!-- ホテルカードコンポーネント -->
    <v-row :class="SpCheck() ? 'mt-5 mx-1' : 'mx-10'">
      <v-col>
        <CardComp
          :page="page"
          :cardItem="areaHotel()"
          :SpHeight="SpHeight"
          :PcHeight="PcHeight"
        ></CardComp>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import CardComp from "@/components/90_comp/CardComp.vue";
  import hotelData from "@/components/00_Seoul/05_hotel/hotelData.js";

  export default {
    components: {
      CardComp,
    },
    data() {
      return {
        hotelData,
        page: "Hotel",
        SpHeight: 250, //SP画面カードコンポーネント高さ
        PcHeight: 310, //PC画面カードコンポーネント高さ
        select: [],
      };
    },

    methods: {
      text(itemPlace) {
        this.place = itemPlace;
        this.dialog = true;
      },
      itemProps(item) {
        return {
          title: item.table,
          subtitle: item.text,
        };
      },
      // バグる
      areaHotel() {
        if (this.select.length === 0) {
          let selectArea = hotelData.cardItem;
          return selectArea;
        } else {
          let selectArea = hotelData.cardItem.filter((value) =>
            this.select.some((table) => value.area === table.table),
          );
          return selectArea;
        }
      },
      // SP画面区別処理
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
      // ipad画面区別処理
      SmCheck() {
        return this.$vuetify.display.smAndUp;
      },
    },
  };
</script>

<style lang="scss">
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

  .select-text-font {
    .v-label {
      margin-top: 5px;
      font-size: 12px !important;
    }
  }

  .v-overlay-container {
    .v-list-item-title {
      font-size: 12px !important;
    }

    .v-list-item-subtitle {
      font-size: 12px !important;
    }

    .v-icon--size-default {
      font-size: 15px;
    }
  }
</style>
