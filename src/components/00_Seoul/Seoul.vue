<template>
    <!-- 背景色 -->
    <v-tabs v-model="tab" density="compact" bg-color="light-blue-lighten-5" color="#40C4FF" grow>
        <div width="1200" class="mx-auto">
            <v-tab v-for="menuItem in tabs" :key="menuItem" :value="menuItem" class="font-weight-black comfortable"
                :class="SpCheck() ? 'text-caption size' : 'text-subtitle-2'">
                {{ $t(menuItem) }}
            </v-tab>
        </div>
    </v-tabs>

    <!-- 画面内容表示 -->
    <v-container>
        <v-divider class="mt-7 mb-5 mx-auto" length="95%"></v-divider>
        <component :is="tab + 'Seoul'"></component>
    </v-container>
</template>

<script>
import HomeSeoul from "@/components/00_Seoul/00_menu/HomeSeoul.vue";
import SpotsSeoul from "@/components/00_Seoul/00_menu/SpotsSeoul.vue";
import GourmetSeoul from "@/components/00_Seoul/00_menu/GourmetSeoul.vue";
import TrafficSeoul from "@/components/00_Seoul/00_menu/TrafficSeoul.vue";
import HotelSeoul from "@/components/00_Seoul/00_menu/HotelSeoul.vue";
import AirplaneSeoul from "@/components/00_Seoul/00_menu/AirplaneSeoul.vue";
import MannersSeoul from "@/components/00_Seoul/00_menu/MannersSeoul.vue";
import SeasonSeoul from "@/components/00_Seoul/00_menu/SeasonSeoul.vue";

export default {
    components: {
        HomeSeoul,
        SpotsSeoul,
        GourmetSeoul,
        TrafficSeoul,
        HotelSeoul,
        AirplaneSeoul,
        MannersSeoul,
        SeasonSeoul,
    },
    data() {
        return {
            tab: 'Home',
            tabs: ['Home', 'Spots', 'Gourmet', 'Traffic', 'Hotel', 'Airplane', 'Manner', 'Word', 'Season']
        }
    },
    methods: {
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
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