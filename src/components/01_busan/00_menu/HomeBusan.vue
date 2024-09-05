    <template>
        <v-row :class="SpCheck() ? 'mx-1' : 'mx-10'">
            <HomeComp :carouselImg="homeDataBusan.items" :carouselText="homeDataBusan.slides"></HomeComp>
            <CardTopic />
            <NewsComp />
        </v-row>
    </template>

<script>
import HomeComp from '@/components/90_comp/HomeComp.vue';
import CardTopic from '@/components/90_comp/CardTopic.vue';
import homeDataBusan from '../01_home/homeDataBusan';
import NewsComp from '@/components/90_comp/NewsComp.vue';

export default {
    name: 'HomeBusan',
    component: {
        HomeComp,
        CardTopic,
        NewsComp
    },
    data() {
        return {
            homeDataBusan,
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