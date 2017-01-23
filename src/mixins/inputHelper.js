import getExpression from './getExpression'

export default {
  props: {
    value: { type: [Number, String], required: true },
    title: { type: String, default: null },
    subtitle: { type: String, default: null },
    name: { type: String, default: null },
    errors: {
      validator (errors) {
        return typeof (errors) === 'object' && typeof (errors.has) === 'function'
      },
      default: null
    }
  },
  data () {
    return {
      expression: null,
      autofocus: null,
      required: null,
      placeholder: null,
      autofill: null
    }
  },
  computed: {
    id () {
      return `text${this._uid}`
    },
    nameKey () {
      const name = this.name
      const expression = this.expression

      return name || expression
    },
    feedback () {
      const errors = this.errors
      const name = this.nameKey

      if (errors) {
        return errors.get(name)
      }

      return undefined
    }
  },

  methods: {
    updateAttributes () {
      if (!this.$vnode || !this.$vnode.data || !this.$vnode.data.attrs) return

      this.autofocus = this.$vnode.data.attrs.hasOwnProperty('autofocus')
      this.required = this.$vnode.data.attrs.hasOwnProperty('required')
      this.placeholder = this.$vnode.data.attrs.placeholder
      this.autofill = this.$vnode.data.attrs.autofill
    }
  },

  mounted () {
    const model = this.getExpression('model')

    if (model) {
      this.expression = model.split('.').pop()
    }

    this.updateAttributes()
  },

  beforeUpdate () {
    this.updateAttributes()
  },

  mixins: [getExpression]

}
