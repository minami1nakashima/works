<template>
    <p class="font-weight-black" :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'">
        エリア別紹介</p>

    <v-sheet class="mx-10">
        <!-- エリア選択カード -->
        <CardComp :page="page" :cardItem="items" :SpHeight="SpHeight" :PcHeight="PcHeight"></CardComp>
    </v-sheet>
</template>

<script>
import CardComp from "@/components/comp/CardComp.vue"

// エリアイメージ
import img1 from "@/assets/img/spots/streetfood.jpg"
import img2 from "@/assets/img/spots/ddp.jpg"
import img3 from "@/assets/img/spots/bukchon.jpg"
import img4 from "@/assets/img/spots/itaewon.jpg"
import img5 from "@/assets/img/spots/live.jpg"
import img6 from "@/assets/img/spots/sinchon.jpg"
import img7 from "@/assets/img/spots/kangnum.jpg"
import img8 from "@/assets/img/spots/iseoulu.jpg"

export default {
    components: {
        CardComp,
    },
    data() {
        return {
            page: 'Spots',//ページの値
            SpHeight: 170,//SP画面カードコンポーネント高さ
            PcHeight: 240,//PC画面カードコンポーネント高さ
            // カード表示データ
            items: [
                {
                    src: img1,
                    area: '明洞エリア',
                    text: '人気NO.１の観光地',
                    component: 'SpotsMyeongdong'
                },
                {
                    src: img2,
                    area: '東大門エリア',
                    text: 'ファッションの最先端街',
                    component: 'SpotsDongdaemun'
                },
                {
                    src: img3,
                    area: '市庁・鐘路エリア',
                    text: '韓国の歴史エリア',
                    component: 'SpotsJongno'
                },
                {
                    src: img4,
                    area: '梨泰院エリア',
                    text: 'オシャレな外国人街',
                },
                {
                    src: img5,
                    area: '弘大・延南洞エリア',
                    text: '韓国の若者が集う街',
                },
                {
                    src: img6,
                    area: '新村・梨大エリア',
                    text: '韓国の学生街エリア',
                },
                {
                    src: img7,
                    area: '江南エリア',
                    text: '昼も夜も休みがない街！'

                },
                {
                    src: img8,
                    area: '漢江エリア',
                    text: 'ソウルの街並みを一望',
                },
            ],
        }
    },
    // SP画面区別処理
    methods: {
        SpCheck() {
            return this.$vuetify.display.smAndDown
        }
    }
}
</script>

<style>
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
</style>