<template>
<button :type="type" class="btn" :class="[styles]" role="button">
  <icon v-if="icon" :type="icon" class="mr-2"></icon>
  <slot>{{ value }}</slot>
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

    theme: {
      type: String,
      default: 'primary'
    },

    type: {
      type: String,
      default: 'button'
    },

    value: {
      type: String,
      default: null
    }
  },

  computed: {
    styles () {
      return [`btn-${this.theme}`]
    }
  },

  components: { Icon }
}

</script>
