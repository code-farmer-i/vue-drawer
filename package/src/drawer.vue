<template>
  <div
    v-if="mount"
    class="vue-drawer"
    :class="[
      {
        'vue-drawer--open': visible,
        'vue-drawer--header-footer-fixed': headerFooterFixed
      },
      `vue-drawer--${placement}`
    ]"
    :style="{
      zIndex
    }"
  >
    <div v-if="mask" class="vue-drawer-mask" @click="handleMaskClick"></div>
    <div
      class="vue-drawer-content-wrapper"
      :style="wrapperStyle"
      @webkitTransitionEnd="handleTransitionEnd"
      @transitionend="handleTransitionEnd"
    >
      <div class="vue-drawer-content">
        <div class="vue-drawer__header" v-if="$slots['header']">
          <slot name="header"></slot>
        </div>
        <div class="vue-drawer__body" v-if="$slots['body']">
          <slot name="body"></slot>
        </div>
        <div class="vue-drawer__footer" v-if="$slots['footer']">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const isNumber = function (val) {
  let isNumberRes = true

  if (Number.isNaN(val)) {
    isNumberRes = false
  } else if (typeof val !== 'number') {
    isNumberRes = false
  }

  return isNumberRes
}

export default {
  name: 'VueDrawer',
  props: {
    visible: Boolean,
    width: {
      type: [String, Number],
      default: 256
    },
    height: {
      type: [String, Number],
      default: 256
    },
    placement: {
      type: String,
      default: 'right'
    },
    headerFooterFixed: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    zIndex: Number,
    afterClose: Function,
    beforeClose: {
      type: Function,
      default (next) {
        next()
      }
    }
  },
  computed: {
    wrapperStyle () {
      const {
        placement
      } = this

      if (placement === 'left' || placement === 'right') {
        return {
          width: this.getStyle(this.width)
        }
      } else {
        return {
          height: this.getStyle(this.height)
        }
      }
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler (visible) {
        if (!this.mount && visible) {
          this.$emit('update:visible', false)
          this.mount = true

          this.$nextTick(() => {
            document.body.appendChild(this.$el)

            setTimeout(() => {
              this.$emit('update:visible', true)
            }, 20)
          })
        }

        if (visible) {
          document.body.style = 'overflow: hidden; touch-action: none; position: relative; width: calc(100% - 17px);'
        }
      }
    }
  },
  data () {
    return {
      mount: false
    }
  },
  methods: {
    getStyle (val) {
      return isNumber(val) ? val + 'px' : val
    },
    handleMaskClick () {
      if (this.maskClosable) {
        this.handleClose()
      }
    },
    handleClose () {
      this.beforeClose(() => this.$emit('update:visible', false))
    },
    handleTransitionEnd (e) {
      if (e.propertyName === 'transform' && !this.visible) {
        document.body.style = ''
        if (this.afterClose) this.afterClose()
      }
    }
  },
  destroyed () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>