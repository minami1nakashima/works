<template>
  <!-- 全体カード -->
  <v-card
    variant="outlined"
    class="pa-2"
    height="230"
    min-width="540"
    :class="rateColor"
    flat
  >
    <!-- カードタイトル -->
    <v-card-title class="fontStyle text-subtitle-1">
      {{ $t("rateTitle") }}
    </v-card-title>
    <v-card-text class="textStyle">100 JPY = {{ rate }} KRW</v-card-text>

    <v-row class="mt-2 ml-2">
      <!-- 為替計算カード -->
      <v-col cols="5">
        <v-card variant="outlined" height="85">
          <v-select
            :items="items"
            density="compact"
            v-model="fromCurrency"
            class="textStyle"
          ></v-select>
          <v-text-field
            variant="underlined"
            class="mt-n6 pl-4 custom-text-field"
            v-model="inputValue"
            @input="validateInput"
          ></v-text-field>
        </v-card>
      </v-col>

      <!-- 矢印アイコン -->
      <v-col cols="1" align-self="center" class="ml-n2 mr-3">
        <v-icon size="40">mdi-arrow-left-right</v-icon>
      </v-col>

      <!-- 金額表示カード -->
      <v-col cols="5">
        <v-card variant="outlined" height="85">
          <v-select
            :items="items"
            density="compact"
            v-model="toCurrency"
            :readonly="true"
          ></v-select>
          <v-text-field
            variant="underlined"
            class="mt-n6 pl-4 custom-text-field"
            v-model="outputValue"
            readonly
          ></v-text-field>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import axios from "axios";

  export default {
    props: {
      rateColor: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        rate: null,
        items: ["JPY - 日本円", "KRW - 韓国ウォン"],
        fromCurrency: "JPY - 日本円",
        toCurrency: "KRW - 韓国ウォン",
        inputValue: "",
        outputValue: "",
      };
    },
    created() {
      this.ExchangeRate();
    },
    watch: {
      fromCurrency(newVal) {
        if (newVal === "JPY - 日本円") {
          this.toCurrency = "KRW - 韓国ウォン";
        } else if (newVal === "KRW - 韓国ウォン") {
          this.toCurrency = "JPY - 日本円";
        }
        this.convertCurrency();
      },
      inputValue() {
        this.convertCurrency();
      },
    },
    methods: {
      async ExchangeRate() {
        try {
          const API_KEY = "9C06D817698F793814859402df74f274";
          //   ユーロから日本円へ変換
          const eurToJpyResponse = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/EUR`,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            },
          );
          //   ユーロから韓国ウォンへ変換
          const eurToKrwResponse = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/EUR`,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            },
          );

          if (eurToJpyResponse.data && eurToKrwResponse.data) {
            const eurToJpy = eurToJpyResponse.data.rates.JPY;
            const eurToKrw = eurToKrwResponse.data.rates.KRW;

            // 日本円⇔韓国ウォンへ変換
            this.rate = (eurToKrw / eurToJpy).toFixed(2);
          }
        } catch (error) {
          console.error("為替レートの取得に失敗しました:", error);
        }
      },
      convertCurrency() {
        if (
          this.fromCurrency === "JPY - 日本円" &&
          this.toCurrency === "KRW - 韓国ウォン"
        ) {
          this.outputValue = (this.inputValue * this.rate).toFixed(2);
        } else if (
          this.fromCurrency === "KRW - 韓国ウォン" &&
          this.toCurrency === "JPY - 日本円"
        ) {
          this.outputValue = (this.inputValue / this.rate).toFixed(2);
        }
      },
      //   数字半角のみ入力制御
      validateInput(event) {
        const halfWidthRegex = /^[\x20-\x7E]*$/;
        if (!halfWidthRegex.test(event.target.value)) {
          this.inputValue = event.target.value.replace(/[^\x20-\x7E]/g, "");
        }
      },
    },
  };
</script>

<style>
  .custom-text-field .v-field__input {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .seoul-card {
    border: 2px solid #d9eefa; /* ソウルボーダー */
  }
  .busan-card {
    border: 2px solid #fdeda0; /* 釜山ボーダー */
  }
  .gangneung-card {
    border: 2px solid #ede7fa; /* カンヌンボーダー */
  }
</style>
