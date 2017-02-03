<template>
  <div v-if="inDOM" class="alert" :class="[`alert-${type}`]"
    role="alert"><button v-if="dismissable" type="button" class="close" aria-label="Close" @click="dismiss">
      <span aria-hidden="true">&times;</span>
    </button><slot>{{ message }}</slot>
  </div>
</template>

<script>
export default {
  name: 'Alert',

  props: {
    message: {
      type: String
    },

    type: {
      type: String,
      default: 'success'
    },

    dismissable: {
      type: Boolean,
      default: true
    },

    removeFromDOM: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      inDOM: true
    }
  },

  methods: {
    /**
     * Dismiss alert.
     *
     * @return {undefined}
     */
    dismiss () {
      this.$emit('dismiss')

      if (this.removeFromDOM) {
        this.inDOM = false
      }
    }
  }
}
</script>
