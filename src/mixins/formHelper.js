import { ErrorBag, isObject } from '../utils'

export default {

  provide () {
    const form = {}

    Object.defineProperties(form, {
      status: {
        enumerable: true,
        get: () => this.$data._formStatus
      },

      errors: {
        enumerable: true,
        get: () => this.$data._formErrors
      }
    })

    return { form }
  },

  data: () => ({ _formErrors: null, _formStatus: null }),

  methods: {

    /**
     * @deprecated
     */
    setErrors (payload) {
      return this.setFormErrors(payload)
    },

    /**
     * @deprecated
     */
    clearError (key) {
      return this.clearFormErrors(key)
    },

    setFormErrors (payload) {
      this.clearFormErrors()

      if (!isObject(payload)) return

      this.$data._formErrors = new ErrorBag(payload)
      if ('$message' in payload) {
        this.$data._formStatus = payload.$message
      }
    },

    setFormStatus (status) {
      this.$data._formStatus = status
    },

    clearFormErrors (key) {
      if (key !== undefined) {
        this.$data._formErrors.unset(key)
      } else {
        this.$data._formErrors = new ErrorBag({})
        this.$data._formStatus = null
      }
    }

  },

  created () {
    this.$data._formErrors = new ErrorBag({})
  }
}
