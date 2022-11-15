<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dense
      outlined
    >
      <div class="d-flex align-center">
        <v-img
            class="shrink mr-2"
            contain
            :src="require('./assets/logo_blue.png')"
            transition="scale-transition"
            width="30"
        />
        <strong class="blue--text">TIGERBASE</strong>
      </div>
      <v-spacer></v-spacer>
      <div>
        <router-link to="/tech"  style="text-decoration-line: none;" >
          <v-btn text  ><strong class="grey--text">Tech</strong></v-btn>
        </router-link>
        <router-link to="/dev"  style="text-decoration-line: none;">
          <v-btn  text  ><strong class="grey--text">dev</strong></v-btn>
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <router-link to="/edit"  style="text-decoration-line: none;" >
        <v-btn text  ><strong class="grey--text" >edit</strong></v-btn>
      </router-link>

      <v-dialog
          v-model="dialog"
        width="30%">
        <template  v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on"  v-bind="attrs">
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>
        <v-card class=" blue-grey--text">
          <v-card-title class="justify-center"><strong>Sign in to TigerBase</strong></v-card-title>
          <v-card-text >
            <v-form>
              <v-text-field v-model="username" label="Username"></v-text-field>
              <v-text-field v-model="password" label="Password"></v-text-field>
              <v-btn text @click="doLogin">Sign in</v-btn>
              <v-btn text @click="doLogout">Sign out</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>



    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },
  methods:{
    doLogin(){
        this.$store.dispatch("doLogin", {username:this.username,password:this.password});
        this.dialog = false;
    },
    doLogout(){
      this.$store.dispatch("doLogout", );
      this.dialog = false;
    }

  },

  data: () => ({
    //
    dialog:false,
    username:null,
    password:null,
  }),
};
</script>
