<template>
  <v-container>
    <v-row>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>
      <v-col>
        <BoardCard></BoardCard>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import BoardCard from "@/components/board/BoardCard";
export default {
  name: "BoardView",
  components: {BoardCard},

}
</script>

<style scoped>

</style>