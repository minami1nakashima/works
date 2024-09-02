<template>
    <v-app-bar id="app" height="60" flat>
        <v-container class="mx-auto d-flex align-center justify-center">
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
            <v-toolbar-title class="ml-2" :class="SpCheck() ? 'text-subtitle-1' : 'text-h6'">Go To
                KOREA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon :size="SpCheck() ? 'small' : 'medium'">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon :size="SpCheck() ? 'small' : 'medium'">mdi-dots-vertical</v-icon>
            </v-btn>
        </v-container>
    </v-app-bar>
    <v-divider></v-divider>
</template>
<script>
export default {
    name: "bar",
    methods: {
        onSeoul() {
            this.$router.push('/seoul')
        },
        onBusan() {
            this.$router.push('/busan')
        },
        onGangneung() {
            this.$router.push('/gangneung')
        },
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
