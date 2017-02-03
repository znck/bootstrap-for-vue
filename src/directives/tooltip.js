export default {
  bind (el, binding) {
    el.setAttribute('data-title', binding.value)

    window.jQuery(el).tooltip({
      html: binding.modifiers.html || false,
      placement: binding.arg || 'bottom'
    })
  },

  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      el.setAttribute('data-original-title', binding.value)
    }
  },

  unbind (el) {
    window.jQuery(el).tooltip('dispose')
  }
}
