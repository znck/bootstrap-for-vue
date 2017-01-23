<template>
  <i class="fa" :class="[`fa-${type}`]" />
</template>

<script>
export default {
  name: 'Icon',
  
  props: {
    type: {
      required: true,
      type: String
    }
  }
}
</script>
