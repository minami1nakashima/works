<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-h6 font-weight-black">
        {{ data.Place }}
      </v-col>
      <v-col>
        <v-img :src="data.src" :width="600" aspect-ratio="16/9" contain></v-img>
      </v-col>
      <v-col>
        <p class="my-6 text-body-2" style="white-space: pre-wrap">aa</p>
      </v-col>
    </v-row>
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
