<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
         <v-form 
         v-model="valid" 
         @submit.prevent="login"
         @keydown.prevent.enter
         >
            <v-text-field
              v-model="user.userName"
              :rules="notEmptyRules"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
              v-model="user.password"
              :rules="notEmptyRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit">Login</v-btn>
         </v-form>
        <v-progress-circular
          v-if="loading"
          :width="3"
          color="green"
          indeterminate>
        </v-progress-circular> 
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'login',
  data: (vm) => ({
    valid: false,
    user: {
      userName: '',
      password: ''
    },
    notEmptyRules: [(value) => !!value || 'Cannot be empty']
  }),
  methods: {
    login () {
      if (this.valid) {
      }
    }
  }
}
</script>