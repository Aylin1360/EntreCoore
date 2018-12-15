<template>
  <div>
    <div class="container">
    <img src="@/assets/logoentr.png" class="logo">
    <div class="row">
      <div class="col s12 m8 offset-m2">
          <h3>Login </h3>
          <form action="index.html">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" class="form-control"  id="exampleInputEmail1" placeholder="Enter email" v-model="email">
              <label class="white-text" for="email"></label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
              <label class="white-text" for="password"></label>
            </div>
            <button v-on:click="login" class="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.email}`)
            this.$router.push({ path: "/board" });
          },
          err => {
            alert(err.message)
          }
        )
      e.preventDefault()
    }
  }
}
</script>


<style scoped>
.container{
  position:relative;
  margin-left:300px;
  margin-top:20px;
  color: rgb(238, 20, 18);
  width:400px;
}
.logo{
  margin-bottom:20px;
}
.btn{
  background-color: rgb(238, 20, 18);
  color: white;
  margin-top: 20px;
  position:relative;
  margin-left:125px;
  margin-bottom:50px;
}
.row{
  margin:-10px;
  margin-left: -100px;
}
</style>
