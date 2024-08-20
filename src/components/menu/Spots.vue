<template>
    <p class="text-h6 font-weight-black ma-10 mt-7">エリア別紹介</p>
    <!-- カードニュース -->
    <v-sheet class="mx-10">
        <CardComp :page="page" :cardItem="items" :classText="classText" :classBtn="classBtn" :go="go"></CardComp>
    </v-sheet>
</template>

<script>
import CardComp from "@/components/comp/CardComp.vue"

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
            page: 'Spots',
            place: "",
            classText: 'text-light-blue-lighten-3 font-weight-bold',
            classBtn: 'bg-light-blue-lighten-2 text-white text-body-2 font-weight-black',
            go: 'エリアを見る',
            items: [
                {
                    src: img1,
                    area: '明洞エリア',
                    text: '人気NO.１の観光地',
                    component: 'SpotsMyeongdong'
                },
                {
                    src: img2,
                    area: '東大門(乙支路・忠武路)エリア',
                    text: 'ファッションの最先端街',
                    component: 'SpotsDongdaemun'
                },
                {
                    src: img3,
                    area: '市庁・鐘路エリア',
                    text: '韓国の歴史を感じされるエリア',
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
                    text: 'ソウルの街並みを見ながらのんびり',
                },
            ],
        }
    },
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