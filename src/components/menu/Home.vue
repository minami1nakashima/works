    <template>
        <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
            <!-- カルーセル写真 -->
            <v-col>
                <v-carousel :show-arrows="false" hide-delimiters cycle hide-delimiter-background cover
                    :height="SmCheck() ? '450' : '200'">
                    <v-carousel-item v-for="item in homeData.items" :key="item">
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
                    <v-carousel-item v-for="item in homeData.slides" :key="item.slide" class="mx-auto">
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

            <!-- カードコンテンツタイトル -->
            <v-col cols="12" :class="SpCheck() ? 'pa-0 ml-1' : ''">
                <p :class="SpCheck() ? 'text-subtitle-2' : 'text-h5'" class="font-weight-black">韓国のあんなこんな</p>
                <p :class="SpCheck() ? 'text-caption mb-5' : 'text-subtitle-2 mb-5'">\ 様々な情報をお伝えします。/</p>
            </v-col>

            <!-- カードコンテンツ -->
            <v-col v-for="item in homeData.cards" :key="item.theme" class="pa-5">
                <v-card id="relative" class="mx-auto" :width="SpCheck() ? '' : '240'"
                    :height="SpCheck() ? '200' : '280'">
                    <v-img :height="SpCheck() ? '100' : '150'" :src="item.src" cover></v-img>
                    <v-card-title :class="SpCheck() ? 'text-caption font-weight-black mx-n2' : ''">
                        {{ item.theme }}
                    </v-card-title>
                    <p style="white-space:pre-wrap;" :class="SpCheck() ? 'text-caption ml-2' : 'ml-4 text-body-2'">
                        {{ item.sub }}
                    </p>
                    <!-- クリックでダイアログ表示 -->
                    <!-- 未対応 -->
                    <p id="more" @click=" test(item.theme)" :class="SpCheck() ? 'text-caption ma-1' : 'ma-3'"
                        class="text-blue-darken-1 text-right font-weight-bold">
                        もっと見る
                    </p>
                </v-card>
            </v-col>

            <!-- カードニュースタイトル -->
            <v-sheet class="bg-grey-lighten-4 mt-15 pa-6 mx-auto">
                <v-row>
                    <v-col cols="4" :class="SpCheck() ? '' : 'my-3'">
                        <p :class="SpCheck() ? 'text-subtitle-2' : 'text-h5'" class="font-weight-black">トップニュース</p>
                    </v-col>
                    <v-spacer></v-spacer>
                    <!-- レイアウト要修正 -->
                    <!-- 翻訳スイッチ -->
                    <v-col cols="2">
                        <v-switch inset density="compact" label="日本語" v-model="japanese"
                            @change="toJapaneseChange"></v-switch>
                    </v-col>
                </v-row>

                <!-- 写真付きニュース -->
                <v-row>
                    <v-col>
                        <v-card v-if="newsItem" class="mx-auto" :min-width="SpCheck() ? '280' : '450'"
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
                    <v-col :class="SpCheck() ? 'pt-0' : ''">
                        <v-list lines="one" class="mx-auto" :min-width="SpCheck() ? '280' : '450'">
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
        </v-row>
    </template>

<script>
import homeData from '@/components/home/homeData.js';
import axios from 'axios'
import moment from 'moment'

export default {
    data() {
        return {
            homeData, // データ別ファイル
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
            console.log('Newsメソッドが呼び出されました'); // メソッド呼び出しの確認
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        q: 'Korea',
                        sortBy: 'popularity',
                        apiKey: '98c82fa89a004667b1cc0687d129f86d',
                    }
                });
                console.log('APIレスポンス:', response); // APIレスポンスの確認
                this.newsItem = response.data.articles[0];
                console.log('ニュースアイテム:', this.newsItem); // ニュースアイテムの確認
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
            console.log('Japaneseメソッドが呼び出されました'); // メソッド呼び出しの確認
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
                console.log('翻訳結果:', response);
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
        // ipad画面区別処理
        SmCheck() {
            return this.$vuetify.display.smAndUp;
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

<style>
#img {
    border-radius: 4px;
}

#text {
    position: absolute;
    bottom: 2%;
    left: 2%;
}

.text-blue {
    text-shadow: 1px 0 0 black;
}

#relative {
    position: relative;
}

#more {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>