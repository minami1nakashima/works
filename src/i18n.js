// i18n.js
import { createI18n } from 'vue-i18n';
import ja from '@/components/90_comp/local/ja.js';
import ko from '@/components/90_comp/local/ko.js';

const messages = {
  ko,  
  ja,
}

const i18n = createI18n({
  locale: 'ja', // デフォルトのロケール
  messages,
});

export default i18n;
