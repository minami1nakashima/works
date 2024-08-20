<template>
  <v-app>
    <bar />
    <v-main min-height="1120">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import bar from "@/components/Appbar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    bar,
    Footer,
  }
}
</script>

<style>
.v-container {
  padding: 0 !important;
}

#main {
  margin-top: -40px;
  padding: 0;
}
</style>