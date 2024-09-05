    <template>
        <!-- カードニュースタイトル -->
        <v-sheet class="bg-grey-lighten-4 mt-15 pa-6 mx-auto" width="100%">
            <v-row justify="space-between">
                <v-col :cols="SpCheck() ? '5' : '4'" :class="SpCheck() ? '' : 'my-3'">
                    <p :class="SpCheck() ? 'text-subtitle-2' : 'text-h5'" class="font-weight-black">トップニュース</p>
                </v-col>
                <v-spacer></v-spacer>
                <!-- レイアウト要修正 -->
                <!-- 翻訳スイッチ -->
                <v-col :cols="SpCheck() ? '4' : '2'">
                    <v-switch density="compact" label="日本語" v-model="japanese" @change="toJapaneseChange"></v-switch>
                </v-col>
            </v-row>

            <!-- 写真付きニュース -->
            <v-row>
                <v-col>
                    <v-card v-if="newsItem" class="mx-auto" :min-width="SpCheck() ? '300' : '580'"
                        :min-height="SpCheck() ? '240' : '335'" :class="SpCheck() ? 'pb-0' : ''" flat>
                        <v-img :height="SpCheck() ? '150' : '200'" :src="newsItem.urlToImage" cover></v-img>
                        <!-- ニュースタイトル（日付＋タイトル） -->
                        <v-card-title style="white-space:pre-wrap;"
                            :class="SpCheck() ? 'text-caption font-weight-black mx-n2' : ''">
                            {{ moment() }} {{ japanese ? newsTitle : newsItem.title }}
                        </v-card-title>
                        <!-- ニュースサイトへ画面遷移 -->
                        <v-btn variant="text" id="more">
                            <a :href="newsItem.url" style="text-decoration:none;"
                                :class="SpCheck() ? 'text-caption' : ''"
                                class="text-blue-darken-1 text-right font-weight-bold">もっと見る</a>
                        </v-btn>
                    </v-card>
                </v-col>

                <!-- 写真なしニュース -->
                <v-col>
                    <v-list lines="one" class="mx-auto" :min-width="SpCheck() ? '300' : '460'">
                        <!-- リンク埋め込み -->
                        <v-list-item v-for="item in newsItemSub" :key="item.url" density="compact" :href="item.url"
                            class="mx-3">
                            <!-- ニュースタイトル（日付＋タイトル） -->
                            <v-list-item-title
                                v-text="momentSub(item) + ' ' + (japanese ? item.translatedTitle : item.title)"
                                :class="SpCheck() ? 'text-caption ma-0' : ''"></v-list-item-title>
                            <v-divider></v-divider>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </v-sheet>
    </template>

<script>
import CardNews from '@/components/90_comp/CardNewsDialog.vue';
import axios from 'axios'
import moment from 'moment'


export default {
    props: {
        carouselImg: Object,
        carouselText: Object
    },
    component: {
        CardNews
    },
    data() {
        return {
            newsItem: null, // 写真付きニュース配列
            newsItemSub: [], // ニュース配列
            newsTitle: '',
            authKey: 'b04a55fe-e123-414e-9633-43719b64f6e0:fx',
            japanese: false,
        }
    },
    methods: {
        // 翻訳スイッチ判断
        async toJapaneseChange() {
            if (this.japanese) {
                await this.Japanese();
                await this.translateNewsList();
            } else {
                this.newsTitle = '';
                this.newsItemSub.forEach(item => item.translatedTitle = '');
            }
        },
        // 写真付きニュース取得処理
        async News() {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        q: 'Korea',
                        sortBy: 'popularity',
                        apiKey: '98c82fa89a004667b1cc0687d129f86d',
                    }
                });
                this.newsItem = response.data.articles[0];
                if (this.japanese) {
                    await this.Japanese();
                }
            } catch (error) {
                console.error('ニュース取得エラー:', error);
            }
        },
        // ニュース取得処理（８個のみ表示）
        async NewsSub() {
            try {
                for (let i = 0; i <= 7; i++) {
                    const response = await axios.get('https://newsapi.org/v2/everything?q=korea&sortBy=popularity&apiKey=98c82fa89a004667b1cc0687d129f86d');
                    this.newsItemSub.push(response.data.articles[i]);
                }
            } catch (error) {
                console.error(error);
            }
        },
        // 写真付きニュース翻訳処理
        async Japanese() {
            try {
                const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
                    params: {
                        auth_key: this.authKey,
                        text: this.newsItem.title,
                        target_lang: 'JA'
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                this.newsTitle = response.data.translations[0].text;
            } catch (error) {
                console.error('翻訳エラー:', error);
            }
        },
        // ニュース翻訳処理
        async translateNewsList() {
            for (let item of this.newsItemSub) {
                try {
                    const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
                        params: {
                            auth_key: this.authKey,
                            text: item.title,
                            target_lang: 'JA'
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    item.translatedTitle = response.data.translations[0].text;
                } catch (error) {
                    console.error('翻訳エラー:', error);
                }
            }
        },
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
        // 写真付きニュース日付フォーマット処理
        moment() {
            return moment(this.newsItem.publishedAt).format('YYYY-MM-DD')
        },
        // ニュース日付フォーマット処理
        momentSub(item) {
            return moment(item.publishedAt).format('YYYY-MM-DD');
        },
    },
    mounted() {
        this.News();
        this.NewsSub();
    }
}
</script>