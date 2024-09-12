<template>
  <!-- ダイアログ中身 -->
  <div :class="topic.bgcolor" class="pa-5">
    <v-row>
      <!-- ダイアログタイトル -->
      <v-col cols="12" class="text-h6 font-weight-black">
        {{ topic.icon }} {{ $t(topic.titleKey) }}{{ topic.icon }}
      </v-col>
      <!-- ダイアログテキスト -->
      <v-col cols="12">
        <p class="my-6 text-body-2" style="white-space: pre-wrap">
          {{ topic.text }}
        </p>
      </v-col>

      <!-- 詳細パネル -->
      <v-expansion-panels
        class="my-4"
        variant="popout"
        multiple
        :color="topic.color"
      >
        <!-- 詳細パネル中身 -->
        <v-expansion-panel v-for="item in topic.items" :key="item.id">
          <!-- タイトル -->
          <v-expansion-panel-title class="font-weight-black">
            {{ item.name }}
          </v-expansion-panel-title>
          <!-- コンテンツ -->
          <v-expansion-panel-text>
            <v-row class="pa-2">
              <!-- コンテンツイメージ -->
              <v-col cols="3" class="mb-2">
                <v-img :src="item.src" width="200" height="200" cover></v-img>
              </v-col>
              <!-- オススメ度 -->
              <v-col>
                <p class="text-h5 pt-5">
                  {{ topic.rankTitle }}: {{ item.rank }}
                </p>
                <br />
                <!-- コンテンツテキスト -->
                <p style="white-space: pre-wrap">{{ item.text }}</p>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      topic: Object,
    },
  };
</script>
