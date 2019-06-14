<template>
  <Flow v-show="showFlow" @close="toggleFlow(false)">
    <div slot="header"><h1>Register</h1></div>
    <div class="register">

      <div v-if="error" class="error">{{error}}</div>
      <input
         type="username"
         name="username"
         v-model="username"
         placeholder="username" />
      <br/>
      <input
         type="password"
         name="password"
         v-model="password"
         placeholder="password" />
      <br/>
      <button @click="register">Register</button>
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
    this.$eventBus.$on('open_register', () => {
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

    async register () {
      const response = await AuthenticationService.register({
        username: this.username,
        password: this.password
      })

      if (response.data.success) {
        localStorage.setItem('user', response.data.data)
        this.getUserInfo()
        this.showFlow = false
      } else {
        this.error = response.data.data.errors[0].message
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
