export default {
  beforeCreate () {
    if (!this.$options.components || this.$options.components['<<'] !== true) return

    if (!this.$parent || !this.$parent.$options.components) return

    this.$options.components = this.$options.components || {}

    const names = Object.keys(this.$parent.$options.components)

    names.forEach(name => {
      if (!(name in this.$options.components)) {
        this.$options.components[name] = this.$parent.$options.components[name]
      }
    })
  }
}
