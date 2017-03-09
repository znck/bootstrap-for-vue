# Components
-- Description. --

## InputComponents

#### InputBox
It uses [bootstrap checkbox & radios](https://v4-alpha.getbootstrap.com/components/forms/#checkboxes-and-radios) to render a choice/box input. 

##### Examples

**Checkbox:** A standard checkbox.
````vue
<div id="app">
  Value: {{ checkbox }} <br>
  
  <input-box v-model="checkbox" title="Accept terms & conditions."></input-box> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ checkbox: false })
})
</script>
````

````vue
<div id="app">
  Value: {{ checkbox }} <br>
  
  <input-switch v-model="checkbox" title="Accept terms & conditions."></input-switch> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ checkbox: false })
})
</script>
````

**Checkbox:** An alternate checkbox.
````vue
<div id="app">
  Value: {{ checkbox }} <br>
  
  <input-box v-model="checkbox" title="Accept terms" custom></input-box> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ checkbox: true })
})
</script>
````

**Radio:** A box input can be formatted as a radio element. This means it is an exclusive option. A standard radio input.

````vue
<div id="app">
  Value: {{ radio }} <br>
  
  <input-box v-model="radio" radio="1" title="Radio box 1"></input-box>
  <input-box v-model="radio" radio="2" title="Radio box 2"></input-box> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ radio: '1' })
})
</script>
````

**Radio:** An alternate radio input.
````vue
<div id="app">
   Value: {{ radio }} <br>

  <input-box v-model="radio" radio="1" title="Styled Radio 1" custom></input-box>
  <input-box v-model="radio" radio="2" title="Styled Radio 2" custom></input-box> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ radio: '1' })
})
</script>
````

**Checkbox:** Inline checkbox & radio.
````vue
<div id="app">
  Checkbox: {{ checkbox }} <br>
  Radio: {{ radio }}  <br>
 
  <input-box v-model="checkbox" checkbox="1" title="Checkbox 1" inline></input-box>
  <input-box v-model="checkbox" checkbox="2" title="Checkbox 2" inline custom></input-box> 
 
  <input-box v-model="radio" radio="3" title="Radio 3" inline></input-box> 
  <input-box v-model="radio" radio="4" title="Radio 4" inline custom></input-box> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ checkbox: '1', radio: '3' })
})
</script>
````

**Checkbox:** Multiple options. Set initial value to an `Array`.
````vue
<div id="app">
  Value: {{ checkbox }} <br>
  
  <input-box v-model="checkbox" checkbox="1" title="Checkbox 1" inline></input-box>
  <input-box v-model="checkbox" checkbox="2" title="Checkbox 2" inline></input-box> 
  <input-box v-model="checkbox" checkbox="3" title="Checkbox 3" inline></input-box> 
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ checkbox: [] })
})
</script>
````

##### Model
| Name   | Value   |
| ------ | ------- |
| value  | value   |
| event  | input   |

##### Props
| Name                  | Type                    | Default               | Remarks                    |
| :-------------------- | :---------------------- | --------------------- | --------------             |
| checkbox              | Boolean, String         | `true`                | `radio` cannot be used.    |
| inline                | Boolean                 | `false`               |                            |
| radio                 | Boolean, String         | `undefined`           | `checkbox` cannot be used. |
| value                 | Boolean, Array          | -                     | **Required** prop.         |

<script>
window.bootstrapForVueConfig = { all: true }
</script>
<script src="https://unpkg.com/bootstrap-for-vue@0.2.1/dist/bootstrap-for-vue.min.js"></script>
