<template>
  <button class="btn" :class="[styles]" role="button" @click="any => $emit('click', any)">
    <icon v-if="icon" :type="icon" class="mr-2"></icon><slot>{{ value }}</slot>
  </button>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'InputButton',

  props: {
    icon: {
      type: String,
      default: null
    },

    class: {
      type: String,
      default: 'btn-primary'
    },

    value: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return this.class
    }
  },

  components: { Icon }
}
</script>
