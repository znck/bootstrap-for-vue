import CustomModal from './CustomModal.vue'
import BootstrapModal from './BootstrapModal.vue'

export default {
  functional: true,

  render (h, { props, data, children }) {
    console.log(props);

    if (props.custom) return h(CustomModal, data, children)

    return h(BootstrapModal, data, children)
  },

  props: {
    custom: {
      type: Boolean,
      default: false
    }
  }
}
