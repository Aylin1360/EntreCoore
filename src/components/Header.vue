 <template>
  <nav>
      <div class="nav-wrapper red">
        <div class="container">
          <router-link to="/" class="brand-logo">EntreCore</router-link>    
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li v-if="isLoggedIn"><span class="email black-text">{{currentUser}}</span></li>
            <li v-if="isLoggedIn"><router-link to="/">View Notes</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/signUp">Sign Up</router-link></li>
             <li v-if="isLoggedIn"><button v-on:click="logout" class="btn grey">Logout</button></li>
             
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li v-if="isLoggedIn"><router-link to="/">View Notes</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/signUp">Sign Up</router-link></li>
            <li><a href="#" class="divider"></a></li>
             <li v-if="isLoggedIn"><button v-on:click="logout" class="btn">Logout</button></li>
           
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script>
import firebase from 'firebase';
export default {
  name: 'header',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style scoped>

nav{
  margin: 0 15px 40px 0px;
}
.container{
  padding: 0px 30px 25px 5px;
}
</style>
