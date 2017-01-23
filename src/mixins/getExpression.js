function getDirectiveExpression (vnode, name) {
  if (!vnode || !vnode.data || !(vnode.data.directives instanceof Array)) return null

  if (!/^v-.*/.test(name)) name = `v-${name}`

  for (let i = 0; i < vnode.data.directives.length; i += 1) {
    const directive = vnode.data.directives[i]

    if (directive.rawName === name) {
      return directive.expression
    }
  }

  return null
}

export default {
  methods: {
    getExpression (key, type = 'directive') {
      if (!this.$vnode) return null

      if (type === 'directive') return getDirectiveExpression(this.$vnode, key)

      return null
    }
  }
}
