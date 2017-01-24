export default {
  bind (el, binding) {
    const tooltip = $(el).tooltip({
      html: binding.modifiers.html || false,
      placement: binding.arg || 'bottom'
    })

    el.setAttribute('data-title', binding.value)
  },

  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      el.setAttribute('data-title', binding.value)
    }
  },

  unbind (el) {
    $(el).tooltip('dispose')
  }
}
