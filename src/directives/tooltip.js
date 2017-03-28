import '../components/Tooltip.vue'

export default {
  bind (el, binding) {
    const position = binding.arg ? `${binding.arg}-center`.split('-').slice(0, 2).join(' ') : 'bottom center'

    el.setAttribute('data-tooltip', binding.value)
    el.setAttribute('data-position', position)
  },

  update (el, binding) {
    if (binding.value !== binding.oldValue) {
      el.setAttribute('data-tooltip', binding.value)
    }
  }
}
