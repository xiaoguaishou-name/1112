<template>
  <div id="app">
    <Supply></Supply>
  </div>
</template>

<script>
import Supply from "./pages/Supply";
export default {
  name: "App",
  components: {
    Supply,
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
