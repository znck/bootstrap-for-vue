<template>
<div class="form-control input-search">
  <div class="input-search-placeholder">
    <span v-if="isEmpty"><slot><icon type="search" class="mr-1"></icon><input type="text"
                                                                              class="input-search-placeholder-proxy"
                                                                              :value="placeholder"
                                                                              readonly></slot></span>
  </div>
  <input type="text" class="input-search-suggestion" :value="suggestion" readonly
         v-if="!isEmpty && hasSuggestion && show">
  <input type="search" class="input-search-field" :value="value"
         @input="$emit('input', $event.target.value)" @focus="onFocus" @blur="onBlur">
</div>
</template>

<script>
import Icon from './Icon.vue'

export default {
  name: 'Search',

  props: {
    suggestion: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Search...'
    },
    value: {
      type: String,
      required: true
    }
  },

  data () {
    return { show: false }
  },

  computed: {
    /**
     * Whether suggesion is available or not?
     *
     * @type {Boolean}
     */
    hasSuggestion () {
      const suggestion = this.suggestion

      return typeof (suggestion) === 'string' && suggestion.length > 0
    },

    /**
     * Whether input field is empty or not?
     *
     * @type {Boolean}
     */
    isEmpty () {
      const value = this.value

      return typeof (value) === 'string' && value.length === 0
    }
  },

  methods: {
    onBlur (event) {
      this.show = false

      this.$emit('blur', event)
    },
    onFocus (event) {
      this.show = true

      this.$emit('focus', event)
    }
  },

  components: { Icon }
}

</script>

<style lang="scss" module>
.input-search {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.input-search-placeholder {
  white-space: nowrap;
}

.input-search-placeholder, .input-search-suggestion {
  position: absolute;
  z-index: -1;
}

.input-search-field {
  width: 100%;
}

.input-search-suggestion, .input-search-field, .input-search-placeholder-proxy {
  border: none;
  background: transparent;
  box-shadow: none;
  outline: none;
}

.input-search-suggestion {
  opacity: 0.5;
}

.input-search-placeholder {
  opacity: 0.3;
}
</style>
