<template>
    <v-row>
        <v-col v-for="item in cardItem" :key="item.area" :class="SpCheck() ? 'px-0' : ''">
            <v-card id="relative" flat :height="SpCheck() ? SpHeight : PcHeight" :width="SpCheck() ? '155' : '240'"
                class="mb-4 mx-auto">
                <v-img :src="item.src" cover class="img" :height="SpCheck() ? '100' : '145'"></v-img>
                <p class="font-weight-black" :class="SpCheck() ? 'text-caption' : 'text-body-1'">
                    {{ item.area }}
                </p>
                <div v-if="page == 'Spots'">
                    <p class="text-light-blue-lighten-3 font-weight-bold" :class="SpCheck() ? 'text-caption' : 'my-2'">
                        {{ item.text }}
                    </p>
                </div>
                <div v-else="page == 'Hotel'">
                    <p class="my-2" :class="SpCheck() ? 'text-caption' : 'my-2'">
                        {{ item.text }}
                    </p>
                    <p>{{ item.level }}</p>
                    <p>1泊/1部屋￥{{ item.price }}～</p>
                </div>
                <v-btn id="more" :size="SpCheck() ? 'x-small' : 'small'"
                    class="bg-light-blue-lighten-2 text-white font-weight-black"
                    :class="SpCheck() ? 'text-caption' : 'text-body-2'" text="go"
                    @click="click(item.component)">詳細を見る</v-btn>
            </v-card>
        </v-col>
    </v-row>

    <v-row v-if="page == 'Spots'">
        <v-dialog v-model="dialog" max-width="1100">
            <v-card class="pa-5">

                <component :is="dialogComp"></component>
            </v-card>
        </v-dialog>
    </v-row>
    <v-row v-else>
        <v-dialog v-model="dialog" max-width="1300">
            <v-card class="pa-5">
                <HotelComp :table="table()" />

            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import SpotsMyeongdong from "@/components/spots/SpotsMyeongdong.vue"
import SpotsDongdaemun from "../spots/SpotsDongdaemun.vue";
import SpotsJongno from "../spots/SpotsJongno.vue";
import HotelComp from "@/components/hotel/HotelComp.vue";
import hotelData from "../hotel/hotelData";

export default {
    props: {
        page: String,
        SpHeight: Number,
        PcHeight: Number,
        cardItem: Object,
    },
    components: {
        SpotsMyeongdong,
        SpotsDongdaemun,
        SpotsJongno,
        HotelComp,
    },
    data() {
        return {
            hotelData,
            dialog: false,
            dialogComp: "",
        }
    },
    methods: {
        click(clickComponent) {
            this.dialogComp = clickComponent
            this.dialog = true
        },
        table() {
            let check = this.cardItem.filter((value) => {
                return value.component == this.dialogComp
            });
            return check[0];
        },
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        }
    }
}
// computed: {
//     table() {
//         if (this.dialogComp === '1') {
//             return mock.cardItem[0];
//         } else if (this.dialogComp === '2') {
//             return mock.cardItem[1];
//         } else {
//             return mock.cardItem[2];
//         }
//     }
// }
//     }
// }


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