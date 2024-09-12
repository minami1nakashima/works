<template></template>
<script>
  import axios from "axios";

  export default {
    methods: {
      // 翻訳処理
      async submit() {
        try {
          const response = await axios.post(
            "https://api-free.deepl.com/v2/translate",
            null,
            {
              params: {
                auth_key: this.authKey,
                text: this.korean,
                target_lang: "KO",
              },
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            },
          );
          this.translation = response.data.translations[0].text;
        } catch (error) {
          console.error("翻訳エラー:", error);
        }
      },
    },
  };
</script>
