<template>
    <v-card class="mx-auto border-lg" :class="cardSpCheck(table.styleColor)" min-height="600" flat>
        <!-- ランキングタイトル -->
        <v-card-title class="text-black font-weight-bold"
            :class="SpCheck() ? 'text-caption pa-0 mt-1' : 'text-subtitle-1'">{{
                table.title }}</v-card-title>
        <!-- ランキングサブタイトル -->
        <v-card-text class="text-black" :class="SpCheck() ? 'text-caption pa-0 mb-2' : 'text-body-2'">{{ table.sub
            }}👑</v-card-text>

        <!-- SP画面のランキング表示内容要　要検討  -->
        <!--  -->
        <v-sheet>
            <!-- ランキング表 -->
            <v-data-table :headers="header" :items="table.items" :class="tableSpCheck(table.bgColor)"
                hide-default-footer :density="SpCheck() ? 'compact' : 'default'">
                <!-- ランク順位 -->
                <template v-slot:item.Rank="{ index }">
                    <p v-if="index + 1 == '1'">🥇{{ index + 1 }}</p>
                    <p v-if="index + 1 == '2'">🥈{{ index + 1 }}</p>
                    <p v-if="index + 1 == '3'">🥉{{ index + 1 }}</p>
                    <p v-if="index >= 3">{{ index + 1 }}</p>
                </template>
                <!-- カード選択切り替え -->
                <template v-slot:item.Check="{ item }">
                    <v-checkbox-btn v-model="storename" :value="item" :ripple=false color="orange">
                    </v-checkbox-btn>
                </template>
            </v-data-table>
            <!-- ランキング表テキスト -->
            <p class="text-caption ml-2 mb-3">
                ※Price,Levelでソートの並び替えができます。<br>
                ※Check Moreをクリックするとお店、または商品の詳細が表示されます。
            </p>
        </v-sheet>

        <!-- コンビニ限定テキスト -->
        <div v-show="tab == '3'" class="ml-2 my-3 font-weight-bold"
            :class="SpCheck() ? 'text-caption' : 'text-subtitle-2'">
            韓国のコンビニでは
            <span class="point">１＋１</span>
            (1つ買うと1つ無料)などの商品がたくさんあります。<br>
            お得な商品もあるので是非コンビニに行ったらチェックしてみてください。
        </div>

        <!-- 詳細カード -->
        <v-row>
            <v-col v-for="item in test()" :key="item">
                <v-card id="relative" class="mt-5 mx-auto" :width="SpCheck() ? '150' : '240'"
                    :height="SpCheck() ? '180' : '280'">
                    <v-img :height="SpCheck() ? '100' : '150'" :src="item.src" cover> </v-img>
                    <!-- カードタイトル ごはん・カフェ -->
                    <v-card-title v-if="item.id <= '2'" :class="SpCheck() ? 'text-subtitle-2' : ''">
                        {{ item.Place }}
                    </v-card-title>
                    <!-- メニュー・商品名 コンビニ-->
                    <v-card-title v-else :class="SpCheck() ? 'text-subtitle-2' : ''">
                        {{ item.Menu }}
                    </v-card-title>
                    <!-- クリックでダイアログ表示 -->
                    <!-- 未対応 -->
                    <p id="more" @click="text(item.Place)" class="text-blue-darken-1 text-right ma-3">
                        もっと見る
                    </p>
                </v-card>
            </v-col>
        </v-row>

        <!-- カードダイアログ -->
        <v-dialog v-model="dialog" max-width="1500">
            <v-card class="pa-5">
                <component :is="getComponent(place)"></component>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
import kwangjangmarket from "@/components/gourmet/dialog/kwangjangmarket.vue"



export default {
    props: {
        tab: String,//タブタイトル名
        table: Object,//gourmetDataよりGourmetのmethodsを通して取得
    },
    components: {
        kwangjangmarket
    },
    data() {
        return {
            dialog: false,
            place: "",
            menu: "",
            storename: [],//選択したお店情報
            //ヘッダーデータ
            header: [],
        }
    },
    methods: {
        // ダイアログ表示切替
        text(itemPlace) {
            this.place = itemPlace
            this.dialog = true
        },
        // ダイアログコンポーネント切り替え
        // １つのコンポーネントに統一？
        getComponent(itemPlace) {
            switch (itemPlace) {
                case 'クァンジャン市場':
                    return 'kwangjangmarket';
            }
        },
        // 各タブにあったカードのみ表示
        test() {
            let check = this.storename.filter((element) => {
                return element.id == this.tab
            }); return check;
        },
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
        // Sp画面区分別処理（カード外枠）
        cardSpCheck(category) {
            return this.$vuetify.display.smAndDown
                ? `pa-1 ${this.table.styleColor}` : `pa-5 mb-3 ${this.table.styleColor}`;
        },
        //SP画面区分別処理（datatable背景色）
        tableSpCheck(tcategory) {
            return this.$vuetify.display.smAndDown
                ? `text-caption pa-0 ${this.table.bgColor}` : this.table.bgColor;
        },
    },
    computed: {
        header() {
            return this.header = this.SpCheck() ? [
                {
                    title: 'Rank',
                    align: 'center',
                    key: 'Rank',
                    value: 'Rank',
                    sortable: false,
                    width: '2%'
                },
                {
                    title: 'Place',
                    key: 'Place',
                    value: 'Place',
                    sortable: false,
                },
                {
                    title: 'Menu',
                    key: 'Menu',
                    value: 'Menu',
                    sortable: false,
                },
                {
                    title: 'Check more',
                    key: 'Check',
                    Value: 'Check',
                    sortable: false,
                    align: 'center'
                }
            ] : [
                {
                    title: 'Rank',
                    align: 'center',
                    key: 'Rank',
                    value: 'Rank',
                    sortable: false,
                },
                {
                    title: 'Place',
                    key: 'Place',
                    value: 'Place',
                    sortable: false,
                },
                {
                    title: 'Menu',
                    key: 'Menu',
                    value: 'Menu',
                    sortable: false,
                },
                {
                    title: 'Price',
                    key: 'Price',
                    value: 'Price',

                },
                {
                    title: 'Level',
                    key: 'Level',
                    value: 'Level',
                },
                {
                    title: 'Check more',
                    key: 'Check',
                    Value: 'Check',
                    sortable: false,
                }
            ]
        }
    }

}

</script>

<style>
.v-selection-control__input::before {
    background-color: rgba(255, 0, 0, 0) !important;
}

.point {
    color: rgb(255, 179, 27);
}
</style>