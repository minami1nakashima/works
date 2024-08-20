<template>
    <v-sheet class="mx-10">
        <!-- ホテル画面概要 -->
        <p class="text-h6 font-weight-black  my-7">おすすめホテル紹介</p>
        <v-row class="text-body-2" style="line-height: 2;">
            <!-- 説明 -->
            <v-col cols="5" class="mt-5">ソウルには数多くの宿泊エリアがありますが、<br>
                その中でもおすすめなのが以下の<strong> 5エリア</strong>
                <!-- エリア表 -->
                <v-sheet class="bg-light-blue-lighten-5 pa-5 my-4">
                    <v-list density="compact">
                        <v-list-item v-for="item in mock.hotelArea" :key="item" :title="item"></v-list-item>
                    </v-list>
                </v-sheet>
                旅行の目的によっておすすめのエリアも変わってくるので、<br>
                自分の目的に合ったエリアからホテルを探してみてください。
            </v-col>

            <!-- エリア地図 -->
            <v-col>
                <v-sheet class="bg-grey-lighten-1 ma-auto" width="80%">
                    <v-img src="@/assets/img/hotel/map.jpg" class="pa-5 mx-auto" width="99%"></v-img>
                </v-sheet>
            </v-col>
        </v-row>

        <!-- エリアを絞る -->
        <v-row class="mt-15">
            <v-col align-self="center">
                <h4>ホテル一覧表</h4>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-select v-model="select" :items="mock.tableName" multiple variant="underlined" :item-props="itemProps"
                    width="100%" label="エリアで絞る">
                </v-select>
            </v-col>
            <v-col cols="12">
                <CardComp :page="page" :cardItem="areaHotel()" :go="go"></CardComp>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import CardComp from "@/components/comp/CardComp.vue"
import mock from "@/components/hotel/mock.js"


export default {
    components: {
        CardComp,
    },
    data() {
        return {
            mock,
            page: 'Hotel',
            go: '詳細を見る',
            select: [],
        }
    },

    methods: {
        text(itemPlace) {
            this.place = itemPlace
            this.dialog = true
        },
        itemProps(item) {
            return {
                title: item.table,
                subtitle: item.text,
            }
        },
        // バグる
        areaHotel() {
            if (this.select.length === 0) {
                let selectArea = mock.cardItem
                return selectArea;
            } else {
                let selectArea = mock.cardItem.filter(value => this.select.some(table => value.area === table.table))
                return selectArea;
            };

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