<template>
<div class="form-group" :class="{ 'has-danger': feedback }">
  <label v-if="title" :for="id" class="form-control-label">
    <slot>{{ title }}</slot>
  </label>
  <input :id="id" class="form-control" :class="[inputClass]"
         @input="$emit('input', $event.target.value)"
         v-bind="{ type, value, required, autofocus, placeholder, autocomplete, min, max, name }">
  <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
  <small v-if="subtitle" class="form-text text-muted">
    <slot name="subtitle">{{ subtitle }}</slot>
  </small>
</div>
</template>

<script lang="babel">
import inputHelper from '../mixins/inputHelper'

export default {
  name: 'InputText',

  props: {
    type: {
      type: String,
      default: 'text'
    }
  },

  mixins: [inputHelper]
}
</script>

<style lang="scss">
$form-group-required-color: red !default;

.form-group[required] {
  label.form-control-label:after {
    color: $form-group-required-color;
    content: '*';
    vertical-align: top;
  }
}
</style>