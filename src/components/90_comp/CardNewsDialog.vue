<template>
  <div :class="topic.bgcolor" class="pa-5">
    <v-row>
      <v-col cols="12" class="text-h6 font-weight-black">
        {{ topic.icon }}{{ topic.title }}{{ topic.icon }}
      </v-col>
      <v-col cols="12">
        <p class="my-6 text-body-2" style="white-space: pre-wrap">
          {{ topic.text }}
        </p>
      </v-col>

      <v-expansion-panels
        class="my-4"
        variant="popout"
        multiple
        :color="topic.color"
      >
        <v-expansion-panel v-for="item in topic.item" :key="item">
          <v-expansion-panel-title class="font-weight-black">
            {{ item.name }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="pa-2">
              <v-col cols="3">
                <v-img :src="item.src" width="200" height="200" cover></v-img>
              </v-col>
              <v-col>
                <p class="text-h5 pt-5">
                  {{ topic.rankTitle }}:{{ item.rank }}
                </p>
                <br />
                <p style="white-space: pre-wrap">{{ item.text }}</p>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
  export default {
    props: {
      topic: Object,
    },
  };
</script>
