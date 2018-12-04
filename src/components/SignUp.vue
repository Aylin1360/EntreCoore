<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
         <v-form 
         v-model="valid" 
         @submit.prevent="signUp"
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
            <v-text-field
              v-model="user.confirmPassword"
              :rules="confirmPasswordRules"
              label="Confirm Password"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit">Sign Up</v-btn>
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

import axios from 'axios'

export default {
  name: 'signUp',
  data: (vm) => ({
    valid: false,
    user: {
      email: '',
      password: ''
    },
    notEmptyRules: [(value) => !!value || 'Cannot be empty'],
    confirmPasswordRules: [
      (confirmPassword) => confirmPassword === vm.user.password || 'Password must match!'
    ]
  }),
  methods: {
    signUp () {
    axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyCaa2Giws-CcFDGushuApB0cc-vxscXZVI",
    { email: this.user.email, password: this.user.password, returnSecureToken: true}
    ), then(response => {
    })
    }
  }
}
</script>
