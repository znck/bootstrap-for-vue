<template>
  <fieldset class="form-group">
    <legend class="wrapper-legend" v-if="title">{{ title }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'CheckboxWrapper',

  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" module>
.wrapper-legend {
  font-size: inherit;
}
</style>
