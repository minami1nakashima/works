<template>
  <div>
    <v-row>
      <!-- タイトル -->
      <v-col cols="12" class="text-h6 font-weight-black mt-6 mb-5">
        {{ data.Place }}
        <v-divider
          class="mt-2 border-opacity-100"
          :thickness="4"
          color="red-accent-4"
        ></v-divider>
      </v-col>

      <!-- イメージ -->
      <v-col cols="5">
        <v-img :src="data.src" width="400" cover></v-img>
      </v-col>

      <v-spacer></v-spacer>
      <!-- 説明 -->
      <v-col cols="6" align-self="center">
        <p class="text-body-2" style="white-space: pre-wrap">
          {{ data.text }}
        </p>
      </v-col>

      <!-- Tip -->
      <v-col cols="12">
        <v-card class="pa-5 my-5 text-body-2 bg-red-lighten-5">
          <v-card-title>
            <span class="mdi mdi-check-decagram-outline"></span>
            Tips
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="text-caption" style="white-space: pre-wrap">
            {{ data.tip }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 詳細カード -->
    <v-row class="bg-grey-lighten-2">
      <v-col cols="7">
        <v-sheet class="pa-3">
          <v-row>
            <v-col cols="12" class="font-weight-bold">所在地</v-col>
            <v-col cols="2">店名</v-col>
            <v-col cols="10">{{ data.Place }}</v-col>
            <v-divider></v-divider>
            <v-col cols="2">メニュー</v-col>
            <v-col cols="10">{{ data.Menu }}</v-col>
            <v-divider></v-divider>
            <v-col cols="2">価格</v-col>
            <v-col cols="10">{{ data.Price }}</v-col>
            <v-divider></v-divider>
            <v-col cols="2">住所</v-col>
            <v-col cols="10">{{ data.address }}</v-col>
            <v-divider></v-divider>
            <v-col cols="2" style="white-space: pre-wrap">最寄り駅</v-col>
            <v-col cols="10">{{ data.station }}</v-col>
            <v-divider></v-divider>
            <v-col cols="2">TELL</v-col>
            <v-col cols="10">{{ data.number }}</v-col>
            <v-divider></v-divider>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-img :src="data.map" height="340" cover></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
</script>
