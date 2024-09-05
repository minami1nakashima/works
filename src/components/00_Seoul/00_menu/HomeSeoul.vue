    <template>
        <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
            <HomeComp :carouselImg="homeDataSeoul.items" :carouselText="homeDataSeoul.slides"></HomeComp>
            <CardTopic />
            <NewsComp />
        </v-row>
    </template>

<script>
import HomeComp from '@/components/90_comp/HomeComp.vue';
import CardTopic from '@/components/90_comp/CardTopic.vue';
import NewsComp from '@/components/90_comp/NewsComp.vue';
import homeDataSeoul from '../01_home/homeDataSeoul';

export default {
    name: 'HomeSeoul',
    component: {
        HomeComp,
        CardTopic,
        NewsComp
    },
    data() {
        return {
            homeDataSeoul,
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