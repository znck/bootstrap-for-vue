<template>
  <div class="form-group" :class="{ 'has-danger': feedback }">
      <label v-if="title" :for="id" class="form-control-label">
        <slot>{{ title }}</slot>
      </label>
      <input :id="id" type="text" class="form-control"
             @input="$emit('input', $event.target.value)"
             v-bind="{ value, required, autofocus, placeholder }">
      <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
      <small v-if="subtitle" class="form-text text-muted">
        <slot name="subtitle">{{ subtitle }}</slot>
      </small>
  </div>
</template>

<script>
import inputHelper from '../mixins/inputHelper'

export default {
  name: 'InputText',

  mixins: [inputHelper]
}
</script>
