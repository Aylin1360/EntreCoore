<template>
  <div id="app">
    <navbar />
     <div class="page-header">
    </div>
    <menu-bar></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar';
import MenuBar from '@/components/MenuBar';

export default {
  name: 'app',
  components: {
   'menu-bar': MenuBar,
    'navbar': Navbar
  }
};
</script>

<style>
.page-header h1 {
    font-weight: 300;
  }

  .card {
    margin-bottom: 10px;
  }

  .card:last-child {
    margin-bottom: 25px;
  }

  .card-block {
    padding: 15px;
  }
</style>
