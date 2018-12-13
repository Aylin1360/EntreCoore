<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import NewNote from './components/NewNote';

export default {
  name: 'app',
  components: {
    Header,
    NewNote
  }
};
</script>

<style>
nav {
  margin-bottom: 10px;
}
</style>
