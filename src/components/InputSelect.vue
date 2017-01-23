<template>
  <div class="form-group" :class="{ 'has-danger': feedback }">
     <label v-if="title" :for="id" class="form-control-label">{{ title }}</label>
     <select class="form-control custom-select"
             @input="$emit('input', $event.target.value)"
             v-bind="{ id, value, required, autofocus, multiple }">
       <option v-if="placeholder" :selected="value === '' || value === null" disabled>{{ placeholder }}</option>
       <option v-for="option in selectOptions" :value="getValue(option)"
               :disabled="getDisabled(option)">{{ getDisplay(option) }}</option>
     </select>
      <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
      <small v-if="subtitle" class="form-text text-muted">{{ subtitle }}</small>
  </div>
</template>

<script>
import inputHelper from '../mixins/inputHelper'
import { isArray, isObject } from '../utils'

export default {
  name: 'InputSelect',

  props: {
    options: {
      type: [Array, Object],
      required: true
    },
    multiple: {
      type: [Boolean, Number],
      default: false
    },
    valueKey: {
      type: String,
      default: 'id'
    },
    displayKey: {
      type: String,
      default: 'name'
    },
    disabledKey: {
      type: String,
      default: 'disabled'
    }
  },

  computed: {
    selectOptions () {
      const options = this.options

      if (isArray(options)) {
        return options
      }

      return Object.keys(options).map((id) => {
        const option = (isObject(options[id]) ? options[id] : { [this.displayKey]: options[id] })

        option[this.valueKey] = id

        return option
      })
    }
  },

  methods: {

    getValue (option) {
      return option[this.valueKey]
    },

    getDisplay (option) {
      return option[this.displayKey]
    },

    getDisabled (option) {
      return this.disabledKey.charAt(0) === '!' ? !option[this.disabledKey.substring(1)] : option[this.disabledKey]
    }

  },

  mixins: [inputHelper]
}
</script>
