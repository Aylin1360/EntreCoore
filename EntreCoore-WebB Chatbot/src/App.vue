<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
</style>
