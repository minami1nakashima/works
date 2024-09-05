    <template>
        <!-- カルーセル写真 -->
        <v-col>
            <v-carousel :show-arrows="false" hide-delimiters cycle hide-delimiter-background cover
                :height="SmCheck() ? '450' : '220'">
                <v-carousel-item v-for="item in carouselImg" :key="item">
                    <v-img id="img" width="800" :src="item.src" cover>
                        <!-- 写真内文字 -->
                        <p id="text" class="font-weight-bold text-white"
                            :class="SpCheck() ? 'text-caption' : 'text-h5'">{{ item.text }}</p>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-col>

        <!-- カルーセル文章 -->
        <v-col class="d-none d-md-block">
            <v-carousel height="450" :show-arrows="false" hide-delimiters cycle hide-delimiter-background>
                <v-carousel-item v-for="item in carouselText" :key="item.slide" class="mx-auto">
                    <!-- カード -->
                    <v-card height="450" width="270" rounded="2" :color="item.color" flat>
                        <!-- カードタイトル -->
                        <v-card-title class="d-flex justify-center mt-15 text-h5 font-weight-black">
                            {{ item.slide }}
                        </v-card-title>
                        <v-divider class="mx-auto mt-5" length="80%"></v-divider>
                        <!-- カード説明 -->
                        <v-card-text class="text-caption"
                            style="white-space:pre-wrap; text-align: center; line-height: 2;">
                            {{ item.explain }}
                        </v-card-text>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </template>

<script>
export default {
    props: {
        carouselImg: Object,
        carouselText: Object
    },
    methods: {
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
        // ipad画面区別処理
        SmCheck() {
            return this.$vuetify.display.smAndUp;
        },
    }
}
</script>

<style>
#img {
    border-radius: 4px;
}

#text {
    position: absolute;
    bottom: 2%;
    left: 2%;
}
</style>