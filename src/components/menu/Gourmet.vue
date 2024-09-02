<template>
    <p class="font-weight-black" :class="SpCheck() ? 'text-subtitle-2 ml-2 mb-3' : 'text-h6 my-7 ml-5'">
        K-FOODおすすめ紹介
    </p>
    <v-sheet :class="SpCheck() ? 'mx-1' : 'mx-10'">
        <!-- ランキング表タブ -->
        <v-item-group>
            <v-tabs v-model="tab">
                <!-- タブタイトル -->
                <v-tab v-for="item in gourmetData.Category" :key="item.id" :class="tabSpCheck(item)" :text="item.name"
                    :value="item.id" class="font-weight-black rounded-t-lg ml-1 border-t-lg border-e-lg border-s-lg"
                    :width="SpCheck() ? '30' : '120'" :height="SpCheck() ? '28' : '35'">
                </v-tab>
            </v-tabs>
        </v-item-group>

        <!-- ランキング表 -->
        <v-window v-model="tab" :class="SpCheck() ? 'mt-n6' : 'mt-n4'">
            <v-window-item :value="tab">
                <gourmetcomp :tab="tab" :table="table">
                </gourmetcomp>
            </v-window-item>
        </v-window>
    </v-sheet>
</template>

<script>
import gourmetcomp from "@/components/gourmet/GourmetComp.vue"
import gourmetData from "@/components/gourmet/gourmetData.js"

export default {
    components: {
        gourmetcomp,
    },
    data() {
        return {
            gourmetData,//データ別ファイル
            tab: '1',
        }
    },
    methods: {
        // SP画面切り替え
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
        // タブタイトルでclassに文字列と関数を適用
        tabSpCheck(category) {
            return this.$vuetify.display.smAndDown ? `text-caption ${category.css}` : category.css;
        }
    },
    computed: {
        // 各タブごとにランキング表データを切り替える
        table() {
            if (this.tab === '1') {
                return gourmetData.theme.food;
            } else if (this.tab === '2') {
                return gourmetData.theme.cafe;
            } else {
                return gourmetData.theme.convenience;
            }
        }
    }
}

</script>

<style>
.id1 {
    background-color: rgb(224, 237, 254);
}

.id2 {
    background-color: rgb(248, 227, 205);
}

.id3 {
    background-color: rgb(229, 253, 225);
}

.v-tab-item--selected.id1 {
    background-color: rgb(117, 190, 254);
}

.v-tab-item--selected.id2 {
    background-color: rgb(254, 174, 113);
}

.v-tab-item--selected.id3 {
    background-color: #c5fd7d;
}

.styleColor1 {
    border-color: rgb(117, 190, 254) !important;
}

.styleColor2 {
    border-color: rgb(254, 174, 113) !important;
}

.styleColor3 {
    border-color: #c5fd7d !important;
}

.bgColor1 {
    background-color: rgb(231, 249, 253);
}

.bgColor2 {
    background-color: rgb(254, 245, 224);
}

.bgColor3 {
    background-color: #eeffd8;
}
</style>