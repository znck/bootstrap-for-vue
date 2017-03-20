import * as directives from './directives'
import * as components from './components'
import { each } from './utils'
import { version } from '../package.json'

export { formHelper } from './mixins'
export { ErrorBag } from './utils'

const plugin = {
  version,
  install (Vue, options = {}) {
    if (options.custom === true) {
      components.Modal.props.custom.default = true
      components.InputBox.props.custom.default = true
    }

    each(components, (component, name) => Vue.component(name, component))
    each(directives, (directive, name) => Vue.directive(name, directive))
  }
}

export default plugin

// Install by default if using the script tag
if (typeof window !== 'undefined' && 'Vue' in window) {
  Vue.use(plugin, window.bootstrapForVueConfig || {}) // eslint-disable-line no-undef
}
