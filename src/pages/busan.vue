    <template>
        <v-app id="main">
            <bar />

            <v-main flat>
                <Menu />
            </v-main>
        </v-app>
    </template>

<script>
// import { useRouter } from 'vue-router';
// const router = useRouter();

import Menu from "@/components/menu/Menu.vue"
import bar from "@/components/Appbar.vue"

export default {

    components: {
        Menu,
        bar,
    }
}
</script>

<style>
@media (min-width: 1200px) {
    #main {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>

