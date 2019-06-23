<template>
  <Flow v-show="showFlow" @close="toggleFlow(false)">
    <div slot="header"><h1>Login</h1></div>
    <div class="login">

      <div v-if="error" class="error">{{error}}</div>
      <input
         type="username"
         name="username"
         v-model="username"
         @keyup.enter="login"
         placeholder="username" />
      <br/>
      <input
         type="password"
         name="password"
         v-model="password"
         @keyup.enter="login"
         placeholder="password" />
      <br/>
      <button @click="login" @keyup.enter="login">Login</button>
    </div>
  </Flow>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { mapActions } from 'vuex'
import Flow from './Flow'

export default {
  components: { Flow },
  data () {
    return {
      showFlow: false,
      username: '',
      password: '',
      error: ''
    }
  },

  created () {
    this.$eventBus.$on('open_login', () => {
      this.toggleFlow(true)
    })
  },

  methods: {
    ...mapActions([
      'getUserInfo'
    ]),

    toggleFlow (val) {
      if (!val) {
        this.username = ''
        this.password = ''
        this.error = ''
      }

      this.showFlow = val
    },

    async login () {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        if (response.data.success) {
          localStorage.setItem('user', response.data.data)
          this.getUserInfo()
          this.toggleFlow(false)
        }
      } catch (e) {
        console.log(e)
        this.error = 'Invalid username or password'
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
