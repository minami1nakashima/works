<template>
    <v-app-bar id="app" height="60" flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <!-- 地域選択アイコン -->
            <v-btn icon rounded="0">
                <v-icon :size="SpCheck() ? 'small' : 'medium'">mdi-menu</v-icon>
                <v-menu activator="parent" icon="bar-nav-icon">
                    <v-list @click:select="clickItem">
                        <v-list-item value="1">
                            <v-list-item-title @click="onSeoul">Seoul</v-list-item-title>
                        </v-list-item>
                        <v-list-item value="2">
                            <v-list-item-title @click="onBusan">Busan</v-list-item-title>
                        </v-list-item>
                        <v-list-item value="3">
                            <v-list-item-title @click="onGangneung">Gangneung</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
            <!-- トップタイトル -->
            <v-toolbar-title class="ml-2" :class="SpCheck() ? 'text-subtitle-1' : 'text-h6'">Go To
                KOREA</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- ハートアイコン -->
            <v-btn icon>
                <v-icon :size="SpCheck() ? 'small' : 'medium'">mdi-heart</v-icon>
            </v-btn>
            <!-- 言語選択アイコン -->
            <v-btn icon>
                <v-icon :size="SpCheck() ? 'small' : 'medium'">mdi-dots-vertical</v-icon>
                <v-menu activator="parent" icon="bar-nav-icon">
                    <v-list @click:select="clickItem">
                        <v-list-item @click="changeLanguage('ja')">
                            <v-list-item-title>Japanese</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="changeLanguage('ko')">
                            <v-list-item-title>Korean</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </v-container>
    </v-app-bar>
    <v-divider></v-divider>
</template>
<script>
export default {
    name: "bar",
    methods: {
        // ソウル画面遷移
        onSeoul() {
            this.$router.push('/')
        },
        // 釜山画面遷移
        onBusan() {
            this.$router.push('/busan')
        },
        // カンヌン画面遷移
        onGangneung() {
            this.$router.push('/gangneung')
        },
        // 言語切り替え
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        },
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        }
    }
}
</script>

<style>
#app {
    border-bottom: 1px solid #EAEDEF;
}
</style>
