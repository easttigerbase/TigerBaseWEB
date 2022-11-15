<template>
  <v-container fluid style="background-color:black; height: 100%">
    <v-row class="mt-5" >
      <v-col class=" col-lg-12 col-m-12 col-sm-12">
        <v-btn>Auto Trading</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "DevView",

  data(){
    return{
      data : Object,
    }
  },
  created() {
    fetch("")
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