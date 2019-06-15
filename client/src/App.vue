<template>
  <div id="app">
    <MainNav/>
    <ContentContainer>
      <router-view/>
    </ContentContainer>
  </div>
</template>

<script>
import MainNav from './components/MainNav'
import ContentContainer from './components/ContentContainer'
export default {
  name: 'App',
  components: {
    MainNav,
    ContentContainer
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #1a1b1f;
  color: white;
  max-height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-height: 100vh;
  overflow: hidden;
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

a {
  text-decoration: none;
}
</style>
