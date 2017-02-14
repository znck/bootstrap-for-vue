<template>
  <div class="form-group" :class="{ 'has-danger': feedback }">
      <label v-if="title" :for="id" class="form-control-label">
        <slot>{{ title }}</slot>
      </label>
      <search-field :id="id" class="form-control" :class="[inputClass]"
             @input="val => $emit('input', val)"
             v-bind="{ value, required, autofocus, placeholder, suggestion, name, autocomplete }"></search-field>
      <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
      <small v-if="subtitle" class="form-text text-muted">
        <slot name="subtitle">{{ subtitle }}</slot>
      </small>
  </div>
</template>

<script>
import inputHelper from '../mixins/inputHelper'
import SearchField from './Search.vue'

export default {
  name: 'InputSearch',

  props: {
    suggestion: {
      type: String
    }
  },

  components: { SearchField },
  mixins: [inputHelper]
}
</script>
