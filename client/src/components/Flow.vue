<template>
  <div class="flow-container" @click.stop>
    <div class="flow-header flex-row" v-if="hasHeader">
      <i class="hidden-item"/>
      <slot name="header"></slot>
      <div @click="close">X</div>
    </div>

    <div class="content">
      <slot></slot>
    </div>

    <div class="flow-footer" v-show="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow',
  props: {
    closeButton: {
      type: Boolean,
      default: true
    }
  },
  components: {},

  created () {
    document.addEventListener('keyup', e => {
      if (e.code === 'Escape') {
        this.close()
      }
    })
  },

  data () {
    return {}
  },

  methods: {
    close () {
      this.$emit('close')
    }
  },

  computed: {
    hasHeader () {
      return !!this.$slots['header']
    },

    hasFooter () {
      return !!this.$slots['footer']
    }
  }
}
</script>

<style lang="scss" scoped>

.flow-container {
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: white;
  transition: all 0.3s ease;
  z-index: 9999;
  overflow: hidden;
}

.content {
  overflow: auto;
  width: 100%;
  height: 100%;
}

.flow-enter {
  opacity: 0;
}

.flow-leave-active {
  opacity: 0;
}

.flow-enter .flow-container,
.flow-leave-active .flow-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.flow-header {
  background: white;
  box-shadow: inset 0 -1px 0 0 off-white;
  width: 100%;
  height: 80px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.flow-footer {
  background: white;
  box-shadow: inset 1px 1px 0 0 off-white;
  width: 100%;
  height: 104px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

.hidden-item {
  visibility: hidden;
  width: 14px;
}

.close-flow {
  height: 14px;
  width: 14px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
}
</style>
