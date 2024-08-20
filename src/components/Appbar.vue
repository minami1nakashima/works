<template>
    <v-app-bar id="app" height="60" flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-btn icon rounded="0">
                <v-icon>mdi-menu</v-icon>
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
            <v-toolbar-title class="text-h6 ml-2">Go To KOREA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details single-line
                max-width="200" density="compact" class="mr-4">
            </v-text-field>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
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
        }
    }
}
</script>

<style>
#app {
    border-bottom: 1px solid #EAEDEF;
}
</style>
