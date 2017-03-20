<template>
<div class="alert" :class="[`alert-${type}`]" role="alert" v-if="! (dismissible && dismissed)">
  <button
          v-if="dismissible"
          type="button" class="close" aria-label="Close"
          @click="dismiss">
    <span aria-hidden="true">&times;</span>
  </button>
  <slot>{{ message }}</slot>
</div>
</template>

<script lang="babel">
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

  data: () => ({ dismissed: false }),

  methods: {
    /**
     * Dismiss alert.
     *
     * @return {undefined}
     */
    dismiss () {
      this.dismissed = true

      this.$emit('dismiss')
    }
  }
}
</script>
