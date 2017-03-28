## Mixins
Checkout out [Vue docs](https://vuejs.org/v2/guide/mixins.html) to know about mixins. 

#### formHelper
Provides error context to descendant `input-*` components. 

##### Examples
````vue
<div id="app">
<input-text v-model="name" title="Try editing name..."></input-text>

<input-button @click.native="clearFormErrors()">Clear Errors</input-button>
</div>

<script>
// When using build tools like webpack or rollup.
// import { formHelper } from 'bootstrap-for-vue'

// In browser
const formHelper = window['bootstrap-for-vue'].formHelper

new Vue({
  el: '#app',
  
  data: () => ({ name: 'John Doe' }),
  
  watch: {
    name (value) {
      this.setFormErrors({
        name: `Name should not be "${value}".`
      })
    }
  },
  
  mixins: [formHelper]
})
</script>
````

##### API
- `setFormErrors` – Set validation errors/messages for `input-*` components.
  ```ts
  setFormError (errors: Object<key: string, value: string|Array>) : void
  ```
  
- `clearFormErrors` – Clear errors/messages on `input-*` components.
  ```ts
  clearFormErrors (name: ?string): void 
  ```
