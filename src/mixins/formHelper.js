import { isArray } from '../utils'

export class ErrorBag {
  constructor (errors) {
    this.errors = typeof (errors) === 'object' ? errors : {}
  }

  has (key) {
    return this.errors.hasOwnProperty(key)
  }

  get (key) {
    const value = this.errors[key]

    if (isArray(value)) {
      return value.join(' ')
    }

    return value
  }
}

function prepareErrors (payload) {
  return new ErrorBag(payload)
}

export default {
  data () {
    return { formErrors: {}, formStatus: null }
  },
  computed: {
    errors () {
      const errors = this.formErrors

      return prepareErrors(errors)
    }
  },
  methods: {
    setErrors (payload) {
      this.clearErrors()

      if (payload instanceof Promise) {
        payload.json()
          .then(errors => this.$set(this, 'formErrors', errors))
          .catch(error => this.$set(this, 'formStatus', { message: 'Cannot process form errors.', error }))
      } else {
        this.formErrors = payload
      }
    },
    clearErrors (key) {
      if (key === undefined) {
        this.formErrors = {}
        this.formStatus = null
      } else if (key in this.formErrors) {
        this.formErrors[key] = null
      }
    }
  }
}
