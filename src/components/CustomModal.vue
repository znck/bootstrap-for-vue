<template>
<div class="custom-modal" v-if="showing" tabindex="1" @keydown.esc.stop="$emit('close')">
  <div class="backdrop"></div>

  <div class="wrapper" :class="[wrapper]" ref="wrapper" @click.stop="onWrapper">
    <slot></slot>
  </div>

  <a v-if="dismissable" role="button" class="dismiss" @click.prevent="$emit('close')">&times;</a>
</div>
</template>

<script lang="babel">
export default {
  name: 'Modal',

  props: {
    open: {
      default: null,
      type: Boolean
    },
    dismissOnBackdrop: {
      default: true,
      type: Boolean
    },
    wrapper: {
      type: String,
      default: 'wrapper-default'
    },
    dismissable: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return { state: false }
  },

  computed: {
    showing () {
      const open = this.open
      const state = this.state

      if (open !== null) {
        return open
      }

      return state
    }
  },

  created () {
    this.$on('open', () => {
      this.state = true
    })

    this.$on('close', () => {
      this.state = false
    })
  },
  methods: {
    onWrapper (event) {
      if (!this.dismissable) return

      if (this.dismissOnBackdrop && this.$refs.wrapper === event.target) {
        this.$emit('close')
      }
    }
  },

  watch: {
    showing (state) {
      if (state) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
}
</script>

<style lang="scss" module>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
}

.backdrop {
  background-color: rgba(0, 0, 0, .85);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &.inverse {
    background-color: white;

    .dismiss {
      color: #ccc !important;
      &:hover {
        color: white !important;
        background: #333;
      }

    }
  }
}

.dismiss {
  margin: 1rem;
  width: 28px;
  height: 28px;
  text-align: center;
  font-size: 1.25rem;

  border-radius: 100%;
  cursor: pointer;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999999;
  transition: all .3s;

  color: white !important;

  &:hover {
    color: #333 !important;
    background: white;
  }
}

.wrapper {
  position: relative;
  height: 100%;
  overflow: auto;
  z-index: 1;
}

.wrapper-default {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  > * {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 600px;
  }

  &:before, &:after {
    content: '';
    display: block;
    flex: 1;
  }
}
</style>
