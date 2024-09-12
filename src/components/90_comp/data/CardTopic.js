import imgcard1 from "@/assets/NewsTopic/yoptook.jpg";
import imgcard2 from "@/assets/NewsTopic/ramen.jpg";
import imgcard3 from "@/assets/NewsTopic/kochujang.jpg";

import spicy1 from "@/assets/NewsTopic/twumse.jpg";
import spicy3 from "@/assets/NewsTopic/maepdang.jpg";
import spicy4 from "@/assets/NewsTopic/tapparu.jpg";

import ramen1 from "@/assets/NewsTopic/tyamuke.jpg";
import ramen2 from "@/assets/NewsTopic/bulduck.jpg";
import ramen3 from "@/assets/NewsTopic/jappaguri.jpg";
import ramen4 from "@/assets/NewsTopic/wandukkon.jpg";

import seasoning1 from "@/assets/NewsTopic/jang.jpg";
import seasoning2 from "@/assets/NewsTopic/ekjo.jpg";
import seasoning3 from "@/assets/NewsTopic/bulducksouce.jpg";
import seasoning4 from "@/assets/NewsTopic/capsaisin.jpg";

export const cardTopics = [
  {
    component: "1",
    src: imgcard1,
    icon: "🔥",
    titleKey: "titleSpicy",
    subKey: "subSpicy",
    rankTitle: "辛さレベル",
    text: `韓国の「辛い」は本当に辛い！韓国で辛いとうたっている商品は、日本の激辛より辛いことが多いです。(そもそも赤い食べ物も多い。)
日本の激辛では足りない。辛くない。と、いう方はぜひ韓国の辛い料理に挑戦してみてください。
辛さの段階も選べるお店が多いので、辛いのが苦手な方も一緒に楽しめます。`,
    color: "red",
    bgcolor: "bg-red-lighten-4",
    items: [
      {
        id: "1",
        name: "トゥムセラーメン / 틈새라면",
        src: spicy1,
        rank: "🔥🔥🔥🔥",
        text: `韓国でも辛いと有名のラーメン
(ほぼインスタントラーメン。インスタントラーメンでも販売しています。）
お店のラーメンとインスタントとの違いは、トッピングの有無です。
日本にも売っているので、ぜひ挑戦してみてください。結構辛めです。`,
      },
      {
        id: "2",
        name: "東大門猟奇トッポッキ / 동대문 엽끼떡볶기",
        src: imgcard1,
        rank: "🔥🔥🔥🔥🔥",
        text: `韓国で大人気のトッポッキ屋さん
優しい→初歩→普通→オリジナル→辛いの５段階で楽しめます。
（辛いの大好きですが、初歩味でも結構辛いです。）
辛いことを知らないで、オリジナルを頼んだ日には次の日再起不能。
２口目も食べられないと思います。
辛ささえ気を付ければ、味はとってもおいしいです。
自分好みのトッピングも追加できるので、自分だけのレシピを見つけるのも楽しいかも。`,
      },
      {
        id: "3",
        name: "メプタン / 맵당",
        src: spicy3,
        rank: "🔥🔥🔥🔥🔥",
        text: `辛いカルビ煮込み
骨付きカルビ、中国春雨、野菜。卵などを辛く煮た料理のお店
1段階から4(死)段階まで、0.5段階ずつ好みの辛さで注文ができます。
韓国には珍しい１人１人鍋を注文できるので、辛いのが苦手な人とも一緒に行けます。
数は多くないですが、いろんな個所にお店があるのでぜひ立ち寄ってみてください。`,
      },
      {
        id: "4",
        name: "タッパル(もみじ) / 닭발",
        src: spicy4,
        rank: "🔥🔥🔥",
        text: `鳥の足(豚足の鳥版)
見た目が少し気持ち悪いので、日本人は食わず嫌いの方が多いですが、
辛いのが好きな方、コラーゲンを取りたい方にはとってもおススメなメニューです。
1回食べたらはまります！！！
日本にも新大久保にある「ハンシンポチャ」(韓国で有名なタッパルがある居酒屋)の
日本支店があるので、ぜひお試しあれ`,
      },
    ],
  },
  {
    component: "2",
    src: imgcard2,
    icon: "🍜",
    titleKey: "titleRamen",
    subKey: "subRamen",
    rankTitle: "オススメ",
    text: `日本のインスタントラーメンも種類が豊富ですが、韓国のインスタントラーメンはもっと多いです！！
日本のラーメンと比べ、量が多いのもポイント
そんなたくさんあるラーメンの中からオススメを紹介したいと思います。`,
    color: "black",
    bgcolor: "bg-blue-lighten-5",
    items: [
      {
        id: "1",
        name: "チャンケラーメン / 참깨라면",
        src: ramen1,
        rank: "👍👍👍👍",
        text: `ゴマラーメン
全く辛くなく、卵とゴマの風味でとてもおいしいです。
韓国はごま油を使った料理が多いのですが、このラーメンもごま油の香りがします。
辛いの食べたくない＋さっぱりしたものを食べたいときにオススメです。`,
      },
      {
        id: "2",
        name: "ブルダックポックンミョン カルボ味/ 불닭볶음면 까르보",
        src: ramen2,
        rank: "👍👍👍",
        text: `ブルダックポックンミョン カルボ味
有名なブルダックシリーズのカルボ味です。
日本でもいろんなところで販売しているので、目にしたことがあるのではないでしょうか？
特にカルボ味がオススメです。`,
      },
      {
        id: "3",
        name: "ジャパグリ/ 짜파구리",
        src: ramen3,
        rank: "👍👍👍👍👍",
        text: `ジャパゲッティ(ジャージャー麺) × ノグリを混ぜたラーメン
映画「パラサイト」で登場した創作メニューで、映画のヒットとともに爆発的人気を誇り
「ジャパグリ」が誕生しました。
ジャージャー麺と、ピリ辛のノグリラーメンが合わさり、とてもおいしいです。`,
      },
      {
        id: "4",
        name: "ワントゥッコン/ 왕뚜껀",
        src: ramen4,
        rank: "👍👍👍",
        text: `韓国で昔から愛されている代表ラーメン
韓国で愛されているラーメンの一つである「ワントゥッコン」
ほかのラーメンと容器の形状が異なるので、目につきやすいです。
辛すぎず、様々な味を展開しているので、ぜひお試しください。`,
      },
    ],
  },
  {
    component: "3",
    src: imgcard3,
    icon: "🧂",
    titleKey: "titleCook",
    subKey: "subCook",
    rankTitle: "オススメ",
    text: `韓国料理は日本人でも親しみやすいといわれていますが、他国と比べても日本と味付けや、使う調味料が見ているを思います。
主に「醤油、砂糖、ごま油、コチュジャン」で味付けをしますが、どれも日本人が普段から使っている調味料です。
ここでは、そんな韓国では欠かせない調味料を紹介していきます。`,
    color: "orange",
    bgcolor: "bg-yellow-lighten-5",
    items: [
      {
        id: "1",
        name: "OOジャン / OO장 시리즈",
        src: seasoning1,
        rank: "👍👍👍👍👍",
        text: `醬シリーズ
コチュジャン：唐辛子
テンジャン：韓国味噌
サムジャン：コチュジャンとテンジャンが合わさったもの
コチュジャンはご存じの方も多いのでないでしょうか。一押しはサムジャンです。
サムギョプサルや焼き肉など、タレとして使うことが多いです。`,
      },
      {
        id: "2",
        name: "エキスシリーズ / 액젓",
        src: seasoning2,
        rank: "👍👍👍",
        text: `エキスシリーズ
イワシエキス、ツナエキス、いかなごエキス
主に、キムチを付けるときや、チゲ料理などに使われます。
濃縮エキスなので、とても味が濃いです。
この調味料を使うと、味が深くなるので、日本でも煮込み料理などに合いそうです。`,
      },
      {
        id: "3",
        name: "ブルダックソース / 불닭소스",
        src: seasoning3,
        rank: "👍👍👍👍",
        text: `ブルダックソース
大人気インスタントラーメン「ブルダック」のソースです。
お好きな麵にかけてもよし、ごはん＋卵＋ごま油＋ブルダックソースで混ぜてもおいしいです。
辛みが強いので、量は調節しながら使ってください。`,
      },
      {
        id: "4",
        name: "カプサイシンソース / 캡사이신소스",
        src: seasoning4,
        rank: "👍👍",
        text: `韓国のデスソース
一滴でもかなり辛いです！！！取扱注意！！
辛いのが好きで、何か物足りないときに数滴たらすと、とてもスパイシーになり、おいしいです。
日本のスーパーなどでは見かけないので、韓国行った際にぜひチェックしてみてください。`,
      },
    ],
  },
];
