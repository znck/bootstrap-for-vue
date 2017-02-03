import CustomBox from './CustomBox.vue'
import BootstrapBox from './BootstrapBox.vue'

export default {
  functional: true,

  render (h, { props, data, children }) {
    if (props.custom) return h(CustomBox, data, children)

    return h(BootstrapBox, data, children)
  },

  props: {
    custom: {
      type: Boolean,
      default: false
    }
  }
}
