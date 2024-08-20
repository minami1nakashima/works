<template>
    <v-sheet>
        <!-- ホテル紹介 -->
        <v-row>
            <v-col cols="12">
                <h3>{{ table.text }}</h3>
                <p class="text-subtitle-1 text-light-blue-accent-2">{{ table.hotelNameE }}</p>
            </v-col>
            <v-col>
                <p class="my-6 font-weight-bold text-body-2">
                    エリア：{{ table.area }}<br>
                    ランク：{{ table.level }}
                </p>
            </v-col>
            <!-- サイトリンク -->
            <!-- 要場所修正 -->
            <v-col>
                <v-btn size="large">
                    <a :href="table.url">
                        ホテルサイトへ
                    </a>
                </v-btn>

            </v-col>

        </v-row>

        <v-sheet max-width="1000" class="mx-auto">
            <!-- ギャラリー -->
            <!-- ポップアップ入れたい -->
            <v-row>
                <v-col cols="9" class="pa-0 pr-2">
                    <v-img :src="table.src" height="500px" :aspect-ratio="16 / 9" cover></v-img>
                </v-col>
                <v-row>
                    <v-col cols="12" class="pb-0">
                        <v-img :src="table.src1" height="165px" :aspect-ratio="16 / 9" cover></v-img>
                    </v-col>
                    <v-col cols="12" class="py-0">
                        <v-img :src="table.src2" height="165px" :aspect-ratio="16 / 9" cover></v-img>
                    </v-col>
                    <v-col cols="12" class="pt-0">
                        <v-img :src="table.src3" height="165px" :aspect-ratio="16 / 9" cover></v-img>
                    </v-col>
                </v-row>
            </v-row>
            <!-- 説明 -->
            <p style="white-space:pre-wrap;" class="my-10">
                {{ table.p }}
            </p>

            <!-- 住所 -->
            <h4 class="mb-4">ホテル詳細</h4>
            <v-row class="bg-grey-lighten-2">
                <v-col cols="7">
                    <v-sheet class="pa-3">
                        <v-row>
                            <v-col cols="12" class="font-weight-bold">所在地</v-col>
                            <v-col cols="2">エリア</v-col>
                            <v-col cols="10">{{ table.area }}</v-col>
                            <v-divider></v-divider>
                            <v-col cols="2">住所</v-col>
                            <v-col cols="10">{{ table.address }}</v-col>
                            <v-divider></v-divider>
                            <v-col cols="2">最寄り駅</v-col>
                            <v-col cols="10">{{ table.station }}</v-col>
                            <v-divider></v-divider>
                            <v-col cols="2">TELL</v-col>
                            <v-col cols="10">{{ table.number }}</v-col>
                            <v-divider></v-divider>
                        </v-row>
                    </v-sheet>
                    <v-sheet class="pa-3 mt-3">
                        <v-row>
                            <v-col cols="12" class="font-weight-bold">サービス</v-col>
                            <v-col cols="2">CI/CO Time</v-col>
                            <v-col cols="10" style="white-space:pre-wrap;">{{ table.time }}</v-col>
                            <v-divider></v-divider>
                            <v-col cols="2">サービス</v-col>
                            <v-col cols="10"><v-icon v-for="item in table.service" :icon="item" start></v-icon></v-col>
                            <v-divider></v-divider>
                            <v-col cols="3">アメニティ</v-col>
                            <v-col cols="9" class="ml-n12"><v-icon v-for="item in table.amenity" :icon="item"
                                    start></v-icon></v-col>
                            <v-divider></v-divider>
                        </v-row>
                    </v-sheet>

                </v-col>
                <v-col>
                    <v-row>
                        <v-col><v-img :src="table.src4" height="475px" cover></v-img></v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-sheet>
    </v-sheet>
</template>

<script>
export default {
    props: {
        table: Object,
    },
}
</script>