import getExpression from './getExpression'

export default {
  props: {
    value: { required: true },
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    name: { type: String, default: null },
    errors: {
      validator (errors) {
        return typeof (errors) === 'object' && typeof (errors.has) === 'function'
      },
      default: null
    },
    inputClass: String,
    placeholder: String,
    autofill: [String, Boolean],
    autocomplete: [String, Boolean],
    autofocus: [String, Boolean],
    min: {},
    max: {},
  },

  data () {
    return {
      expression: null,
      required: null
    }
  },

  computed: {
    /**
     * Unique ID.
     *
     * @property id
     * @return {string}
     */
    id () {
      return `text${this._uid}`
    },

    /**
     * Input field name.
     *
     * @property nameKey
     * @type {string}
     */
    nameKey () {
      const name = this.name
      const expression = this.expression

      return name || expression
    },

    /**
     * Get error or feedback for the input field.
     *
     * @property feedback
     * @type {string|null}
     */
    feedback () {
      const errors = this.errors
      const name = this.nameKey

      if (errors) {
        return errors.get(name)
      }

      return null
    }
  },

  methods: {
    /**
     * Mirror attributes from root element.
     *
     * @return {void}
     */
    updateAttributes () {
      if (!this.$vnode || !this.$vnode.data || !this.$vnode.data.attrs) return

      this.required = this.$vnode.data.attrs.hasOwnProperty('required')
    }
  },

  mounted () {
    const model = this.getExpression('model')

    if (model) {
      this.expression = model.split('.').pop()
    }
    this.updateAttributes()


    if (this.autocomplete) {
      this.$nextTick(() => this.$el.querySelector('input').focus())
    }
  },

  beforeUpdate () {
    this.updateAttributes()
  },

  mixins: [getExpression]
}
