<template>
    <v-app id="main">
        <bar />

        <v-main flat>

        </v-main>
    </v-app>
</template>

<script>
import bar from "@/components/Appbar.vue"

export default {
    components: {
        bar,
    }
}
</script>

<style>
@media (min-width: 2160px) {
    #main {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>