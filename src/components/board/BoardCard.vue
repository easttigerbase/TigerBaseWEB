<template>

  <v-card
      :loading="loading"

      max-width="374"
      min-height="300"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title><strong>{{ this.item.title }}</strong></v-card-title>

    <v-card-text class="mt-10">
      <v-row
          align="center"
          class="mx-0"
      >

      </v-row>

      <span  v-for="(txt,index) in item.content" :key="index">
        <span v-for="(txts,indexs) in txt.content" :key="indexs"> {{txts.text}}</span>

      </span>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
      >
        <v-chip>spring</v-chip>

        <v-chip>node</v-chip>

        <v-chip></v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
      >
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name:'BoardCard',
  data: () => ({
    loading: false,
    selection: 1,
  }),
  props:{
    item:Object,
  },

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>

</style>