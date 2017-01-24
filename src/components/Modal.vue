<template>
  <div class="modal" v-if="inDOM">
    <div class="modal-dialog" :class="{[`modal-${size}`]: size !== undefined}" role="document">
      <div class="modal-content">
        <div class="modal-header" v-if="enableHeader">
          <slot name="header">
            <h5 class="modal-title"><slot name="title">{{ title }}</slot></h5>
          </slot>
          <button type="button" class="close" aria-label="Close" @click="$emit('close')">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer" v-if="enableFooter">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    enableFooter: {
      type: Boolean,
      default: false
    },

    enableHeader: {
      type: Boolean,
      default: true
    },

    title: {
      type: String
    },

    size: {
      type: String,
    },

    open: {
      type: Boolean
    }
  },

  data () {
    return { state: false, inDOM: false, selector: null }
  },

  computed: {
    shown () {
      const open = this.open
      const state = this.state

      if (open !== undefined) return open

      return state
    }
  },

  methods: {
    onShow () {
      this.inDOM = true

      this.$nextTick(() => this.showModal())
    },

    showModal () {
      this.selector = $(this.$el)
      this.selector.modal()
      this.selector.on('hidden.bs.modal', () => {
        this.inDOM = false
        this.selector = null
      })
    },

    onHide () {
      if (this.selector) this.selector.modal('hide')
    }
  },

  created () {
    this.$on('show', () => this.onShow())
    this.$on('hide', () => this.onHide())
  },

  watch: {
    open (shown) {
      if (shown === true) {
        this.onShow()
      } else if (shown === false) {
        this.onHide()
      }
    }
  }
}
</script>
