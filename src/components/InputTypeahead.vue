<template>
  <div class="form-group" :class="{ 'has-danger': feedback }">
      <label v-if="title" :for="id" class="form-control-label">
        <slot>{{ title }}</slot>
      </label>
      <typeahead-field :id="id" v-model="query" @select="onSelect" @blur="onBlur"
             v-bind="{ required, autofocus, suggestions, suggestionKey, search, filter, component }">
         <input type="text" class="input-search-placeholder-proxy" :value="placeholder" readonly>
      </typeahead-field>
      <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
      <small v-if="subtitle" class="form-text text-muted">
        <slot name="subtitle">{{ subtitle }}</slot>
      </small>
  </div>
</template>

<script>
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
      'suggestions', 'suggestionValue', 'search', 'filter', 'component'
    ])
  },

  data () {
    return {
      query: ''
    }
  },

  methods: {
    onBlur () {
      if (this.query === '') {
        this.$emit('input', '')
      } else {
        const current = this.findItemByValue(this.query)
        const item = this.findItem(this.value)

        if (current) {
          this.$emit('input', current[this.suggestionKey])
        } else if (item) {
          this.query = item[this.suggestionValue]
        } else {
          this.query = ''
        }
      }
    },
    onSelect (item) {
      this.$emit('input', item[this.suggestionKey])
    },
    findItem (value) {
      return this.suggestions.find(suggestion => suggestion[this.suggestionKey] === value)
    },
    findItemByValue (value) {
      return this.suggestions.find(suggestion => suggestion[this.suggestionValue] === value)
    }
  },

  watch: {
    value (value) {
      const item = this.findItem(value)

      if (item) {
        this.query = item[this.suggestionValue]
      }
    }
  },

  components: { TypeaheadField },
  mixins: [inputHelper]
}
</script>
