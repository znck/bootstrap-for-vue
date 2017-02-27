export default {
  bind (el, binding) {
    el.setAttribute('data-title', binding.value)

    jQuery(el).tooltip({
      animation: false,
      html: binding.modifiers.html || false,
      placement: binding.arg || 'bottom',
      trigger: 'hover'
    })
  },

  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      el.setAttribute('data-original-title', binding.value)
    }
  },

  unbind (el) {
    jQuery(el).tooltip('hide').tooltip('dispose')
  }
}
