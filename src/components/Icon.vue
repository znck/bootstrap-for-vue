<template>
  <i class="fa" :class="[typeName]" />
</template>

<script>
export default {
  name: 'Icon',

  props: {
    type: {
      required: true,
      type: String
    }
  },

  computed: {
    typeName () {
      return `fa-${this.type}`
    }
  }
}
</script>
