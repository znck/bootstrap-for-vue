<template>
<dropdown class="bootstrap-for-vue-typeahead" v-on-click-away="close"
          v-bind="{ items, show, component, itemKey: suggestionValue, active: index, selected }"
          @select="onItemSelected">
  <search-field v-bind="{ placeholder, suggestion, icon, name, autocomplete, autofocus }" v-model="query"
                :class="[inputClass]"
                @input="val => $emit('search', val)"
                @keydown.down="onDown" @keydown.up="onUp"
                @keydown.enter.prevent="onEnter"
                @keydown.tab="onTab"
                @focus="show = true" @blur="onBlur" ref="search">
    <slot></slot>
  </search-field>

  <div slot="empty" class="px-3 text-muted" v-if="showEmpty">No results :(</div>
</dropdown>
</template>

<script lang="babel">
import Sifter from 'sifter'
import { directive as onClickAway } from 'vue-clickaway'
import debounce from 'lodash.debounce'
import SearchField from './Search.vue'
import Dropdown from './Dropdown.vue'
import { mapObject, isArray, isObject } from '../utils'

export default {
  props: {
    value: {
      type: [Array, String, Number],
      required: true
    },

    suggestions: {
      type: Array,
      required: true
    },

    inputClass: String,

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

    showEmpty: {
      type: Boolean,
      default: true
    },

    name: String,

    ...mapObject(SearchField.props, ['placeholder', 'icon', 'autofocus', 'autocomplete'])
  },

  data () {
    return {
      show: false,
      q: '',
      index: -1,
      skip: false
    }
  },

  computed: {
    query: {
      get () {
        const show = this.show
        const value = this.value instanceof Array ? this.value : [this.value]
        const suggestionValue = this.suggestionValue
        const q = this.q

        if (show) return q

        return value.map(v => v[suggestionValue]).join(', ')
      },

      set (val) {
        this.q = val
      }
    },

    indexed () {
      return new Sifter(this.suggestions)
    },

    selected () {
      const value = this.value

      if (value instanceof Array) return value

      return [value]
    },

    config () {
      const search = this.search
      const displayField = this.suggestionValue

      const config = {
        fields: [displayField],
        sort: [{ field: displayField, direction: 'asc' }],
        limit: 25
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
      const value = this.q

      const results = indexed.search(value, config)

      return results.items.map(({ id }) => this.suggestions[id]).filter(this.filter)
    },

    suggestionItem () {
      const suggestions = this.items
      const value = this.q
      const key = this.suggestionValue

      const suggestion = suggestions.find(suggestion => typeof (suggestion[key]) === 'string' && suggestion[key].startsWith(value))

      if (suggestion) return suggestion

      return null
    },

    suggestion () {
      const item = this.suggestionItem
      const key = this.suggestionValue

      if (item) return item[key]

      return ''
    }
  },

  methods: {
    onItemSelected (item) {
      this.$el.querySelector('input[type=search]').focus()

      this.$nextTick(() => {
        console.log('BLUR IT')
        this.blur()
      })

      this.$emit('select', item)
    },

    onDown () {
      if (this.index + 1 < this.items.length) {
        this.index += 1
      } else {
        this.index = 0
      }

      this.scrollIntoView()
    },

    onUp () {
      if (this.index > 0) this.index -= 1
      else this.index = this.items.length - 1

      this.scrollIntoView()
    },

    onEnter () {
      if (this.index > -1) {
        this.$emit('select', this.items[this.index])
        this.blur()
      } else if (this.suggestionItem) {
        this.$emit('select', this.suggestionItem)
        this.blur()
      } else {
        this.$emit('enter')
      }
    },

    onTab (e) {
      if (e.shiftKey || e.altKey) return

      if (this.q.length && this.q !== this.suggestion) {
        this.q = this.suggestion

        e.preventDefault()
      }

      if (this.items.length >= 1 && this.q.length && this.q === this.suggestion) {
        this.$emit('select', this.items[0])
      }
    },

    onBlur: debounce(function onBlur() {
      if (this.skip) {
        this.skip = false

        return
      }

      this.close()
      this.$emit('blur')
    }, 400),

    blur () {
      this.$el.querySelector('input[type=search]').blur()
    },

    close () {
      this.show = false
      this.index = -1
      this.q = ''
    },

    scrollIntoView () {
      this.$nextTick(() => {
        const el = this.$el.querySelector('.dropdown-menu .active')

        if (!el) return

        if (el.scrollIntoViewIfNeeded) {
          el.scrollIntoViewIfNeeded()
        } else if (el.scrollIntoView) {
          el.scrollIntoView()
        }
      })
    }
  },

  created () {
    this.$on('keep-open', () => {
      this.skip = true
      this.$el.querySelector('input[type=search]').focus()
    })
  },

  components: { Dropdown, SearchField },

  directives: { onClickAway }
}

</script>

<style lang="scss">
$input-border-color: #777 !default;

.bootstrap-for-vue-typeahead {
  position: relative;

  .dropdown-menu {
    right: 0;
    border-top: 0;
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-color: $input-border-color;
  }

  &.show .form-control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
