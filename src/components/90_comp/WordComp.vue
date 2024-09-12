<template>
  <div>
    <!-- タイトル -->
    <p
      class="fontStyle"
      :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'"
    >
      韓国語の日常会話フレーズ集
    </p>

    <v-sheet :class="SpCheck() ? 'mx-1' : 'mx-10'">
      <!-- 翻訳 -->
      <div class="my-10 pa-5 rounded-corners style">
        <p class="fontStyle text-subtitle-1">ちょこっと韓国語翻訳機</p>
        <v-divider
          :thickness="6"
          color="white"
          class="mb-5 border-opacity-100"
        ></v-divider>
        <v-row>
          <!-- 翻訳する日本語 -->
          <v-col>
            <v-textarea
              v-model="korean"
              clearable
              label="翻訳する内容を入力してください"
              variant="outlined"
              density="compact"
              rows="5"
              bg-color="white"
              color="indigo-darken-4"
            ></v-textarea>
            <!-- 翻訳送信ボタン -->
            <v-btn
              color="indigo-darken-4"
              @click="submit"
              class="mt-n5"
              style="float: right"
            >
              翻訳する
            </v-btn>
          </v-col>
          <!-- 翻訳された韓国語 -->
          <v-col>
            <v-textarea
              :model-value="translation"
              variant="outlined"
              density="compact"
              rows="5"
              bg-color="white"
              color="indigo-darken-4"
              readonly
            ></v-textarea>
          </v-col>
        </v-row>
      </div>

      <div class="bg-grey-lighten-4 px-5 pa-8">
        <v-row>
          <!-- タイトル -->
          <v-col cols="12">
            <p class="fontStyle">簡単な単語を学んでみよう</p>
          </v-col>
          <!-- テキスト -->
          <v-col cols="7">
            <p class="textFont mt-4 ml-5" style="line-height: 2">
              このページでは、よく使う韓国語をシチュエーションにわけて紹介します。
              <br />
              簡単な挨拶から、旅行で使えるものなどたくさんあるので、
              <br />
              ぜひ韓国語を少しでも習得してみてください。
              <br />
              韓国語は日本語と似ているので、単語を組み合わせるだけで
              <br />
              意味が成り立ちます。 こまったら翻訳機も活用してください✨
            </p>
          </v-col>

          <!-- Tips -->
          <v-col>
            <v-card class="pa-5 text-body-2">
              <v-card-title>
                <span class="text-orange mdi mdi-check-decagram-outline"></span>
                Tips
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="text-caption">
                ｍ／ｐなどのアルファベットは、唇を合わせるだけ。
                <br />
                音をつまむように発音してください。
                <br />
                ｎは「ん」ですが、舌を歯に挟むように発音するとGOOD👍
                <br />
                ｋは「っ」(クをイメージして)、
                <br />
                ｒは舌を口の上につけるイメージ
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- シチュエーションコンテンツ -->
        <div class="pa-5">
          <v-row>
            <!-- 詳細パネル -->
            <v-expansion-panels class="my-4">
              <!-- 詳細パネル中身 -->
              <v-expansion-panel
                v-for="item in MannerData.situationItem"
                :key="item.id"
                :color="item.color"
              >
                <!-- タイトル -->
                <v-expansion-panel-title class="font-weight-black">
                  {{ item.situation }}
                </v-expansion-panel-title>
                <!-- コンテンツ -->
                <v-expansion-panel-text :class="item.bgcolor">
                  <v-row class="pa-2">
                    <v-col
                      cols="6"
                      class="mb-4"
                      v-for="word in item.wordItem"
                      :key="word.wordko"
                    >
                      <p>{{ word.wordko }}</p>
                      <p class="text-caption">{{ word.wordkara }}</p>
                      <v-divider
                        :thickness="3"
                        :color="item.dividerColor"
                        class="border-opacity-100 mb-3"
                      ></v-divider>
                      <p>{{ word.wordja }}</p>
                    </v-col>
                  </v-row>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
  import axios from "axios";
  import MannerData from "./data/WordData";

  export default {
    name: "MannerComp",
    data() {
      return {
        MannerData,
        korean: "", //翻訳する日本語
        translation: "", //翻訳された韓国語
        authKey: "b04a55fe-e123-414e-9633-43719b64f6e0:fx",
      };
    },
    methods: {
      // 翻訳処理
      async submit() {
        try {
          const response = await axios.post(
            "https://api-free.deepl.com/v2/translate",
            null,
            {
              params: {
                auth_key: this.authKey,
                text: this.korean,
                target_lang: "KO",
              },
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            },
          );
          this.translation = response.data.translations[0].text;
        } catch (error) {
          console.error("翻訳エラー:", error);
        }
      },
      // SP画面切り替え
      SpCheck() {
        return this.$vuetify.display.smAndDown;
      },
    },
  };
</script>

<style>
  .rounded-corners {
    border-radius: 10px;
  }

  .style {
    border: 2px solid #00366c;
    height: 280px;
  }
</style>
