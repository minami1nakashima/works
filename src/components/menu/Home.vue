    <template>
        <v-row class="mx-10">
            <!-- カルーセル写真 -->
            <v-col cols="9">
                <v-carousel height="450" :show-arrows="false" hide-delimiters cycle hide-delimiter-background cover>
                    <v-carousel-item id="img" v-for="item in items" :key="i" :src="item.src" cover>
                        <p id="text" class="text-h5 font-weight-bold text-white">{{ item.text }}</p>
                    </v-carousel-item>
                </v-carousel>
            </v-col>

            <!-- カルーセル文章 -->
            <v-col cols=" 3">
                <v-carousel height="450" :show-arrows="false" hide-delimiters cycle hide-delimiter-background>
                    <v-carousel-item v-for="item in slides" :key="item.slide">
                        <v-card height="480" rounded-xl="2" :color="item.color" flat>
                            <v-card-title class="d-flex justify-center mt-15 text-h5 font-weight-black">
                                {{ item.slide }}
                            </v-card-title>
                            <v-divider class="mx-auto mt-5" length="80%"></v-divider>
                            <v-card-text class="text-caption"
                                style="white-space:pre-wrap; text-align: center; line-height: 2;">
                                {{ item.explain }}
                            </v-card-text>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row class="mt-15 ma-10">
            <v-col cols="12">
                <h2>韓国のあんなこんな</h2>
                <p class="text-subtitle-1">\ 様々な情報をお伝えします。/</p>
            </v-col>

            <!-- カードコンテンツ -->
            <v-row>
                <v-col v-for="item in cards" :key="item.theme">
                    <v-card id="relative" class="mx-auto mt-5" max-width="240" min-width="240" min-height="280">
                        <v-img height="150px" :src="item.src" cover></v-img>
                        <v-card-title>
                            {{ item.theme }}
                        </v-card-title>
                        <p style="white-space:pre-wrap;" class="ml-4 text-body-2">
                            {{ item.sub }}
                        </p>
                        <p id="more" @click=" test(item.theme)" class="text-blue-darken-1 text-right ma-3">
                            もっと見る
                        </p>
                    </v-card>
                </v-col>
            </v-row>

            <!-- カードニュース -->
            <v-row>
                <v-col cols="12">
                    <h2>トップニュース</h2>
                </v-col>

                <v-col v-for="item in newsItem" :key="item.theme" cols="3" class="mx-auto">
                    <v-card id="relative" class="mx-auto mt-5" max-width="240" min-width="240" min-height="280">
                        <v-img height="150px" :src="item.urlToImage" cover></v-img>
                        <v-card-title>
                            {{ item.title }}
                        </v-card-title>
                        <p style="white-space:pre-wrap;" class="ml-4 text-body-2">
                            {{ item.description }}
                        </p>
                        <p id="more" @click="click(item.url)" class="text-blue-darken-1 text-right ma-3">
                            もっと見る
                        </p>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </template>

<script>
import axios from 'axios'
import img1 from "@/assets/img/home/gwanghwamun.jpg"
import img2 from "@/assets/img/home/nseoultower.jpg"
import img3 from "@/assets/img/home/bukchon_1.jpg"
import img4 from "@/assets/img/home/Myeongdong.jpg"
import img5 from "@/assets/img/home/cheonggyecheon.jpg"
import imgcard1 from "@/assets/img/home/yoptook.jpg"
import imgcard2 from "@/assets/img/home/ramen.jpg"
import imgcard3 from "@/assets/img/home/kochujang.jpg"

export default {
    data() {
        return {
            newsItem: [],
            items: [
                {
                    src: img1,
                    text: '朝鮮時代のシンボル「景福宮」の門',
                },
                {
                    src: img2,
                    text: '夜の眺望は絶景「Nソウルタワー」',
                },
                {
                    src: img3,
                    text: '時代劇のセットのような雰囲気',
                },
                {
                    src: img4,
                    text: '夕方には様々な屋台がずら～り',
                },
                {
                    src: img5,
                    text: '都心の中の避暑地：暑い夏には川で涼もう',
                },
            ],
            slides: [
                {
                    color: 'light-blue-lighten-5',
                    slide: '光化門',
                    explain: `\\ 景福宮の城門の遺構 /

周辺には歴史的な建造物や
銅像、水路など！
大都市に囲まれ
まるでタイムスリップした気分に
夜にはライトアップされ
幻想的です。`,
                },
                {
                    color: 'deep-orange-lighten-5',
                    slide: '南山タワー',
                    explain: `\\ ソウルのシンボル /

南山の頂上にそびえ立つ
Nソウルタワー
南山タワーといえばの
「愛の南京錠」や、
眺めのよい
カフェやレストランなど！`,
                },
                {
                    color: 'blue-grey-lighten-5',
                    slide: '北村韓屋村',
                    explain: `\\ 韓屋が密集するエリア/

朝鮮時代から残る韓国の伝統家屋
「韓屋」
周辺には宮殿「景福宮」や
韓服のレンタル屋さんも！
実際に住まわれていて、
閑静な住宅地なので
ゆっくりと観光が楽しめます。`,
                },
                {
                    color: 'light-green-lighten-5',
                    slide: '明洞',
                    explain: `\\ 定番観光スポット明洞 /

ファッション・コスメ・エステなど
何でも揃う街です。
ほとんどのお店で
日本語が通じることから、
買い物のしやすさも抜群！
夕方には屋台が並び
韓国グルメ食べ歩きも楽しめます。`,
                },
                {
                    color: 'brown-lighten-5',
                    slide: '清渓川',
                    explain: `\\ 憩いの人口河川 /
                    
市内中心部を流れているので
アクセス抜群！
「散歩道」とも呼ばれ、
散歩しながら休憩がてら
川沿いのオシャレなカフェでで
過ごすことができます。`,
                },
            ],
            cards: [
                {
                    src: imgcard1,
                    theme: '激辛好きおすすめ料理',
                    sub: '韓国で食べられる激辛料理を紹介',
                },
                {
                    src: imgcard2,
                    theme: '韓国ラーメン特集',
                    sub: '厳選おすすめ即席ラーメン',
                },
                {
                    src: imgcard3,
                    theme: 'おすすめ韓国調味料',
                    sub: '日本人でも食べられる韓国調味料'
                }
            ]
        }
    },


    methods: {
        News() {
            axios.get('https://newsapi.org/v2/top-headlines?q=korea&apiKey=98c82fa89a004667b1cc0687d129f86d')
                .then(response => {
                    this.newsItem = response.data.articles;
                    console.log('news', response.data.articles)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.News();
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