<template>
<dropdown class="typeahead" v-bind="{ items, show, component, itemKey: suggestionValue }" @select="onItemSelected">
  <search-field v-bind="{ value, placeholder, suggestion }"
                @input="val => $emit('input', val)"
                @focus="show = true" @blur="onBlur">
    <slot></slot>
  </search-field>

  <div slot="empty" class="px-3 text-muted">No results :(</div>
</dropdown>
</template>

<script>
import Sifter from 'sifter'
import debounce from 'lodash.debounce'
import SearchField from './Search.vue'
import Dropdown from './Dropdown.vue'
import { mapObject, isArray, isObject } from '../utils'

export default {
  props: {
    suggestions: {
      type: Array,
      required: true
    },

    suggestionValue: {
      type: String,
      default: 'name'
    },

    search: {
      type: [Object, Array]
    },

    filter: {
      type: Function,
      default: () => true
    },

    component: {
      type: String
    },

    ...mapObject(SearchField.props, ['value', 'placeholder'])
  },

  data () {
    return {
      show: false
    }
  },

  computed: {
    indexed () {
      return new Sifter(this.suggestions)
    },

    config () {
      const search = this.search
      const key = this.suggestionValue

      const config = {
        fields: [key],
        sort: [key],
        limit: 25,
        empty_sort: [{ field: key, direction: 'asc' }]  // eslint-disable-line camelcase
      }

      if (isArray(search)) {
        config.fields = search

        return config
      }

      if (isObject(search)) {
        return { ...config, ...search }
      }

      return config
    },

    items () {
      const indexed = this.indexed
      const config = this.config
      const value = this.value

      const results = indexed.search(value, config)

      return results.items.map(({ id }) => this.suggestions[id]).filter(this.filter)
    },

    suggestion () {
      const suggestions = this.items
      const value = this.value
      const key = this.suggestionValue

      const suggestion = suggestions.find(suggestion => typeof (suggestion[key]) === 'string' && suggestion[key].startsWith(value))

      if (suggestion) return suggestion[key]

      return ''
    }
  },

  methods: {
    onItemSelected (item) {
      this.$emit('select', item)
    },

    onBlur: debounce(function onBlur () {
      this.show = false

      this.$emit('blur')
    }, 100)
  },

  components: { Dropdown, SearchField }
}

</script>

<style lang="scss" module>
.typeahead {
  position: relative;

  .dropdown-menu {
    right: 0;
    border-top: 0;
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &.show .form-control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
