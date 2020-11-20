<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
html,body{
  width:100%;
  height:100%;
  background: url(./assets/1.png) no-repeat;
  background-size: cover;
  overflow: hidden;
}
#app {
  height:100%;
  width:100%;  
}
</style>
