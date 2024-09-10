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
