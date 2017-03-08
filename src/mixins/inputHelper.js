export default {
  props: {
    value: { required: true },
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    name: { type: String, default: null },
    inputName: { type: String, default: null },
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
    autofocus: [Boolean],
    min: {},
    max: {}
  },

  data () {
    return {
      expression: null,
      required: null
    }
  },

  computed: {

    id () {
      return `text${this._uid}`
    },

    nameKey () {
      const inputName = this.inputName
      const expression = this.expression

      if (inputName) return inputName

      return expression
    },

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
    const model = this.$vnode.data.model.expression

    if (model) {
      this.expression = model.split('.').pop()
    }
    this.updateAttributes()

    if (this.autofocus !== false) {
      this.$nextTick(() => {
        const el = this.$el.querySelector('[autofocus]')
        if (el) el.focus()
      })
    }
  },

  beforeUpdate () {
    this.updateAttributes()
  }
}
