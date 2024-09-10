// フードカードイメージ
import foodImg1 from "@/assets/Seoul/gourmet/yukhoe.jpg";
import map1 from "@/assets/Seoul/gourmet/yukhoeMap.jpg";
import foodImg2 from "@/assets/Seoul/gourmet/kani.jpg";
import map2 from "@/assets/Seoul/gourmet/kaniMap.jpg";
import foodImg3 from "@/assets/Seoul/gourmet/gogi.jpg";
import map3 from "@/assets/Seoul/gourmet/gogiMap.jpg";
import foodImg4 from "@/assets/Seoul/gourmet/chiken.jpg";
import map4 from "@/assets/Seoul/gourmet/chikenMap.jpg";
import foodImg5 from "@/assets/Seoul/gourmet/yoptook.jpg";
import map5 from "@/assets/Seoul/gourmet/yoptookMap.jpg";
import foodImg6 from "@/assets/Seoul/gourmet/kalguksu.jpg";
import map6 from "@/assets/Seoul/gourmet/kalguksuMap.jpg";
import foodImg7 from "@/assets/Seoul/gourmet/sundaeguk.jpg";
import map7 from "@/assets/Seoul/gourmet/sundaegukMap.jpg";
import foodImg8 from "@/assets/Seoul/gourmet/intestines.jpg";
import map8 from "@/assets/Seoul/gourmet/intestinesMap.jpg";
import foodImg9 from "@/assets/Seoul/gourmet/gongbul.jpg";
import map9 from "@/assets/Seoul/gourmet/gongbulMap.jpg";
import foodImg10 from "@/assets/Seoul/gourmet/gyoza.jpg";
import map10 from "@/assets/Seoul/gourmet/gyozaMap.jpg";

// カフェカードイメージ
import cafeImg1 from "@/assets/Seoul/gourmet/onion.jpg";
import cafeImg2 from "@/assets/Seoul/gourmet/ribon.jpg";
import cafeImg3 from "@/assets/Seoul/gourmet/Scaf.jpg";
import cafeImg4 from "@/assets/Seoul/gourmet/bagel.jpg";
import cafeImg5 from "@/assets/Seoul/gourmet/layered.jpg";
import cafeImg6 from "@/assets/Seoul/gourmet/chongsoodang.jpg";
import cafeImg7 from "@/assets/Seoul/gourmet/daerim.jpg";
import cafeImg8 from "@/assets/Seoul/gourmet/tribe.jpg";
import cafeImg9 from "@/assets/Seoul/gourmet/harry.jpg";
import cafeImg10 from "@/assets/Seoul/gourmet/starbucks.jpg";

// コンビニカードイメージ
import conveniImg1 from "@/assets/Seoul/gourmet/viyott.jpg";
import conveniImg2 from "@/assets/Seoul/gourmet/milk.jpg";
import conveniImg3 from "@/assets/Seoul/gourmet/sausage.jpg";
import conveniImg4 from "@/assets/Seoul/gourmet/maepkal.jpg";
import conveniImg5 from "@/assets/Seoul/gourmet/ramen.jpg";
import conveniImg6 from "@/assets/Seoul/gourmet/kimti.jpg";
import conveniImg7 from "@/assets/Seoul/gourmet/pauti.jpg";
import conveniImg8 from "@/assets/Seoul/gourmet/snack.jpg";
import conveniImg9 from "@/assets/Seoul/gourmet/kimpa.jpg";
import conveniImg10 from "@/assets/Seoul/gourmet/onigiri.jpg";

export default {
  // タブタイトル
  Category: [
    {
      page: "1",
      name: "ご飯🍽️",
      css: "id1",
    },
    {
      page: "2",
      name: "カフェ☕",
      css: "id2",
    },
    {
      page: "3",
      name: "コンビニ🍙",
      css: "id3",
    },
  ],
  theme: {
    // フードランキングデータ
    food: {
      title: "おすすめご飯ランキング",
      sub: "独断と偏見が詰まった韓国のうまい店TOP10",
      styleColor: "styleColor1",
      bgColor: "bgColor1",
      items: [
        {
          id: "1",
          page: "1",
          Place: "クァンジャン市場",
          Menu: "ユッケ/イイダコ/食べ歩き",
          Price: "¥3000~4000",
          Level: "なし",
          Check: false,
          src: foodImg1,
          address: "Yukhoe Street, 177, Jongno 4-ga, Jongno-gu, Seoul",
          station: "鐘路5街駅 地下鉄1号線11番出口 徒歩約1分",
          number: "(82)2 2269 8855",
          map: map1,
          text: `市場の一角にある「ユッケ通り」
クァンジャン市場といえば、ユッケと韓国人でも答えるほど、現地の方にも愛されています。
市場のサイドにはユッケ屋さんがずらりと並び、どこのお店で食べてもおいしいです。
通りの中央には屋台が並び、ローカルフードを楽しむこともできます。
また、通りを抜けると普通の市場なので、「キムチ」や「お土産」などを買うこともできます。
駅からも近く、楽しみ方はいろいろあるので、おススメです。

代表メニュー：ユッケ/ユッケタンタンイ（ユッケ＋イイダコ）
　　　　　　　レバ刺し/センマイ
　　　　　　　チヂミなど`,
          tip: `最近は屋台のぼったくりがひどいそう、、、
食べたいものがあるときは、押し売りには負けず、きっぱりことわる！
必ず値段を確認してから、周りの韓国人に助けを求めてもいいかも（若い人なら絶対助けてくれます。）`,
        },
        {
          id: "2",
          page: "1",
          Place: "スンミの家幸せケジャン",
          Menu: "カンジャンケジャン",
          Price: "¥3000~4000",
          Level: "なし",
          Check: false,
          src: foodImg2,
          address: "2F, 18-37, Euljiro 6-ga, Jung-gu, Seoul",
          station: "東大門歴史文化公園駅 地下鉄2号線14番出口 徒歩約3分",
          number: "(82)2 2268 2059",
          map: map2,
          text: `韓国に行ったら絶対に食べてほしい韓国料理のひとつ！「カンジャンケジャン」
日本人にはあまりなじみのないワタリガニですが、味は絶品です。
特に雌ガニがおいしいといわれ、お店でも同じメニューなのに値段が分かれていることが多いです。
今回紹介しているお店は、日本人観光客も多く訪れており、
存分に楽しめる食べ放題メニューもあるため、オススメです。

代表メニュー：カンジャンケジャン/ヤンニョムケジャン
　　　　　　　カンジャンセウ（エビ）`,
          tip: `カンジャンケジャンと一緒に食べてほしいのが「ヤンニョムケジャン」
すこし辛めに味付けされており、カニの甘さと相性抜群です。
（私はヤンニョムのほうが好きです。）`,
        },
        {
          id: "3",
          page: "1",
          Place: "肉ハダ",
          Menu: "サムギョプサル",
          Price: "¥1500~2000",
          Level: "なし",
          Check: false,
          src: foodImg3,
          address: "25, Myeongnyun 4-ga, Jongno-gu, Seoul",
          station: "恵化駅 地下鉄4号線4番出口 徒歩約3分",
          number: "(82)70 8808 9299",
          map: map3,
          text: `日本でも多く知られている「サムギョプサル」
日本で食べるのも、もちろんおいしいですが、
こちらのお店は炭火焼のためより香ばしさを味わうことができます。
新しいお店なので、店内はサムギョプサル屋とは思えないくらい綺麗！
ただ韓国のお店あるあるの、
焼いてくれるサービスはないので（元々少し焼いて持ってきてくれます）注意！

代表メニュー：サムギョプサル
　　　　　　　肩ロース（首肉）
　　　　　　　テェンジャンチゲなど`,
          tip: `韓国に行ったら焼き肉食べて帰りたい！と、思う方も多いですが、実は韓国には日本のような焼き肉屋はありません。
韓国では、「サムギョプサル」「カルビ」「ホルモン」と、すべてお店が分かれていることが多いです。
観光地では日本観光客向けの焼き肉屋を多く目にしますが、あまりオススメしません。`,
        },
        {
          id: "4",
          page: "1",
          Place: "BBQチキン",
          Menu: "黄金オリーブキチン",
          Price: "¥1500~2000",
          Level: "なし",
          Check: false,
          src: foodImg4,
          address: "全国展開 チェーン店",
          station: "비비큐 치킨",
          number: "(82)1588 9282",
          map: map4,
          text: `韓国人にどんな民族？と聞くと、100%の確率で配達（デリバリー）民族と答えるほど、
デリバリーが盛んな韓国
そんなデリバリー大国の中でも最も代表的なのが「チキン」です。
韓国には様々な味のチキンがありますが、
私がオススメするのはフライドチキン（一番オーソドックス）です。
ここのチキンは、ほかのチェーン店と違いオリーブオイルで揚げており、とってもおいしいです。
BBQチキンは韓国では有名なチェーン店で、ふと寄りやすいのもポイント

代表メニュー：黄金オリーブチキン`,
          tip: `ほかにもたくさんのチキン屋さんがありますが、ブランドによってオススメメニューが変わります。
BHCチキン：フライド、プリンクル
キョチョンチキン：ハニーコンボ`,
        },
        {
          id: "5",
          page: "1",
          Place: "東大門猟奇トッポッキ",
          Menu: "トッポッキ",
          Price: "¥1000~2000",
          Level: "🔥~🔥🔥🔥🔥",
          Check: false,
          src: foodImg5,
          address: "全国展開 チェーン店 地図は本店",
          station: "동대문 엽끼떡볶이",
          number: "(82)2 2234 8592",
          map: map5,
          text: `韓国を代表する料理「トッポッキ」
その中でも絶大な人気を誇る東大門猟奇トッポッキ
優しい→初歩→普通→オリジナル→辛いの５段階で楽しめます。
辛いことを知らないで、オリジナルを頼んだ日には次の日再起不能。２口目も食べられないと思います。
辛ささえ気を付ければ、味はとってもおいしいです。

代表メニュー：トッポッキ
　　　　　　　おにぎり`,
          tip: `普通サイズは４人前～と、とても量が多いです。
1~2人で食べるのであれば、店舗限定で2人前トッポッキがあるので、そちらをオススメします`,
        },
        {
          id: "6",
          page: "1",
          Place: "テリョンジプ",
          Menu: "カルグクス/ボッサム/ユッケ",
          Price: "¥1000~3000",
          Level: "なし",
          Check: false,
          src: foodImg6,
          address: "163, Gwansu-dong, Jongno-gu, Seoul",
          station: "鐘路3街駅 地下鉄1号線15番出口 徒歩約5分",
          number: "(82)2 2265 5349",
          map: map6,
          text: `地元の方に愛されるカルググス屋さん
辛いものに飽きた！辛いの食べられない！という方にオススメの料理です。
（日本のうどんに近い？）
カルグクスのほかにもポッサムや、ユッケなどのお酒のつまみになるようなメニューもあるので、
現地のお年寄りに人気のお店です。

代表メニュー：カルグクス
　　　　　　　ポッサム
　　　　　　　ユッケ
　　　　　　　チヂミ`,
          tip: `日本語が通じないので、通訳機は必須です。
観光客があまりいない、ローカルなお店を楽しみたい方にオススメ！`,
        },
        {
          id: "7",
          page: "1",
          Place: "コヒャンジプ",
          Menu: "クッパ",
          Price: "¥~1000",
          Level: "なし",
          Check: false,
          src: foodImg7,
          address: "Cheongnyangni-dong 769-1, Dongdaemun-gu, Seoul",
          station: "清凉里駅 地下鉄1号線1番出口 徒歩約1分",
          number: "(82) 2 964 8844",
          map: map7,
          text: `朝飯、酔い覚ましにぴったりなメニュー
さっぱりとしたスープにスンデ＋レバーなどが入っており、とてもおいしいです。
お好みでセウジョッ（アミの塩辛）や、ダデギ（ニンニクや唐辛子、ネギを練ったもの）で
自分好みの味にして楽しみます。

代表メニュー：スンデ
　　　　　　　スンデクッパ`,
          tip: `日本語が通じないので、通訳機は必須です。
観光客があまりいない、ローカルなお店を楽しみたい方にオススメ！`,
        },
        {
          id: "8",
          page: "1",
          Place: "ジェイルホルモン本店",
          Menu: "ホルモン焼き",
          Price: "¥2000~3000",
          Level: "なし",
          Check: false,
          src: foodImg8,
          address: "131-1 Hongik-dong, Seongdong-gu, Seoul",
          station: "王十里駅 地下鉄2号線2番出口 徒歩約8分",
          number: "(82)2 2281 9792",
          map: map8,
          text: `日本のホルモンとは違います！！
韓国では日本と違い、腸の形のまま（丸いまま）食べることが多いのですが、
食べた瞬間の肉汁やホルモン独特の噛み応えは段違いでおいしいです。
焼き肉のたれではなく、醤油に青唐辛子で食べることが多いですが
さっぱりと食べられるのでとてもオススメです。

代表メニュー：ホルモン/ポックンパ`,
          tip: `王十里駅にはホルモン通りが存在するほど、ホルモン屋さんが並んでいます。
近くに2つの大学があるので、夕方は学生たちでにぎわっており、
現地の若者の雰囲気に混ざることができます。`,
        },
        {
          id: "9",
          page: "1",
          Place: "コンブル",
          Menu: "豚肉豆もやし炒め",
          Price: "¥1000~2000",
          Level: "🔥🔥🔥",
          Check: false,
          src: foodImg9,
          address: "345-2, Seogyo-dong, Mapo-gu, Seoul",
          station: "弘大駅 地下鉄2号線9番出口 徒歩約4分",
          number: "(82)2 322 3545",
          map: map9,
          text: `シンプルis the BESTな料理
材料は豆もやしと豚肉のみ！（好みでチュックミなど追加ができます。）
辛いソースと食べるコンブルは、豆もやしのシャキシャキと、豚肉が合わさってとてもおいしいです。

代表メニュー：コンブル（豚・牛選択可）
　　　　　　　ポックンパ
　　　　　　　サイドメニューなど`,
          tip: `コンブルのほかにもたくさんのメニューがあり、
韓国では珍しい1人前からの注文が可能です。友達と行って、好きなものを食べたれるのでオススメです。`,
        },
        {
          id: "10",
          page: "1",
          Place: "明洞餃子",
          Menu: "カルグクス/餃子",
          Price: "¥1000~2000",
          Level: "なし",
          Check: false,
          src: foodImg10,
          address: "25-2, Myeongdong 2-ga, Jung-gu, Seoul",
          station: "明洞駅 地下鉄4号線8番出口 徒歩約4分",
          number: "(82)2 776 5348",
          map: map10,
          text: `ミシュランに掲載されたお店
カルグクス（うどん）や餃子は日本でもなじみのある料理ですが、
ミシュランに掲載されるほど、評価が高いお店です。
餃子といっても、焼き餃子ではなく、水餃子なのでカルグクスとの相性はばっちりです。

代表メニュー：カルグクス
　　　　　　　餃子`,
          tip: `ミシュランともあり、時間帯によって胃は行列になることもあります。
こちらのお店はブレイクタイムがないので、少し時間帯をずらしていくことをオススメします。`,
        },
      ],
    },
    // カフェランキングデータ
    cafe: {
      title: "オシャレなカフェランキング",
      sub: "本場韓国おすすめカフェTOP10",
      styleColor: "styleColor2",
      bgColor: "bgColor2",
      items: [
        {
          id: "1",
          page: "2",
          Place: "onion",
          Menu: "ドリンク/パン/デザートetc",
          Price: "¥~1000",
          Level: "⭐⭐⭐⭐⭐",
          Check: false,
          src: cafeImg1,
        },
        {
          id: "2",
          page: "2",
          Place: "Mooni",
          Menu: "ドリンク/パン/パフェetc",
          Price: "¥~1500",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: cafeImg2,
        },
        {
          id: "3",
          page: "2",
          Place: "S.caf",
          Menu: "ドリンク(アルコール有)/デザートetc",
          Price: "¥~2000",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: cafeImg3,
        },
        {
          id: "4",
          page: "2",
          Place: "LONDON BAGEL MUSEUM",
          Menu: "ドリンク/ベーグル",
          Price: "¥1500~2000",
          Level: "⭐⭐⭐",
          Check: false,
          src: cafeImg4,
        },
        {
          id: "5",
          page: "2",
          Place: "Café Layered",
          Menu: "ドリンク/デザートetc",
          Price: "¥~1500",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: cafeImg5,
        },
        {
          id: "6",
          page: "2",
          Place: "清水堂",
          Menu: "ドリンク/ケーキ類",
          Price: "¥1000~2000",
          Level: "⭐⭐",
          Check: false,
          src: cafeImg6,
        },
        {
          id: "7",
          page: "2",
          Place: "デリム倉庫ギャラリー",
          Menu: "ドリンク/ケーキ類",
          Price: "¥~1000",
          Level: "⭐⭐",
          Check: false,
          src: cafeImg7,
        },
        {
          id: "8",
          page: "2",
          Place: "Tribe Cafe",
          Menu: "ドリンク/パンケーキ",
          Price: "¥1000~3000",
          Level: "⭐⭐",
          Check: false,
          src: cafeImg8,
        },
        {
          id: "9",
          page: "2",
          Place: "943 KING'S CROSS",
          Menu: "ドリンク/ハリーポッターデザート",
          Price: "¥1000~2000",
          Level: "⭐⭐⭐",
          Check: false,
          src: cafeImg9,
        },
        {
          id: "10",
          page: "2",
          Place: "StarBucks",
          Place2: "ソウルウェーブアートセンター店",
          Menu: "ドリンク/フード",
          Price: "¥~1000",
          Level: "⭐⭐",
          Check: false,
          src: cafeImg10,
        },
      ],
    },
    // コンビニカードデータ
    convenience: {
      title: "韓国コンビニ飯ランキング",
      sub: "韓国コンビニ（CU, GS25, セブンイレブン, emart24)TOP10",
      styleColor: "styleColor3",
      bgColor: "bgColor3",
      items: [
        {
          id: "1",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "ヨーグルト(トッピング)",
          Price: "₩2000",
          Level: "⭐⭐⭐⭐⭐",
          Check: false,
          src: conveniImg1,
        },
        {
          id: "2",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "フレーバー牛乳",
          Price: "₩1700",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: conveniImg2,
        },
        {
          id: "3",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "ソーセージ",
          Price: "₩2000~2100",
          Level: "⭐⭐⭐⭐⭐",
          Check: false,
          src: conveniImg3,
        },
        {
          id: "4",
          page: "3",
          Place: "GS25",
          Menu: "メッカルオムットッポギ",
          Price: "₩2900",
          Level: "⭐⭐⭐⭐⭐",
          Check: false,
          src: conveniImg4,
        },
        {
          id: "5",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "カップラーメン",
          Price: "₩950~3500",
          Level: "⭐⭐⭐⭐⭐",
          Check: false,
          src: conveniImg5,
        },
        {
          id: "6",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "キムチ",
          Price: "₩1000~1500",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: conveniImg6,
        },
        {
          id: "7",
          page: "3",
          Place: "コンビニブランド別",
          Menu: "パウチドリンク",
          Price: "₩1000~2500",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: conveniImg7,
        },
        {
          id: "8",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "お菓子",
          Price: "₩500~2500",
          Level: "⭐⭐⭐⭐",
          Check: false,
          src: conveniImg8,
        },
        {
          id: "9",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "キンパ",
          Price: "₩2000~4000",
          Level: "⭐⭐⭐",
          Check: false,
          src: conveniImg9,
        },
        {
          id: "10",
          page: "3",
          Place: "コンビニ全店舗",
          Menu: "おにぎり",
          Price: "₩1000~1900",
          Level: "⭐⭐",
          Check: false,
          src: conveniImg10,
        },
      ],
    },
  },
};
