<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo_white.png')"
          transition="scale-transition"
          width="40"
        />
        <span >TigerBase.io</span>
      </div>
      <v-spacer></v-spacer>
      <div>
        <router-link to="/tech">
          <v-btn text  ><span>Tech Log</span></v-btn>
        </router-link>
        <router-link to="/dev">
          <v-btn text  ><span>dev</span></v-btn>
        </router-link>


      </div>

      <v-spacer></v-spacer>

      <router-link to="/edit">
        <v-btn text  ><span>edit</span></v-btn>
      </router-link>
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
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

  data: () => ({
    //
  }),
};
</script>
