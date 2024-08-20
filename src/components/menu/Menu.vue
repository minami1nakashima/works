<template>
    <v-tabs v-model="tab" density="compact" bg-color="light-blue-lighten-5" color="#40C4FF" grow>
        <div width="1200" class="mx-auto">
            <v-tab v-for="item in indexes" :key="item" :text="item" :value="item" boder="xl"
                class="text-subtitle-2 font-weight-black comfortable">
            </v-tab>
        </div>
    </v-tabs>
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
            tab: 'ホーム',
            indexes: [
                'ホーム', 'スポット', 'グルメ', '交通', 'ホテル', '飛行機', 'マナー', 'ワード', '季節',
            ],
        };
    },
    methods: {
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
    },
};
</script>

<style>
#tb_menu:hover {
    color: #00a0ea;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>