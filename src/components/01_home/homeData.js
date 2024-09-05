import img1 from "@/assets/img/home/gwanghwamun.jpg"
import img2 from "@/assets/img/home/nseoultower.jpg"
import img3 from "@/assets/img/home/bukchon_1.jpg"
import img4 from "@/assets/img/home/Myeongdong.jpg"
import img5 from "@/assets/img/home/cheonggyecheon.jpg"
import imgcard1 from "@/assets/img/home/yoptook.jpg"
import imgcard2 from "@/assets/img/home/ramen.jpg"
import imgcard3 from "@/assets/img/home/kochujang.jpg"

export default {     
    // カルーセル写真＋説明  
    items: [
        {
            src: img1,
            text: '朝鮮時代のシンボル「景福宮」の門',
         },
        {
             src: img2,
             text: '夜の眺望は絶景「Nソウルタワー」',
        },
        {
            src: img3,
            text: '時代劇のセットのような雰囲気',
         },
         {
            src: img4,
            text: '夕方には様々な屋台がずら～り',
        },
        {
             src: img5,
             text: '都心の中の避暑地：暑い夏には川で涼もう',
         },
    ],
     // カルーセルカードタイトル＋説明
    slides: [
         {
            color: 'light-blue-lighten-5',
            slide: '光化門',
            explain: `\\ 景福宮の城門の遺構 /

周辺には歴史的な建造物や
銅像、水路など！
大都市に囲まれ
まるでタイムスリップした気分に
夜にはライトアップされ
幻想的です。`,
         },
         {
            color: 'deep-orange-lighten-5',
            slide: '南山タワー',
            explain: `\\ ソウルのシンボル /

南山の頂上にそびえ立つ
Nソウルタワー
南山タワーといえばの
「愛の南京錠」や、
眺めのよい
カフェやレストランなど！`,
        },
        {
            color: 'blue-grey-lighten-5',
            slide: '北村韓屋村',
            explain: `\\ 韓屋が密集するエリア/

朝鮮時代から残る韓国の伝統家屋
「韓屋」
周辺には宮殿「景福宮」や
韓服のレンタル屋さんも！
実際に住まわれていて、
閑静な住宅地なので
ゆっくりと観光が楽しめます。`,
       },
       {
            color: 'light-green-lighten-5',
            slide: '明洞',
            explain: `\\ 定番観光スポット明洞 /

ファッション・コスメ・エステなど
何でも揃う街です。
ほとんどのお店で
日本語が通じることから、
買い物のしやすさも抜群！
夕方には屋台が並び
韓国グルメ食べ歩きも楽しめます。`,
        },
        {
            color: 'brown-lighten-5',
            slide: '清渓川',
            explain: `\\ 憩いの人口河川 /
                    
市内中心部を流れているので
アクセス抜群！
「散歩道」とも呼ばれ、
散歩しながら休憩がてら
川沿いのオシャレなカフェでで
過ごすことができます。`,
        },
    ],
    //カードニュース
    cards: [
        {
            component:"1",
            src: imgcard1,
            theme: '激辛好きおすすめ料理',
            sub: '韓国で食べられる激辛料理を紹介',
        },
        {
            component:"2",
            src: imgcard2,
            theme: '韓国ラーメン特集',
            sub: '厳選おすすめ即席ラーメン',
        },
        {
            component:"3",
            src: imgcard3,
            theme: 'おすすめ韓国調味料',
            sub: '日本人でも食べられる韓国調味料'
        }
    ]
}
