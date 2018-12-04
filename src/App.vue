<template>
  <v-app>
    
    <v-toolbar
      app
    >
      <v-toolbar-title>EntreCore</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!user">
        <v-btn flat :to="{name: 'signUp'}" >Sign Up </v-btn>
        <v-btn flat :to="{name: 'login'}" >Login </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="user">
        <v-btn flat @click="logout" >LogOut</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 made by EntreCoreTeam</span>
    </v-footer>
  </v-app>
</template>

<script>

import SignUp from './components/SignUp'

export default {
   components: {
   SignUp
    },
    data () {
    return {
      fixed: false
    }
  },
  name: 'App'
}
</script>
