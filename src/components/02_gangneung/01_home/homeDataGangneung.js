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
             text: '',
        },
        {
            src: img3,
            text: 'カラフルな壁画の象徴',
         },
         {
            src: img4,
            text: '新鮮な海鮮が楽しめる',
        },
        {
             src: img5,
             text: '澄み渡る海をヨットで散策',
         },
    ],
     // カルーセルカードタイトル＋説明
    slides: [
         {
            color: 'light-blue-lighten-5',
            slide: '広安里',
            explain: `\\ みんなに人気のビーチ /

韓国人、観光客ともに
訪れる人気のビーチ
周辺にはカフェやレストランなど
きれいな海を見ながら
楽しめます。
釜山に行ったら必須の観光地`,
         },
         {
            color: 'yellow-lighten-5',
            slide: '釜山ブルーライン',
            explain: `\\ 絶景オーシャンビュー /

釜山の象徴である「海」
を存分に堪能できるスカイカプセル
昼は海が、夜は夜景が楽しめます。
釜山の中心地からも
アクセスしやすく、お勧めです。
約20分の贅沢はいかが？`,
        },
        {
            color: 'light-green-lighten-5',
            slide: '甘川洞文化町',
            explain: `\\ おもちゃの世界/

住宅一軒一軒がカラフルにペイント
村のいたるところに
アート作品や壁画があり
美術を楽しめます。
坂や、階段、細い道が多いので、
歩きやすい運動靴で行くことを
お勧めします。`,
       },
       {
            color: 'blue-grey-lighten-5',
            slide: 'チャガルチ市場',
            explain: `\\ 韓国最大規模の水産市場 /

7,500坪の広大な敷地に
約1,200ものお店が連なる巨大市場
新鮮な魚介類が種類豊富にそろっていて、
タイやヒラメなどのよく見る魚から
ウニやアワビなどの高級なもの、
さらにはマンボウなど珍しい魚も！
お土産や日用品なども
売っています。`,
        },
        {
            color: 'teal-lighten-5',
            slide: 'ヨットツアー',
            explain: `\\ 濡れないアクティビティ /
                    
釜山の海では欠かせないヨットツアー
昼には絶景、夜には夜景が楽しめます。
貸し切りにもできるので、
お祝いや記念日にもおススメ
でも冬は極寒の韓国なので
夏限定のアクティビティ、、？
寒さに自信がある方は
ぜひチャレンジしてみてください。`,
        },
    ],
}
