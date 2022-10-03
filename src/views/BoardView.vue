<template>
  <v-container>

    <v-row class="mt-5">
      <v-col v-for="(item,index) in this.data" :key="index" class="col-lg-4 col-m-12 col-sm-12">
        <BoardCard :item="item"></BoardCard>
      </v-col>

    </v-row>

  </v-container>
</template>

<script>
import BoardCard from "@/components/board/BoardCard";
export default {
  name: "BoardView",
  components: {BoardCard},
  data(){
    return{
      data : Object,
    }
  },
  created() {
    fetch("api/v1/board")
        .then((response) => response.json())
        .then((data) =>
        {
          this.data = data;
          console.log(data);

        }
        );

  }
}
</script>

<style scoped>

</style>