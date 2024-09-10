import img1 from "@/assets/Gangneung/home/sea.jpg"
import img2 from "@/assets/Gangneung/home/ooh.jpg"
import img3 from "@/assets/Gangneung/home/goblin.jpg"
import img4 from "@/assets/Gangneung/home/bts.jpg"
import img5 from "@/assets/Gangneung/home/market.jpg"

export default {     
    // カルーセル写真＋説明  
    items: [
        {
            src: img1,
            text: '都心から2時間！沖縄レベルの海',
         },
        {
             src: img2,
             text: '5000ウォン札の肖像画：申師任堂の生家',
        },
        {
            src: img3,
            text: '韓国を代表する「トッケビ」の撮影地',
         },
         {
            src: img4,
            text: 'BTSのアルバム撮影にも使われた海の前のバス停',
        },
        {
             src: img5,
             text: '市場を代表する「イカスンデ」',
         },
    ],
     // カルーセルカードタイトル＋説明
    slides: [
         {
            color: 'deep-purple-lighten-5',
            slide: '海水浴場',
            explain: `\\ 訪れる人を魅了する透き通った海 /

カンヌンの海沿いは、どこに出ても
白い砂浜に透き通った海！
夏の海水浴はもちろん
冬は周辺にあるオーシャンビューカフェ
でも楽しめます。
観光名所はたくさんですが、
静かに旅行を楽しみたい人に
おススメのエリア`,
         },
         {
            color: 'light-green-lighten-5',
            slide: '鳥竹軒(オジュッコン)',
            explain: `\\ 朝鮮王国時代の住宅建築 /

韓国の偉人の生家として知られる場所で、
500年近くの歴史を持つ観光名所
敷地はとても広く、
見ごたえがあります。
韓服が借りられるブースもあり、
まるで時代劇のキャストになった気分
のように楽しめます。`,
        },
        {
            color: 'teal-lighten-5',
            slide: '注文津防砂提',
            explain: `\\ トッケビ撮影地/

ドラマ「トッケビ」の撮影地
カンヌンにはよくある防砂提ですが、
ドラマのヒットとともに
観光名所となりました。
ドラマではかなり重要なシーンで
使われています。
周辺に同じような防砂提がありますが、
ドラマの看板が目印です。`,
       },
       {
            color: 'cyan-lighten-5',
            slide: '香湖海岸 バス停',
            explain: `\\ (BTSバス停) /

BTSのアルバムロケ地に使われたバス停
元々ジャケット撮影用に
用意されたバス停であったため
1度は撤去されてしまいましたが、
現在は観光用として復元されています。
今では韓国人の自慢になっているBTS
海＋バス停の景色もとてもきれいなので
一度は訪れたいスポット
`,
        },
        {
            color: 'red-lighten-5',
            slide: '中央市場',
            explain: `\\ 食べ歩きグルメ /
                    
魚介コロッケや、タッカンジョン
イカスンデなどの
食べ歩きメニューが人気な市場
KTXの駅からの近いため、
旅行の最終日などにふらっとよるのが
おススメなスポットです。`,
        },
    ],
}
