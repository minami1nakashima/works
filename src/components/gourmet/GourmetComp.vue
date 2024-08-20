<template>
    <v-card class="mx-auto pa-5 mb-3 border-lg" min-height="750" :class="styleColor" flat>
        <v-card-title class="text-black text-subtitle-1 font-weight-bold">{{ title }}</v-card-title>
        <v-card-text class="text-black text-body-2">{{ sub }}👑</v-card-text>
        <v-sheet>
            <v-data-table :headers="header" :items="items" :class="bgColor" hide-default-footer class="pa-2">
                <template v-slot:item.Rank="{ index }">
                    <p v-if="index + 1 == '1'">🥇{{ index + 1 }}</p>
                    <p v-if="index + 1 == '2'">🥈{{ index + 1 }}</p>
                    <p v-if="index + 1 == '3'">🥉{{ index + 1 }}</p>
                    <p v-if="index >= 3">{{ index + 1 }}</p>
                </template>
                <template v-slot:item.Check="{ item }">
                    <v-checkbox-btn v-model="storename" :value="item" :ripple=false color="orange">
                    </v-checkbox-btn>
                </template>
            </v-data-table>
            <p class="text-caption ml-2">
                ※Price,Levelでソートの並び替えができます。<br>
                ※Check Moreをクリックするとお店、または商品の詳細が表示されます。
            </p>
        </v-sheet>
        <div v-show="tab == '3'" class="ml-2 my-3 font-weight-bold text-subtitle-2">
            韓国のコンビニでは<span class="point">１＋１</span>（１つ買ったら１つ無料）、<span
                class="point">２＋１</span>（２つ買えば１つ無料）の商品がたくさんあります。<br>
            お得な商品もあるので是非コンビニに行ったらチェックしてみてください。
        </div>

        <v-row>
            <v-col cols="3" v-for="item in test()" :key="item">
                <v-card id="relative" class="mt-5" max-width="260" min-height="280">
                    <v-img height="150px" :src="item.src" cover> </v-img>

                    <v-card-title v-if="item.id <= '2'">
                        {{ item.Place }}
                    </v-card-title>
                    <v-card-title v-else>
                        {{ item.Menu }}
                    </v-card-title>
                    <p id="more" @click="text(item.Place)" class="text-blue-darken-1 text-right ma-3">
                        もっと見る
                    </p>
                </v-card>
            </v-col>
        </v-row>

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
        tab: String,
        styleColor: String,
        bgColor: String,
        title: String,
        sub: String,
        items: String,
    },
    components: {
        kwangjangmarket
    },
    data() {
        return {
            dialog: false,
            place: "",
            menu: "",
            storename: [],
            header: [
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
            ],
        }
    },
    // computed: {
    //     conveni() {
    //         if (this.storename.id == '1') {
    //             return this.storename
    //         }
    //         else if (this.storename.id == '2') {
    //             return this.storename
    //         }
    //         else {
    //             this.storename.Menu = this.Place
    //             return this.Place
    //         }
    //     }
    // },
    methods: {
        text(itemPlace) {
            this.place = itemPlace
            this.dialog = true
        },
        getComponent(itemPlace) {
            switch (itemPlace) {
                case 'クァンジャン市場':
                    return 'kwangjangmarket';
            }
        },
        test() {
            let check = this.storename.filter((element) => {
                return element.id == this.tab
            }); return check;
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