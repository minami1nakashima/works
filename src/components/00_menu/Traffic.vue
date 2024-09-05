<template>
    <v-sheet>
        <div>
            <p class="text-h6 font-weight-black ma-10 mt-7">韓国 公共交通機関情報</p>
            <v-img src="@/assets/img/traffic/train.jpg" class="mx-auto" width="60%"></v-img>
        </div>

        <div>
            <p>韓国の主な移動手段は「バス」「電車」「タクシー」です。<br>
                日本と変わらないです。。。<br>
                ここでは韓国ならではの文化や、乗り方などを紹介していきます。<br>
                GoogleMapでは詳細が検索できないため(韓国がアメリカに詳細情報公開していないため)、韓国のアプリ(日本語対応)を使うことを強くお勧めします。
            </p>
            <v-list density="compact">
                <v-list-item v-for="item in traffics" :key="item" :title="'・' + item"></v-list-item>
            </v-list>
        </div>

        <div>
            <h3>バス</h3>
            <v-divider :thickness="6" color="info" class="my-5"></v-divider>
            <v-img src="@/assets/img/traffic/bus.jpg"></v-img>
            <v-list density="compact">
                <v-list-item v-for="item in bus_index" :key="item" :title="'・' + item"></v-list-item>
            </v-list>
            <p>韓国と日本で大きく違う点は、バスの走行距離がとても長い点と、すごいスピードで走行しているという点です(笑)<br>
                また、1つの停留所に10～15本程度のバスが止まるので、初心者の方は難しく感じるかも入れません。<br>
                時刻表がないのも特徴で、韓国のバスは「〇分間隔運行」と、そのバスによって運転間隔が違います。
            </p>
            <h4>バスの種類</h4>
            <v-divider :thickness="6" color="info" class="my-5"></v-divider>
            <p>韓国には「赤」「青」「緑」のバスがあります。
            </p>
            <v-list density="compact">
                <v-list-item v-for="item in bus" :key="item"
                    :title="'・' + item.color + '・・・' + item.text"></v-list-item>
            </v-list>

            <div>
                <h4>赤いバス</h4>
                <v-img src="@/assets/img/traffic/red_bus.jpg"></v-img>
                <p>赤いバスは広域バスを呼ばれ、主に郊外からソウル市街の職場へ通う人が利用しています。<br>
                    なので、観光で訪れた際にはあまり使わないかもしれません。<br>
                    日本でいう高速バスをイメージすると理解しやすいかも。
                </p>
            </div>

            <div>
                <h4>青いバス</h4>
                <v-img src="@/assets/img/traffic/blue_bus.jpg"></v-img>
                <p>ソウル市内で一番多く走っているバス<br>
                    1番便利で、利用度が高いバス<br>
                    赤いバスに比べたら走行距離は短いですが、ソウルの端から端までを走行しています。(片道2時間程度の路線)<br>
                    また、本数や路線も多く、路線が一部重なるバスもあるので<br>
                    近場の移動なら「AAA行」「BBB行」「CCC行」「DDD行」と、多くの路線を利用できることも少なくありません。<br>
                    (そのため、待ち時間が5分以下のことが多いです。)<br>
                    「バス→電車」または「電車→バス」を利用すると、乗り換え割で運賃が安く利用できるので、是非乗ってみてください。
                </p>
            </div>

            <div>
                <h4>緑のバス</h4>
                <v-img src="@/assets/img/traffic/maeul.jpg"></v-img>
                <p>「マウル：村」の規模を走るバス<br>
                    一番日本のバスの感覚に近いです。<br>
                    近場をぐるぐると走るため、地域住民や、お年寄りがたくさん利用しています。<br>
                    駅から少し離れた場所（ホテルやご飯屋さんなど）に行く際には使うかもしれません。</p>
            </div>

            <h4>バスの乗り方</h4>
            <v-divider :thickness="6" color="info" class="my-5"></v-divider>
            <p>
                韓国のバスは「番号」で路線が違います。<br>
                「NEVER MAP」を使えば簡単に行きたい先のバス番号を調べることができます。(アプリは日本語対応)<br>
                冒頭でも述べましたが、韓国ではGoogleMapがほぼ使い物になりません。<br>
                細かい道＋交通などの検索ができないです。
            </p>
            <v-img src="@/assets/img/traffic/never.jpg"></v-img>
        </div>
    </v-sheet>

</template>

<script>
export default {
    data() {
        return {
            traffics: [
                'バス', '電車', 'タクシー',
            ],
            bus_index: [
                'バスの種類', 'バスの乗り方', 'バス運賃',
            ],
            bus: [
                {
                    color: '赤',
                    text: '広域バス（ソウル市街と郊外を結ぶ路線）'
                },
                {
                    color: '青',
                    text: '幹線バス（ソウル市内を走る一番使われる路線バス）'
                },
                {
                    color: '緑',
                    text: 'マウルバス（近場をぐるぐると走る路線バス）'
                }]

        }
    }
}
</script>