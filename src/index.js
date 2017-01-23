import Alert from './components/Alert.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import CheckboxWrapper from './components/InputWrapper.vue'
import Dropdown from './components/Dropdown.vue'
import Icon from './components/Icon.vue'
import InputBox from './components/InputBox.vue'
import InputButton from './components/InputButton.vue'
import InputSearch from './components/InputSearch.vue'
import InputSelect from './components/InputSelect.vue'
import InputText from './components/InputText.vue'
import InputTypeahead from './components/InputTypeahead.vue'
import Search from './components/Search.vue'
import Typeahead from './components/Typeahead.vue'

export const INPUT = {
  InputBox, // Checkbox & Radio
  InputButton, // Button
  InputSearch,
  InputSelect, // Select
  InputText, // Text, Number etc.
  InputTypeahead
}

export const components = {
  Alert,
  Breadcrumb,
  CheckboxWrapper, // Wrapper for Box
  Dropdown,
  Icon,
  Search,
  Typeahead
}

function each (obj, callback) {
  Object.keys(obj).forEach(key => callback(obj[key], key))
}

function plugin (Vue, options = {}) {
  each(INPUT, (component, name) => Vue.component(name, component))
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
