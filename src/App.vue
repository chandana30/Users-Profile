<template>
  <div class="main">
     <router-view/>
  </div>
</template>

<script>
// import Members from "./components/home/Members.vue";
// import Spinner from "./components/home/Spinner.vue";
export default {
  name: "App",
  data() {
    return {
      checkedData: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
