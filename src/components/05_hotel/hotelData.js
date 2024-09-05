import img1 from "@/assets/Seoul/hotel/LotteCityHotel/lotte_m.jpg"
import lotteCity1 from "@/assets/Seoul/hotel/LotteCityHotel/lotte_m1.jpg"
import lotteCity2 from "@/assets/Seoul/hotel/LotteCityHotel/lotte_m2.jpg"
import lotteCity3 from "@/assets/Seoul/hotel/LotteCityHotel/lotte_m3.jpg"
import lotteCityMap from "@/assets/Seoul/hotel/LotteCityHotel/map.jpg"
import img2 from "@/assets/Seoul/hotel/HotelSkyPark/Hotel_Skypark.jpg"
import hotelskypark1 from "@/assets/Seoul/hotel/HotelSkyPark/Hotel_Skypark1.jpg"
import hotelskypark2 from "@/assets/Seoul/hotel/HotelSkyPark/Hotel_Skypark2.jpg"
import hotelskypark3 from "@/assets/Seoul/hotel/HotelSkyPark/Hotel_Skypark3.jpg"
import hotelskyparkMap from "@/assets/Seoul/hotel/HotelSkyPark/map.jpg"
import img3 from "@/assets/Seoul/hotel/RoyalHotelSeoul/Hotel_Royal.jpg"
import royalhotel1 from "@/assets/Seoul/hotel/RoyalHotelSeoul/Hotel_Royal1.jpg"
import royalhotel2 from "@/assets/Seoul/hotel/RoyalHotelSeoul/Hotel_Royal2.jpg"
import royalhotel3 from "@/assets/Seoul/hotel/RoyalHotelSeoul/Hotel_Royal3.jpg"
import royalhotelMap from "@/assets/Seoul/hotel/RoyalHotelSeoul/map.jpg"
import img4 from "@/assets/Seoul/hotel/SolariaHotel/Hotel_Soraria.jpg"
import solariahotel1 from "@/assets/Seoul/hotel/SolariaHotel/Hotel_Soraria1.jpg"
import solariahotel2 from "@/assets/Seoul/hotel/SolariaHotel/Hotel_Soraria2.jpg"
import solariahotel3 from "@/assets/Seoul/hotel/SolariaHotel/Hotel_Soraria3.jpg"
import solariahotelMap from "@/assets/Seoul/hotel/SolariaHotel/map.jpg"
import img5 from "@/assets/Seoul/hotel/HotelSkyParkKingstown/Hotel_King.jpg"
import Kingstown1 from "@/assets/Seoul/hotel/HotelSkyParkKingstown/Hotel_King1.jpg"
import Kingstown2 from "@/assets/Seoul/hotel/HotelSkyParkKingstown/Hotel_King2.jpg"
import Kingstown3 from "@/assets/Seoul/hotel/HotelSkyParkKingstown/Hotel_King3.jpg"
import KingstownMap from "@/assets/Seoul/hotel/HotelSkyParkKingstown/map.jpg"
import img6 from "@/assets/Seoul/hotel/TheSplaisir/Hotel_Splaisir.jpg"
import Splaisir1 from "@/assets/Seoul/hotel/TheSplaisir/Hotel_Splaisir1.jpg"
import Splaisir2 from "@/assets/Seoul/hotel/TheSplaisir/Hotel_Splaisir2.jpg"
import Splaisir3 from "@/assets/Seoul/hotel/TheSplaisir/Hotel_Splaisir3.jpg"
import SplaisirMap from "@/assets/Seoul/hotel/TheSplaisir/map.jpg"
import img7 from "@/assets/Seoul/hotel/HotelMigliore/Hotel_Migliore.jpg"
import Migliore1 from "@/assets/Seoul/hotel/HotelMigliore/Hotel_Migliore1.jpg"
import Migliore2 from "@/assets/Seoul/hotel/HotelMigliore/Hotel_Migliore2.jpg"
import Migliore3 from "@/assets/Seoul/hotel/HotelMigliore/Hotel_Migliore3.jpg"
import MiglioreMap from "@/assets/Seoul/hotel/HotelMigliore/map.jpg"
import img8 from "@/assets/Seoul/hotel/Hotel_Toyokoin2.jpg"
import img9 from "@/assets/Seoul/hotel/Hotel_Gracery.jpg"
import img10 from "@/assets/Seoul/hotel/Hotel_Sherton.jpg"
import img11 from "@/assets/Seoul/hotel/Hotel_Crown.jpg"
import img12 from "@/assets/Seoul/hotel/Hotel_Ena.jpg"
import img13 from "@/assets/Seoul/hotel/Hotel_Fourseason.jpg"
import img14 from "@/assets/Seoul/hotel/Hotel_Designer.jpg"
import img15 from "@/assets/Seoul/hotel/Hotel_Shillastay.jpg"
import img16 from "@/assets/Seoul/hotel/Hotel_Luxury.jpg"
import img17 from "@/assets/Seoul/hotel/Hotel_Ocloud.jpg"
import img18 from "@/assets/Seoul/hotel/Hotel_LYJ.jpg"
import img19 from "@/assets/Seoul/hotel/Hotel_Anteroom.jpg"
import img20 from "@/assets/Seoul/hotel/Hotel_Dormy.jpg"
import img21 from "@/assets/Seoul/hotel/Hotel_TheShilla.jpg"
import img22 from "@/assets/Seoul/hotel/Hotel_Signiel.jpg"
import img23 from "@/assets/Seoul/hotel/Hotel_Grandhyatt.jpg"
import img24 from "@/assets/Seoul/hotel/Hotel_Paradise.jpg"

export default {
    hotelArea: ["①明洞エリア", "②東大門エリア", "③ソウル駅・市庁駅エリア", "④鍾路・仁寺洞エリア", "⑤江南エリア"],
    tableName: [
        {
            table: '明洞エリア',
            text: '人気の観光地！初めて行く方におすすめ',
        },
        {
            table: '東大門エリア',
            text: 'ショッピングをしたい方におすすめ',
        },
        {
            table: 'ソウル駅・市庁駅エリア',
            text: 'アクセス抜群！ソウル以外も楽しみたい方'
        },
        {
            table: '鍾路・仁寺洞エリア',
            text: '韓国の伝統を感じたいかたおすすめ'
        },
        {
            table: '江南エリア',
            text: '美容・ショッピングを楽しみたい方おすすめ'
        },
        {
            table: '高級5つ星ホテル',
            text: 'ラグジュアリー旅行を楽しみたい方'
        },
    ],
    cardItem: [
        {
            component: '1',
            src: img1,
            src1: lotteCity1,
            src2: lotteCity2,
            src3: lotteCity3,
            src4: lotteCityMap,
            area: '明洞エリア',
            text: 'ロッテ シティ ホテル',
            hotelNameE: 'LOTTE City Hotel',
            level: '⭐⭐⭐',
            price: '16000',
            url: 'https://www.lottehotel.com/myeongdong-city/ja.html',
            p: `明洞、清渓川が徒歩圏内の好立地に位置するプレミアムビジネスホテル
仁川国際空港 地下鉄で約90分 / 金浦国際空港 地下鉄で約60分
と、空港からもアクセスが良いです。
大手企業のチェーンホテルらしく、サービスもよく、日本語も通じるので、初めての旅行におすすめです。`,
            address: 'Lotte City Hotel Myeongdong, 362 Samildae-ro, Jung-gu, Seoul',
            station: '乙支路3街駅 地下鉄2号線3番出口 徒歩約3分',
            number: '(82) 26 112 1000',
            time: `15:00~/
~12:00`,
            service: ["mdi-washing-machine", "mdi-coffee", "mdi-silverware-fork-knife", "mdi-translate-variant", "mdi-wifi", "mdi-printer-wireless", "mdi-weight-lifter", "mdi-elevator-passenger"],
            amenity: [" mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil"]
        },
        {
            component: '2',
            src: img2,
            src1: hotelskypark1,
            src2: hotelskypark2,
            src3: hotelskypark3,
            src4: hotelskyparkMap,
            area: '明洞エリア',
            text: 'ホテル スカイパーク 明洞Ⅲ',
            hotelNameE: 'Hotel Sky Park Myeongdong',
            level: '⭐⭐',
            price: '8000',
            url: 'https://www.skyparkhotel.com/html/accommdation/accom3_tab1_01.asp',
            p: `明洞駅９番出口の目の前に位置する好立地＋コスパ最強ホテル
空港バスの停留所がホテル前にあるので、アクセスも良いです。
明洞は、観光するなら欠かせないスポットなので、初めての韓国にはもってこいなホテルです。`,
            address: 'Hotel Sky ParkⅢ 139, Toegye-ro, Jung-gu, Seoul',
            station: '明洞駅 地下鉄4号線9番出口 徒歩約1分',
            number: '(82) 2 756 9700',
            time: `15:00~/
~12:00`,
            service: ["mdi-washing-machine", "mdi-translate-variant", "mdi-wifi", "mdi-elevator-passenger"],
            amenity: [" mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil","mdi mdi-kettle"]
                                },
        {
            component: '3',
            src: img3,
            src1: royalhotel1,
            src2: royalhotel2,
            src3: royalhotel3,
            src4: royalhotelMap,
            area: '明洞エリア',
            text: 'ロイヤル ホテル ソウル',
            hotelNameE: 'Royal Hotel Seoul',
            level: '⭐⭐⭐⭐',
            price: '32000',
            url: 'https://royal.co.kr/jp/index.php',
            p: `明洞のメインストリートから徒歩３分とアクセスはもちろん
都心の中のオアシス、という別名を得るように、繁華街にありながらホテル内は落ち着いた雰囲気でほっとできる環境です。
客室は二重窓を使用し、防音対策済。21階のレストランからは、ソウルの街の眺望が広がっています。`,
            address: 'Royal Hotel Seoul 61, Myeongdong-gil, Jung-gu, Seoul',
            station: `明洞駅 地下鉄4号線8番出口 徒歩約5分
/乙支路入口駅 地下鉄2号線5番出口 徒歩約7分`,
            number: '(82) 2 756 1112',
            time: `14:30~/
~11:00`,
            service: ["mdi-washing-machine", "mdi-party-popper","mdi-google-classroom","mdi-spa", "mdi-translate-variant", "mdi-wifi", "mdi-elevator-passenger","mdi-silverware-fork-knife", "mdi-weight-lifter","mdi-glass-cocktail"],
            amenity: [" mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil","mdi mdi-kettle"]

        },
        {
            component: '4',
            src: img4,
            src1: solariahotel1,
            src2: solariahotel2,
            src3: solariahotel3,
            src4: solariahotelMap,
            area: '明洞エリア',
            text: 'ソラリア 西鉄ホテル ソウル 明洞',
            hotelNameE: 'Solaria Nittetsu Hotel Seoul',
            level: '⭐⭐⭐⭐',
            price: '28000',
            url: 'https://jp.solariaseoul.com/',
            p: `ゲストを出迎える21階ロビーは明洞の街並みが一望でき、吹抜けのきらびやかなペンダントライトがより開放的で非日常感を演出しています。
客室はやわらかみのあるオフホワイトとあたたかみが感じられるブラウンをベースに、リゾート感のあるアクセントカラーを取り入れた居心地のよい空間。
全室にバスタブと洗浄機付きトイレを設置されているのも日系ホテルならでは`,
            address: 'Solaria Nittetsu Hotel 27, Myeong-dong 8-gil, Jung-gu, Seoul',
            station: `明洞駅 地下鉄4号線8番出口 徒歩約4分`,
            number: '(82) 2 773 1557',
            time: `15:00~/
~12:00`,
            service: ["mdi-washing-machine","mdi-google-classroom", "mdi-translate-variant", "mdi-wifi", "mdi-elevator-passenger","mdi-silverware-fork-knife"],
            amenity: [" mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil","mdi mdi-kettle","mdi-iron","mdi-coffee-maker"]
        },
        {
            component: '5',
            src: img5,
            src1: Kingstown1,
            src2: Kingstown2,
            src3: Kingstown3,
            src4: KingstownMap,
            area: '東大門エリア',
            text: 'ホテルスカイパークキングスタウン東大門',
            hotelNameE: 'Hotel SkyPark Kingstown',
            level: '⭐⭐⭐',
            price: '9500',
            url: 'https://www.skyparkhotel.com/html/main.asp',
            p: `深夜営業をしているファッションビルが密集しているエリアにある、アウトレットビルの上層階に位置しています。
広蔵市場(クァンジャンシジャン)や激安コスメショップ巡り、ナイトショッピングなど、時間を気にせず１日中ショッピング三昧を可能にしてくれます。
地下鉄２、４、５号線乗換駅である東大門歴史文化公園駅に隣接しているので、ソウルの有名な観光スポットへも簡単に移動できるのも嬉しい点。`,
            address: 'Hotel Skypark Kingstown Dongdaemun 20, Jangchungdan-ro 13-gil, Jung-gu, Seoul',
            station: `東大門駅 地下鉄4号線8番出口 徒歩約7分`,
            number: '(82) 26 952 8991',
            time: `15:00~/
~12:00`,
            service: ["mdi-washing-machine", "mdi-party-popper","mdi-google-classroom", "mdi-translate-variant", "mdi-wifi", "mdi-elevator-passenger","mdi-silverware-fork-knife", "mdi-weight-lifter"],
            amenity: [" mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil","mdi mdi-kettle", "mdi-rice", "mdi-toaster"]
        },
        {
            component: '6',
            src: img6,
            src1: Splaisir1,
            src2: Splaisir2,
            src3: Splaisir3,
            src4: SplaisirMap,
            area: '東大門エリア',
            text: '相鉄ホテルズ ザ・スプラジール ソウル 東大門',
            hotelNameE: 'Sotetu Hotels The Splaisir Seoul Dongdaemun',
            level: '⭐⭐⭐',
            price: '25000',
            url: 'https://sotetsu-hotels.com/splaisir/dongdaemun/',
            p: `東大門ショッピングタウンの中心部に位置し、地下鉄2、4、5号線東大門歴史文化公園駅へも徒歩1分の絶好のロケーション。
ソウルの主要観光地や名所へのアクセスも抜群で、仁川国際空港へはホテルの前から出る空港リムジンバスで約80分と観光の拠点に最適です。
ホテルには24時間営業のフィットネスセンター、ビジネスセンターがあり、モダンな客室は機能的です。
長期滞在の方にも快適にお過ごしいただけるように、地下１階にコインランドリーや電子レンジが備わっています。`,
            address: 'Sotetu Hotels The Splaisir Seoul Dongdaemun 226 Jangchungdan-ro,Jung-gu, Seoul',
            station: `東大門歴史文化公園駅 地下鉄4号線4番出口 徒歩約1分`,
            number: '(82) 22 198 1212',
            time: `15:00~/
~12:00`,
            service: ["mdi-washing-machine", "mdi-party-popper","mdi-google-classroom", "mdi-translate-variant", "mdi-wifi", "mdi-elevator-passenger","mdi-silverware-fork-knife", "mdi-weight-lifter"],
            amenity: [" mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil","mdi mdi-kettle", "mdi-iron"]
        },
        {
            component: '7',
            src: img7,
            src1: Migliore1,
            src2: Migliore2,
            src3: Migliore3,
            src4: MiglioreMap,
            area: '東大門エリア',
            text: 'ホテル ミリオレ ソウル',
            hotelNameE: 'Hotel Migliore Seoul',
            level: '⭐⭐⭐',
            price: '6000',
            url: 'https://themigliore.com/',
            p: `東大門ファッションタウン真ん中のミリオレショッピングセンター19~20階に位置しているホテルです。
仁川国際空港から約1時間、金浦空港から約30分、1,2,4,5号線地下鉄駅から約3分のところに位置し、アクセス抜群。
また、深夜まで営業している、Migliore、DOOTA、Hello apMなど約20ヵ所の大型ショッピングモールに囲まれ、
東大門デザインプラザ(DDP)や淸溪川、東大門、伝統市場など様々な観光、文化、歴史遺跡地に徒歩でアクセスできます。`,
            address: 'Hotel Migliore Seoul 14F 263, Jangchungdan-ro, Jung-gu, Seou',
            station: `東大門駅 地下鉄4号線8番出口 徒歩約7分/東大門歴史文化公園駅 地下鉄2号線14番出口 徒歩約7分/`,
            number: '(82) 23 393 6500',
            time: `15:00~/
~11:00`,
            service: ["mdi-washing-machine", "mdi-google-classroom", "mdi-translate-variant", "mdi-wifi", "mdi-elevator-passenger",],
            amenity: ["mdi-television", "mdi-shower", "mdi-phone", " mdi-hair-dryer", "mdi-air-purifier", "mdi-safe", "mdi-fridge-industrial", "mdi-heating-coil","mdi mdi-kettle",]
        },
        {
            component: '8',
            src: img8,
            area: '東大門エリア',
            text: '東横イン ソウル 東大門2',
        },
        {
            component: '9',
            src: img9,
            area: 'ソウル駅・市庁駅エリア',
            text: 'ホテル グレイスリー ソウル',
        },
        {
            component: '10',
            src: img10,
            area: 'ソウル駅・市庁駅エリア',
            text: 'フォーポインツ by シェラトン朝鮮',
        },
        {
            component: '11',
            src: img11,
            area: 'ソウル駅・市庁駅エリア',
            text: 'クラウンパーク ホテル',
        },
        {
            component: '12',
            src: img12,
            area: 'ソウル駅・市庁駅エリア',
            text: 'エナ スイート ホテル 南大門',
        },
        {
            component: '13',
            src: img13,
            area: '鍾路・仁寺洞エリア',
            text: 'フォーシーズンズ ホテル ソウル',
        },
        {
            component: '14',
            src: img14,
            area: '鍾路・仁寺洞エリア',
            text: 'ホテル ザ・デザイナーズ 鍾路',
        },
        {
            component: '15',
            src: img15,
            area: '鍾路・仁寺洞エリア',
            text: 'シーラ ステイ 光化門',
        },
        {
            component: '16',
            src: img16,
            area: '鍾路・仁寺洞エリア',
            text: 'Luxury hanok with private bathtub',
        },
        {
            component: '17',
            src: img17,
            area: '江南エリア',
            text: 'オークラウド ホテル 江南',
        },
        {
            component: '18',
            src: img18,
            area: '江南エリア',
            text: 'ホテル ザ・デザイン LYJ 江南プレミア',
        },
        {
            component: '19',
            src: img19,
            area: '江南エリア',
            text: 'アンテルーム ソウル',
        },
        {
            component: '20',
            src: img20,
            area: '江南エリア',
            text: 'ドーミーイン ソウル 江南',
        },
        {
            component: '21',
            src: img21,
            area: '高級5つ星ホテル',
            text: 'ソウル新羅ホテル',
        },
        {
            component: '22',
            src: img22,
            area: '高級5つ星ホテル',
            text: 'シグニエル ソウル',
        },
        {
            component: '23',
            src: img23,
            area: '高級5つ星ホテル',
            text: 'グランドハイアット ソウル',
        },
        {
            component: '24',
            src: img24,
            area: '高級5つ星ホテル',
            text: 'パラダイスシティ',
        },
    ],
}