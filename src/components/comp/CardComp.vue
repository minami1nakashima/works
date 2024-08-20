<template>
    <v-row>
        <v-col cols="3" v-for="item in cardItem" :key="item.area">
            <v-card id="relative" flat min-height="250" class="mb-4">
                <v-img :src="item.src" cover class="img" height="145px"></v-img>
                <p class="text-body-1 font-weight-black">
                    {{ item.area }}
                </p>
                <p :class="classText" class="my-2">
                    {{ item.text }}
                </p>
                <div v-if="page == 'Hotel'">
                    <p>{{ item.level }}</p>
                    <p>1泊/1部屋￥{{ item.price }}～</p>
                </div>
                <v-btn id="more" size="small" :class="classBtn" :text="go" @click="click(item.component)"></v-btn>
            </v-card>
        </v-col>
    </v-row>

    <div v-if="page == 'Spots'">
        <v-dialog v-model="dialog" max-width="1300">
            <v-card class="pa-5">

                <component :is="dialogComp"></component>
            </v-card>
        </v-dialog>
    </div>
    <div v-else>
        <v-dialog v-model="dialog" max-width="1300">
            <!-- {{ table()[0].text }} -->
            <v-card class="pa-5">
                <HotelComp :table="table()" />

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import SpotsMyeongdong from "@/components/spots/SpotsMyeongdong.vue"
import SpotsDongdaemun from "../spots/SpotsDongdaemun.vue";
import SpotsJongno from "../spots/SpotsJongno.vue";
import HotelComp from "@/components/hotel/HotelComp.vue";
import mock from "../hotel/mock";

export default {
    props: {
        page: String,
        cardItem: Object,
        classText: String,
        classBtn: String,
        go: String,
        hotelName: String,
    },
    components: {
        SpotsMyeongdong,
        SpotsDongdaemun,
        SpotsJongno,
        HotelComp,
    },
    data() {
        return {
            mock,
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