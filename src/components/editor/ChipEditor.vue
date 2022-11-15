<template >
  <v-combobox
      class="ml-10 mr-10"
      v-model="chips"
      :items="items"
      chips
      clearable
      label="#태그를 입력하세요"
      multiple
      prepend-icon="mdi-tag"
      solo
      v-on:change="chageChip"
  >
    <template v-slot:selection="{ attrs, item, select, selected }">
      <v-chip
          v-bind="attrs"
          color="blue"
          text-color="white"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
export default {
  data () {
    return {
      chips: [],
      items: ['Spring','Vue','Frontend','Backend'],
    }
  },

  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.$emit('chips',this.chips)
    },
    chageChip(){
      this.$emit('chips',this.chips)
    }
  },
}
</script>

<style scoped>

</style>