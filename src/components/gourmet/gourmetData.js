// フードカードイメージ
import foodImg1 from "@/assets/img/gourmet/yukhoe.jpg"
import foodImg2 from "@/assets/img/gourmet/kani.jpg"
import foodImg3 from "@/assets/img/gourmet/gogi.jpg"
import foodImg4 from "@/assets/img/gourmet/chiken.jpg"
import foodImg5 from "@/assets/img/gourmet/yoptook.jpg"
import foodImg6 from "@/assets/img/gourmet/kalguksu.jpg"
import foodImg7 from "@/assets/img/gourmet/sundaeguk.jpg"
import foodImg8 from "@/assets/img/gourmet/intestines.jpg"
import foodImg9 from "@/assets/img/gourmet/gongbul.jpg"
import foodImg10 from "@/assets/img/gourmet/gyoza.jpg"

// カフェカードイメージ
import cafeImg1 from "@/assets/img/gourmet/onion.jpg"
import cafeImg2 from "@/assets/img/gourmet/ribon.jpg"
import cafeImg3 from "@/assets/img/gourmet/Scaf.jpg"
import cafeImg4 from "@/assets/img/gourmet/bagel.jpg"
import cafeImg5 from "@/assets/img/gourmet/layered.jpg"
import cafeImg6 from "@/assets/img/gourmet/chongsoodang.jpg"
import cafeImg7 from "@/assets/img/gourmet/daerim.jpg"
import cafeImg8 from "@/assets/img/gourmet/tribe.jpg"
import cafeImg9 from "@/assets/img/gourmet/harry.jpg"
import cafeImg10 from "@/assets/img/gourmet/starbucks.jpg"

// コンビニカードイメージ
import conveniImg1 from "@/assets/img/gourmet/viyott.jpg"
import conveniImg2 from "@/assets/img/gourmet/milk.jpg"
import conveniImg3 from "@/assets/img/gourmet/sausage.jpg"
import conveniImg4 from "@/assets/img/gourmet/maepkal.jpg"
import conveniImg5 from "@/assets/img/gourmet/ramen.jpg"
import conveniImg6 from "@/assets/img/gourmet/kimti.jpg"
import conveniImg7 from "@/assets/img/gourmet/pauti.jpg"
import conveniImg8 from "@/assets/img/gourmet/snack.jpg"
import conveniImg9 from "@/assets/img/gourmet/kimpa.jpg"
import conveniImg10 from "@/assets/img/gourmet/onigiri.jpg"

export default {
    // タブタイトル
     Category: [
                {
                    id: '1',
                    name: 'ご飯🍽️',
                    css: 'id1',
                },
                {
                    id: '2',
                    name: 'カフェ☕',
                    css: 'id2',
                },
                {
                    id: '3',
                    name: 'コンビニ🍙',
                    css: 'id3',
                },
            ],
                theme: {
                // フードランキングデータ
                food:
                {
                    title: 'おすすめご飯ランキング',
                    sub: '独断と偏見が詰まった韓国のうまい店TOP10',
                    styleColor: 'styleColor1',
                    bgColor: 'bgColor1',
                    items: [
                        {
                            id: '1',
                            Place: 'クァンジャン市場',
                            Menu: 'ユッケ/イイダコ/食べ歩き',
                            Price: '¥3000~4000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg1,
                        },
                        {
                            id: '1',
                            Place: 'スンミの家幸せケジャン',
                            Menu: 'カンジャンケジャン',
                            Price: '¥3000~4000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg2,
                        },
                        {
                            id: '1',
                            Place: '肉ハダ',
                            Menu: 'サムギョプサル',
                            Price: '¥1500~2000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg3,
                        },
                        {
                            id: '1',
                            Place: 'BBQチキン',
                            Menu: '黄金オリーブキチン',
                            Price: '¥1500~2000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg4,
                        },
                        {
                            id: '1',
                            Place: '東大門猟奇トッポッキ',
                            Menu: 'トッポッキ',
                            Price: '¥1000~2000',
                            Level: '🔥~🔥🔥🔥🔥',
                            Check: false,
                            src: foodImg5,
                        },
                        {
                            id: '1',
                            Place: 'テリョンジプ',
                            Menu: 'カルグクス/ボッサム/チヂミ/ユッケ',
                            Price: '¥1000~3000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg6,

                        },
                        {
                            id: '1',
                            Place: 'コヒャンジプ',
                            Menu: 'クッパ',
                            Price: '¥~1000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg7,
                        },
                        {
                            id: '1',
                            Place: 'ジェイルホルモン本店',
                            Menu: 'ホルモン焼き',
                            Price: '¥2000~3000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg8,
                        },
                        {
                            id: '1',
                            Place: 'コンブル',
                            Menu: '豚肉豆もやし炒め',
                            Price: '¥1000~2000',
                            Level: '🔥🔥🔥',
                            Check: false,
                            src: foodImg9,
                        },
                        {
                            id: '1',
                            Place: '明洞餃子',
                            Menu: 'カルグクス/餃子',
                            Price: '¥1000~2000',
                            Level: 'なし',
                            Check: false,
                            src: foodImg10,
                        },
                    ]
                },
                // カフェランキングデータ
                cafe: {
                    title: 'オシャレなカフェランキング',
                    sub: '本場韓国おすすめカフェTOP10',
                    styleColor: 'styleColor2',
                    bgColor: 'bgColor2',
                    items: [
                        {
                            id: '2',
                            Place: 'onion',
                            Menu: 'ドリンク/パン/デザートetc',
                            Price: '¥~1000',
                            Level: '⭐⭐⭐⭐⭐',
                            Check: false,
                            src: cafeImg1,
                        },
                        {
                            id: '2',
                            Place: 'Mooni',
                            Menu: 'ドリンク/パン/パフェetc',
                            Price: '¥~1500',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: cafeImg2,
                        },
                        {
                            id: '2',
                            Place: 'S.caf',
                            Menu: 'ドリンク(アルコール有)/デザートetc',
                            Price: '¥~2000',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: cafeImg3,
                        },
                        {
                            id: '2',
                            Place: 'LONDON BAGEL MUSEUM',
                            Menu: 'ドリンク/ベーグル',
                            Price: '¥1500~2000',
                            Level: '⭐⭐⭐',
                            Check: false,
                            src: cafeImg4,
                        },
                        {
                            id: '2',
                            Place: 'Café Layered',
                            Menu: 'ドリンク/デザートetc',
                            Price: '¥~1500',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: cafeImg5,
                        },
                        {
                            id: '2',
                            Place: '清水堂',
                            Menu: 'ドリンク/ケーキ類',
                            Price: '¥1000~2000',
                            Level: '⭐⭐',
                            Check: false,
                            src: cafeImg6,

                        },
                        {
                            id: '2',
                            Place: 'デリム倉庫ギャラリー',
                            Menu: 'ドリンク/ケーキ類',
                            Price: '¥~1000',
                            Level: '⭐⭐',
                            Check: false,
                            src: cafeImg7,
                        },
                        {
                            id: '2',
                            Place: 'Tribe Cafe',
                            Menu: 'ドリンク/パンケーキ',
                            Price: '¥1000~3000',
                            Level: '⭐⭐',
                            Check: false,
                            src: cafeImg8,
                        },
                        {
                            id: '2',
                            Place: '943 KING\'S CROSS',
                            Menu: 'ドリンク/ハリーポッターデザート',
                            Price: '¥1000~2000',
                            Level: '⭐⭐⭐',
                            Check: false,
                            src: cafeImg9,
                        },
                        {
                            id: '2',
                            Place: 'StarBucks',
                            Place2: 'ソウルウェーブアートセンター店',
                            Menu: 'ドリンク/フード',
                            Price: '¥~1000',
                            Level: '⭐⭐',
                            Check: false,
                            src: cafeImg10,
                        },
                    ],
                },
                // コンビニカードデータ
                convenience: {
                    title: '韓国コンビニ飯ランキング',
                    sub: '韓国コンビニ（CU, GS25, セブンイレブン, emart24)TOP10',
                    styleColor: 'styleColor3',
                    bgColor: 'bgColor3',
                    items: [
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'ヨーグルト(トッピング)',
                            Price: '₩2000',
                            Level: '⭐⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg1,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'フレーバー牛乳',
                            Price: '₩1700',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg2,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'ソーセージ',
                            Price: '₩2000~2100',
                            Level: '⭐⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg3,
                        },
                        {
                            id: '3',
                            Place: 'GS25',
                            Menu: 'メッカルオムットッポギ',
                            Price: '₩2900',
                            Level: '⭐⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg4,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'カップラーメン',
                            Price: '₩950~3500',
                            Level: '⭐⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg5,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'キムチ',
                            Price: '₩1000~1500',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg6,
                        },
                        {
                            id: '3',
                            Place: 'コンビニブランド別',
                            Menu: 'パウチドリンク',
                            Price: '₩1000~2500',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg7,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'お菓子',
                            Price: '₩500~2500',
                            Level: '⭐⭐⭐⭐',
                            Check: false,
                            src: conveniImg8,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'キンパ',
                            Price: '₩2000~4000',
                            Level: '⭐⭐⭐',
                            Check: false,
                            src: conveniImg9,
                        },
                        {
                            id: '3',
                            Place: 'コンビニ全店舗',
                            Menu: 'おにぎり',
                            Price: '₩1000~1900',
                            Level: '⭐⭐',
                            Check: false,
                            src: conveniImg10,
                        },
                    ],
                },
            },
        }
