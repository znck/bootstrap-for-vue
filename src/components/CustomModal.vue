<template>
<div class="custom-modal" v-if="showing">
  <div class="backdrop"></div>

  <div class="wrapper" :class="[wrapper]" ref="wrapper" @click.stop="onWrapper">
    <slot></slot>
  </div>

  <a v-if="dismissable" role="button" class="dissmiss" @click.prevent="$emit('close')">&times;</a>
</div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    open: {
      default: null,
      type: Boolean
    },
    dissmissOnBackdrop: {
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

      if (this.dissmissOnBackdrop && this.$refs.wrapper === event.target) {
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

<style>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
}

.custom-modal .backdrop {
  background-color: rgba(0, 0, 0, .85);
}

.custom-modal .backdrop.inverse {
    background-color: white;
}

.custom-modal .backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.custom-modal .wrapper {
  position: relative;
  height: 100%;
  overflow: auto;
  z-index: 1;
}

.custom-modal .dissmiss {
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
}

.custom-modal .dissmiss {
  color: white !important;
}

.custom-modal .dissmiss:hover {
  color: #333 !important;
  background: white;
}

.custom-modal .backdrop.inverse .dissmiss {
    color: #ccc !important;
}
.custom-modal .backdrop.inverse .dissmiss:hover {
  color: white !important;
  background: #333;
}


.custom-modal .wrapper-default {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.custom-modal .wrapper-default:before, .custom-modal .wrapper-default:after {
  content: '';
  display: block;
  flex: 1;
}

.custom-modal .wrapper-default > * {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
}
</style>
