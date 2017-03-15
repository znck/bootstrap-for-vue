<template>
<div class="alert" :class="[`alert-${type}`]" role="alert">
  <button
          v-if="dismissible"
          type="button" class="close" aria-label="Close"
          @click="dismiss">
    <span aria-hidden="true">&times;</span>
  </button>
  <slot>{{ message }}</slot>
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

    dismissible: {
      type: Boolean,
      default: true
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
    }
  }
}


</script>
