<template>
  <div class="page-frame">
    <Login/>
    <Register/>

    <div class="nav-bar flex-row">
      DuangChan
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/movies">Movies</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/library">Your Library</router-link>

      <div class="pull-right">
        <div v-if="user" class="flex-row">
          <div class="profile">{{ user.username }}</div>
          <button @click="log">Log Out</button>
        </div>
        <div v-else class="flex-row">
          <button @click="login">Log In</button>
          <button @click="register">Register</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Login from './Login'
import Register from './Register'

export default {
  name: 'main-nav',
  components: {
    Login,
    Register
  },

  created () {
    this.getMovies()
    if (localStorage.getItem('user')) {
      this.getUserInfo()
    }
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    ...mapActions([
      'getUserInfo',
      'getMovies',
      'logout'
    ]),

    register () {
      this.$eventBus.$emit('open_register')
    },

    login () {
      this.$eventBus.$emit('open_login')
    },

    log () {
      localStorage.setItem('user', '')
      this.logout()
    }
  }

}
</script>

<style lang="scss" scoped>

.page-frame {
}

.hero-heading {
  color: white;
}

.nav-bar {
  display: flex;
  height: 50px;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  border-bottom: solid 5px #ff0039;

  a {
    display: flex;
    align-items: center;
    color: white;
    padding: 0 20px;
    height: 100%;

    &:hover {
      color: gray;
    }
  }
}

.router-link-exact-active {
  background-color: #ff0039;
}

.profile {
  color: white;
  align-items: center;
  margin-right: 5px;
  display: flex;
}
</style>
