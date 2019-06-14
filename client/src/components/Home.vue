<template>
  <div class="front-page">
  </div>
</template>

<script>
export default {
  name: 'front-page',
  components: {},
  data () {
    return {
    }
  },

  mounted () {
    if (this.$route.query.start === 'login') {
      this.$eventBus.$emit('open_login')
    } else if (this.$route.query.start === 'register') {
      this.$eventBus.$emit('open_register')
    }
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
