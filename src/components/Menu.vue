<template>
    <!-- 背景色 -->
    <v-tabs v-model="tab" density="compact" bg-color="light-blue-lighten-5" color="#40C4FF" grow>
        <div width="1200" class="mx-auto">
            <v-tab v-for="item in $t('menuItem')" :key="item" class="font-weight-black comfortable"
                :class="SpCheck() ? 'text-caption size' : 'text-subtitle-2'">
                {{ item }}
            </v-tab>
        </div>
    </v-tabs>
    <!-- 画面内容表示 -->
    <v-container>
        <v-divider class="mt-7 mb-5 mx-auto" length="95%"></v-divider>
        <component :is="getComponent(tab)"></component>
    </v-container>
</template>

<script>
import Home from "@/components/menu/Home.vue";
import Spots from "@/components/menu/Spots.vue";
import Gourmet from "@/components/menu/Gourmet.vue";
import Traffic from "@/components/menu/Traffic.vue";
import Hotel from "@/components/menu/Hotel.vue";
import Airplane from "@/components/menu/Airplane.vue";
import Manners from "@/components/menu/Manners.vue";
import Season from "@/components/menu/Season.vue";

export default {
    components: {
        Home,
        Spots,
        Gourmet,
        Traffic,
        Hotel,
        Airplane,
        Manners,
        Season,
    },
    data() {
        return {
            tab: null,
        };
    },
    mounted() {
        console.log("翻訳メニュー", this.$i18n.messages.ja.menuItem); // 追加
    },
    methods: {
        // 画面遷移処理
        getComponent(item) {
            switch (item) {
                case 'ホーム':
                    return 'Home';
                case 'スポット':
                    return 'Spots';
                case 'グルメ':
                    return 'Gourmet';
                case '交通':
                    return 'Traffic';
                case 'ホテル':
                    return 'Hotel';
                case '飛行機':
                    return 'Airplane';
                case 'マナー':
                    return 'Manners';
                case 'ワード':
                    return 'Language';
                case '季節':
                    return 'Season';
                default:
                    return 'Home';
            }
        },
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        }
    },
};
</script>

<style>
#tb_menu:hover {
    color: #00a0ea;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.size {
    min-width: auto !important;
}
</style>