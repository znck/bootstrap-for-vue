<template>
  <div class="form-group" :class="{ 'has-danger': feedback }">
      <label v-if="title" :for="id" class="form-control-label">
        <slot>{{ title }}</slot>
      </label>
      <typeahead-field :id="id" v-model="selected"
                       @select="onInput"
                       @search="any => $emit('search', any)"
                       @blur="any => $emit('blur', any)"
                       v-bind="{ required, autofocus, suggestions, suggestionKey, search, filter, component, showEmpty }">
         <input type="text" class="input-search-placeholder-proxy" :value="placeholder" readonly>
      </typeahead-field>
      <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
      <small v-if="subtitle" class="form-text text-muted">
        <slot name="subtitle">{{ subtitle }}</slot>
      </small>
  </div>
</template>

<script lang="babel">
import inputHelper from '../mixins/inputHelper'
import TypeaheadField from './Typeahead.vue'
import { mapObject } from '../utils'

export default {
  name: 'InputTypeahead',

  props: {
    suggestionKey: {
      type: String,
      default: 'id'
    },

    ...mapObject(TypeaheadField.props, [
      'suggestions', 'suggestionValue', 'search', 'filter', 'component', 'showEmpty'
    ])
  },

  computed: {
    selected () {
      const items = this.suggestions
      const key = this.suggestionKey
      const value = this.value instanceof Array ? this.value : [this.value]

      return items.filter(item => value.indexOf(item[key]) > -1)
    },
  },

  methods: {
    onInput (item) {
      const id = item[this.suggestionKey]

      if (this.value instanceof Array) {
        const index = this.value.indexOf(id)
        const value = this.value.slice()

        if (index > -1) {
          value.splice(index, 1)
        } else {
          value.push(id)
        }

        this.$emit('input', value)
      } else {
        this.$emit('input', id)
      }
    }
  },

  components: { TypeaheadField },
  mixins: [inputHelper]
}
</script>
