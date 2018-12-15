<template>
  <div class="menubar">
    <div class="btn-group" role="group" aria-label="Menu bar">
      <router-link to="/board" :class="buttonClass('/board')">Board </router-link>
      <router-link to="/update" :class="buttonClass('/update')">Update </router-link>
      <router-link to="/notes" :class="buttonClass('/notes')">Notes </router-link>
    </div>
  </div>
</template>

<script>
import Notes from './Notes';

export default {
  name: 'MenuBar',
  methods: {
    buttonClass(path) {
      return {
        btn: true,
        'btn-danger': this.$route.path === path,
        'btn-secondary': this.$route.path !== path,
        'btn-primary': this.$route.path !== path
      };
    }
  }
};
</script>

<style>
  .menubar {
    margin: 40px;
  }
</style>