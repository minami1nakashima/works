<template>
    <v-row class="mt-5">
        <!-- カードコンテンツタイトル -->
        <v-col cols="12" :class="SpCheck() ? 'pa-0 ml-5 text-subtitle-2' : 'text-h5'" class="font-weight-black">
            韓国のあんなこんな<br>
            <span :class="SpCheck() ? 'text-caption mb-5' : 'text-subtitle-2 mb-5'">\ 様々な情報をお伝えします。/</span>
        </v-col>

        <!-- カードコンテンツ -->
        <v-col v-for="item in topic" :key="item" class="pa-5">
            <v-card id="relative" class="mx-auto" :width="SpCheck() ? '' : '240'" :height="SpCheck() ? '200' : '280'">
                <v-img :height="SpCheck() ? '100' : '150'" :src="item.src" cover></v-img>
                <v-card-title :class="SpCheck() ? 'text-caption font-weight-black mx-n2' : ''">
                    {{ item.title }}
                </v-card-title>
                <p style="white-space:pre-wrap;" :class="SpCheck() ? 'text-caption ml-2' : 'ml-4 text-body-2'">
                    {{ item.sub }}
                </p>
                <!-- クリックでダイアログ表示 -->
                <v-btn id="more" :size="SpCheck() ? 'x-small' : 'small'" class="text-blue font-weight-black" flat
                    :class="SpCheck() ? 'text-caption' : 'text-body-2'" @click="click(item.component)">もっと見る
                </v-btn>
            </v-card>
        </v-col>
    </v-row>

    <!-- ダイアログ -->
    <!-- 中身未作成 -->
    <v-dialog v-model="dialog" max-width="1300">
        <v-card class="pa-5">
            <CardNewsDialog :topic="table()" />
        </v-card>
    </v-dialog>
</template>

<script>
import imgcard1 from "@/assets/Seoul/home/yoptook.jpg"
import imgcard2 from "@/assets/Seoul/home/ramen.jpg"
import imgcard3 from "@/assets/Seoul/home/kochujang.jpg"
import CardNewsDialog from "./CardNewsDialog.vue";

export default {
    components: {
        CardNewsDialog
    },
    data() {
        return {
            dialog: false,
            dialogComp: "",//ダイアログ切り替え
            //カードニュース
            topic: [
                {
                    component: "1",
                    src: imgcard1,
                    title: '激辛好きおすすめ料理',
                    sub: '韓国で食べられる激辛料理を紹介',
                },
                {
                    component: "2",
                    src: imgcard2,
                    title: '韓国ラーメン特集',
                    sub: '厳選おすすめ即席ラーメン',
                },
                {
                    component: "3",
                    src: imgcard3,
                    title: 'おすすめ韓国調味料',
                    sub: '日本人でも食べられる韓国調味料'
                },
            ],
        }
    },
    methods: {
        //カードニュースダイアログ
        click(clickComponent) {
            this.dialogComp = clickComponent
            this.dialog = true
        },
        // ダイアログ表示処理
        table() {
            let check = this.topic.filter((value) => {
                return value.component == this.dialogComp
            });
            return check[0];
        },
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
    }
}
</script>

<style>
#relative {
    position: relative;
}

#more {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>