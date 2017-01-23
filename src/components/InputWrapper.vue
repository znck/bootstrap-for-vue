<template>
  <fieldset class="form-group">
    <legend class="wrapper-legend" v-if="title">{{ title }}</legend>
    <slot/>
  </fieldset>
</template>

<script>
export default {
  name: 'InputWrapper',

  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
  legend.wrapper-legend {
    font-size: inherit;
  }
</style>
