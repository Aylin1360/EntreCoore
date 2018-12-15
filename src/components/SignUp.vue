<template>
  <div>
    <div class="container">
    <img src="@/assets/logoentr.png" class="logo">
    <div class="row">
      <div class="col s12 m8 offset-m2">
          <h3>Sign Up </h3>
          <form action="index.html">
            <div class="input-field">
              <i class="material-icons prefix">email</i>
              <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" class="form-control" v-model="email" placeholder="Enter email">
              <label for="email"></label>
            </div>
            <div class="input-field">
              <i class="material-icons prefix">lock</i>
              <input type="password" id="exampleInputPassword1" class="form-control" v-model="password" placeholder="Password">
              <label for="password"></label>
            </div>
            <button v-on:click="register" class="btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
</div>
</template>


<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // console.log(user);
            alert(`Account Created for ${user.email}`)
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
