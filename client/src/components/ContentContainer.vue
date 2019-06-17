<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },

  computed: {
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding-top: 56px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
}

.content {
  overflow-y: auto;
  margin-bottom: 56px;
  width: 100%;
}
</style>
