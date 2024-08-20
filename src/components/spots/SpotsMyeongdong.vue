<template v-slot:text>
    <v-sheet class="ma-10 pa-3" color="light-blue-lighten-5">
        <!-- エリア名 -->
        <div class="mt-10 ml-15">
            <h1>明洞エリア</h1>
            <!-- サブタイトル -->
            観光客に<strong class="text-light-blue-accent-2">人気NO.1の観光地</strong>
        </div>

        <!-- エリア説明 -->
        <v-row class="mt-10 ml-15">
            <v-col cols=" 6">
                <p id="sp_md" style="line-height: 2.5;"><br>
                    <span id="border">ほとんどのお店に日本語が話せるスタッフがおり、<br>
                        初めての韓国旅行でも比較的安心です。</span><br>
                    様々なブランドや人々が集まるため、昼夜問わず活気がありますが、<br>
                    夕方になるとメイン通りに屋台が出店され、ひときわにぎわいます。<br>
                    その中でも私が選ぶ明洞といえば<br>
                    「コスメ」「ファッション」「グルメ」「両替所」です。
                </p>
                <p class="text-caption" style="line-height: 0;">※屋台については「グルメ」にて紹介しています。</p>

                <!-- アドバイス -->
                <v-card class="pa-5 my-10 text-body-2" width="80%">
                    <v-carv-title>
                        <span class="mdi mdi-check-decagram-outline"></span>
                        Tips
                    </v-carv-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-caption">
                        赤い線の通りがメイン通りですが、路地にもたくさんのお店が存在します。<br>
                        左記地図の交差点あたりにいる「赤い人」は観光客専門の案内人です。<br>
                        正規に雇われている人なので、安心して話しかけて大丈夫！<br>
                        反対にお店の人は押し売りがひどいので、はっきりと意思表示しましょう。
                    </v-card-text>
                </v-card>

                <p>今回はカテゴリー別に紹介していきたいと思います。</p>

            </v-col>
            <!-- 地図 -->
            <v-col cols="6">
                <v-img src="@/assets/img/spots/M_map.jpg" class="mx-auto mb-2"></v-img>
                <p class="text-center">地下鉄4号線 明洞駅 6番出口<br>
                    地下鉄2号線 乙支路入口駅 5番出口</p>
            </v-col>
        </v-row>
    </v-sheet>

    <!-- メイン内容 -->
    <v-sheet class="ma-10 pa-3">
        <!-- 紹介カテゴリー -->
        <h3>カテゴリー</h3>
        <v-divider :thickness="6" color="info" class="my-5"></v-divider>
        <v-list density="compact">
            <v-list-item v-for="item in indexes" :key="item" :title="'・' + item"></v-list-item>
        </v-list>

        <!-- コスメ -->
        <h3 class="mt-15">コスメ</h3>
        <v-divider :thickness="6" color="info" class="my-5"></v-divider>
        <p style="line-height: 2;">韓国旅行のお土産に欠かせないのがコスメ<br>
            韓国にはプチプラで、機能性の良いコスメやスキンケア用品がたくさんあります。<br>
            そこで今回は「明洞エリア」で、おすすめのコスメショップをご紹介
        </p>

        <!-- コスメ：ブランド名 -->
        <v-list density="compact">
            <v-list-item v-for="item in cosmetics" :key="item" :title="'・' + item"></v-list-item>
        </v-list>

        <!-- NATURE REPUBLIC -->
        <div class="mt-15">
            <h3>①NATURE REPUBLIC 明洞ワールド店</h3>
            <v-divider :thickness="6" color="info" class="my-5"></v-divider>
            <v-img src="@/assets/img/spots/nature.jpg" width="80%" class="mx-auto mb-3"></v-img>
            <p class="text-center">地下鉄4号線 明洞駅 6番出口を出てすぐに左側に位置する植物に覆われた建物<br>
                （明洞には計6店舗のNATURE REPUBLICがあります。)</p>
            <P class="mt-8 text-center" style="line-height: 2;">「韓国自然派スキンケアブランド」と紹介されるほど自然の天然成分をふんだんに使った商品が豊富<br>
                アロエスージングジェルや、ビタペアCシリーズ、スネイルソリューションシリーズが人気！<br>
            </p>
            <v-row class=" ma-3">
                <v-col cols="4"><v-img src="@/assets/img/spots/aroe.jpg" width="70%" class="mx-auto"></v-img></v-col>
                <v-col cols="4"><v-img src="@/assets/img/spots/vitapair.jpg" width="70%"
                        class="mx-auto"></v-img></v-col>
                <v-col cols="4"><v-img src="@/assets/img/spots/snail.jpg" width="70%" class="mx-auto"></v-img></v-col>
            </v-row>

            <v-card width="60%" class="bg-grey-lighten-4 my-15 mx-auto pa-10">
                <v-card-title class="text-center">STORE INFOMATION</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="ml-15 pl-15">
                    <p class="ml-15 pl-5" style="line-height: 1.5;">
                        住所：ソウル特別市 中区 忠武路1街 24-2<br>
                        営業時間：8:00～24:00<br>
                        休業日：年中無休<br>
                        アクセス：地下鉄4号線「明洞」駅6番出口　徒歩1分<br>
                    </p>
                </v-card-text>

            </v-card>
        </div>

        <!-- MISSHA -->
        <div class="mt-15">
            <h3>②MISSHA +PLUS 明洞メガストア店</h3>
            <v-divider :thickness="6" color="info" class="my-5"></v-divider>
            <v-img src="@/assets/img/spots/missha.jpg" width="80%" class="mx-auto mb-3"></v-img>
            <p class="text-center">地下鉄4号線 明洞駅 6番出口からメイン通りに徒歩2分の赤い建物<br>
                （明洞には計4店舗のMISSHAがあります。)</p>
            <P class="mt-8 text-center" style="line-height: 2;">
                <br>
                アロエスージングジェルや、ビタペアCシリーズ、スネイルソリューションシリーズが人気！<br>
            </p>
            <v-row class=" ma-3">
                <v-col cols="4"><v-img src="@/assets/img/spots/aroe.jpg" width="70%" class="mx-auto"></v-img></v-col>
                <v-col cols="4"><v-img src="@/assets/img/spots/vitapair.jpg" width="70%"
                        class="mx-auto"></v-img></v-col>
                <v-col cols="4"><v-img src="@/assets/img/spots/snail.jpg" width="70%" class="mx-auto"></v-img></v-col>
            </v-row>

            <v-card width="60%" class="bg-grey-lighten-4 mx-auto pa-10">
                <v-card-title class="text-center">STORE INFOMATION</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="ml-15 pl-15">
                    <p class="ml-15 pl-5" style="line-height: 1.5;">
                        住所：ソウル特別市 中区 忠武路1街 24-2<br>
                        営業時間：8:00～24:00<br>
                        休業日：年中無休<br>
                        アクセス：地下鉄4号線「明洞」駅6番出口　徒歩1分<br>
                    </p>
                </v-card-text>

            </v-card>
        </div>
    </v-sheet>

</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            indexes: [
                'コスメ', 'ファッション', '両替所',
            ],
            cosmetics: [
                'NATURE REPUBLIC', 'MISSHA', 'CLIO', 'innis free', '3CE', 'OLIVE YOUNG'
            ],
            center: { lat: 51.093048, lng: 6.842120 },
        }

    }
}
</script>

<style>
#sp_md {
    line-height: 2;
}

#border {
    background: linear-gradient(transparent 70%, #38c7f78e 70%);
}
</style>