<template>
  <v-hover>
  <v-card
      max-width="374"
      min-height="300"
      v-on:click="viewCard"

  >


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
          active-class="blue accent-4 white--text"
          column
      >
        <v-chip disabled color="blue" text-color="white" style="opacity: unset" v-for="(chip,idx) in item.chip" :key="idx">{{ chip }}</v-chip>

      </v-chip-group>
    </v-card-text>
    <v-card-actions >
      <v-btn
          v-if="Boolean(this.$store.getters.isLogin)"
          color="deep-purple lighten-2"
          text
          @click="reserve"
      >
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
</template>
<script>
export default {
  name:'BoardCard',
  data: () => ({
    loading: false,

  }),
  props:{
    item:Object,
  },

  methods: {
    reserve () {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    viewCard(){
      this.$router.push('/tech/'+this.item.id);
    }
  },
}
</script>

<style scoped>

</style>