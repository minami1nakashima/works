    <template>
        <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
            <HomeComp :carouselImg="homeDataGangneung.items" :carouselText="homeDataGangneung.slides"></HomeComp>
            <CardTopic />
            <NewsComp />
        </v-row>
    </template>

<script>
import HomeComp from '@/components/90_comp/HomeComp.vue';
import CardTopic from '@/components/90_comp/CardTopic.vue';
import NewsComp from '@/components/90_comp/NewsComp.vue';
import homeDataGangneung from '../01_home/homeDataGangneung';


export default {
    name: 'HomeBusan',
    component: {
        HomeComp,
        CardTopic,
        NewsComp
    },
    data() {
        return {
            homeDataGangneung,
        }
    },
    methods: {
        // SP画面区別処理
        SpCheck() {
            return this.$vuetify.display.smAndDown;
        },
    }
}
</script>