// i18n.js
import { createI18n } from 'vue-i18n';
// import ja from '@/local/ja.json';
// import ko from '@/local/ko.json';

const messages = {
  ko: {
    menuItem: ["홈", "핫플", "맛집","교통","호텔","매너","단어","계절"]
  },
  ja: {
     menuItem: ["ホーム", "スポット", "グルメ","交通","ホテル","マナー","ワード","季節"]
  }
};

const i18n = createI18n({
  locale: 'ja', // デフォルトのロケール
  messages,
});

export default i18n;
