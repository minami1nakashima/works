<template>
    <!-- 背景色 -->
    <v-tabs v-model="tab" density="compact" bg-color="deep-purple-lighten-5" color="deep-purple-darken-3" grow>
        <div width="1200" class="mx-auto">
            <v-tab v-for="menuItem in tabs" :key="menuItem" :value="menuItem" class="font-weight-black comfortable"
                :class="SpCheck() ? 'text-caption' : 'text-subtitle-2'">
                {{ $t(menuItem) }}
            </v-tab>
        </div>
    </v-tabs>

    <!-- 画面内容表示 -->
    <v-container>
        <v-divider class="mt-7 mb-5 mx-auto" length="95%"></v-divider>
        <component :is="tab + 'Gangneung'"></component>
    </v-container>
</template>

<script>
import HomeGangneung from './00_menu/HomeGangneung.vue';
// import Spots from "@/components/00_Seoul/00_menu/Spots.vue";
// import Gourmet from "@/components/00_Seoul/00_menu/Gourmet.vue";
// import Traffic from "@/components/00_Seoul/00_menu/Traffic.vue";
// import Hotel from "@/components/00_Seoul/00_menu/Hotel.vue";
// import Airplane from "@/components/00_Seoul/00_menu/Airplane.vue";
// import Manners from "@/components/00_Seoul/00_menu/Manners.vue";
// import Season from "@/components/00_Seoul/00_menu/Season.vue";

export default {
    components: {
        HomeGangneung,
        // Spots,
        // Gourmet,
        // Traffic,
        // Hotel,
        // Airplane,
        // Manners,
        // Season,
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