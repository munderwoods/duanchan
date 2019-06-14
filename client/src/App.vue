<template>
  <div id="app">
    <MainNav/>
    <router-view/>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
export default {
  name: 'App',
  components: { MainNav }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.flex-row {
  display: flex !important;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.pull-right {
  margin-left: auto;
}
</style>
