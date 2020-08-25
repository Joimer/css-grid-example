<template>
  <div id="app" class="grid">
        <div id="box-1" class="box box1 blue">{{ msg }}</div>
        <div id="box-2" class="box box2 red"></div>
        <div id="box-3" class="box box3 brown"></div>
        <div id="box-4" class="box box4 burgundy"></div>
        <div id="box-5" class="box box5 purple"></div>
        <div id="box-6" class="box box6 turquoise"></div>
        <div id="box-7" class="box box7 forestgreen"></div>
        <div id="box-8" class="box box8 seablue"></div>
        <div id="box-9" class="box box9 gray"></div>
    </div>
</template>

<script>
/*import GridComponent from './components/GridComponent.vue'

export default {
  name: 'App',
  components: {
    GridComponent
  }
}*/
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style>
  @import './assets/styles/reset.css';
  @import './assets/styles/responsive.css';
</style>
