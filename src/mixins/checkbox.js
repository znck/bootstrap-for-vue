import { isArray } from '../utils'
import inputHelper from '../mixins/inputHelper'

export default {
  name: 'InputBox',

  props: {
    value: {
      type: [Array, String, Number, Boolean],
      required: true
    },

    radio: {
      default: undefined
    },

    checkbox: {
      default: true
    },

    inline: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * Type of field (radio/checkbox)
     *
     * @type {String}
     */
    type () {
      const radio = this.radio

      if (radio !== undefined) return 'radio'

      return 'checkbox'
    },

    /**
     * Value of the checkbox (If checked, value of the model would be set to this).
     *
     * @type {number|string|bool}
     */
    localValue () {
      const radio = this.radio
      const checkbox = this.checkbox

      if (radio !== undefined) return radio

      return checkbox
    },

    /**
     * Current state of the box/radio.
     *
     * @type {bool}
     */
    state () {
      const value = this.value
      const localValue = this.localValue

      if (isArray(value)) {
        return value.indexOf(localValue) > -1
      }

      return value === localValue
    }
  },

  methods: {
    /**
     * Handle check/uncheck event.
     *
     * @return {void}
     */
    onChange () {
      if (this.state) {
        this.uncheck()
      } else {
        this.check()
      }
    },

    /**
     * Mark box/radio as checked.
     *
     * @return {void}
     */
    check () {
      if (this.type === 'checkbox' && isArray(this.value)) {
        const value = this.value.slice(0) // Copy Array.

        value.push(this.localValue)
        this.$emit('input', value)

        return
      }

      this.$emit('input', this.localValue)
    },

    /**
     * Mark box/radio as unchecked.
     */
    uncheck () {
      if (this.type === 'radio') return

      if (this.value instanceof Array) {
        const value = this.value.slice(0)

        value.splice(value.indexOf(this.localValue), 1)
        this.$emit('input', value)

        return
      }

      if (this.localValue === true) {
        this.$emit('input', false)

        return
      }

      this.$emit('input', null)
    }
  },

  mixins: [inputHelper]
}
