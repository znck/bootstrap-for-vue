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
| Name                  | Type                    | Default               | Required | Remarks             
| :-------------------- | :---------------------- | --------------------- |----------| --------------      
| autocomplete          | Boolean, String         | -                     | - | Same as HTML attribute
| autofocus             | Boolean                 | `false`               | - | Same as HTML attribute
| checkbox              | Boolean, String         | `true`                | - | `radio` cannot be used.    
| inline                | Boolean                 | `false`               | - |                            
| radio                 | Boolean, String         | `undefined`           | - | `checkbox` cannot be used. 
| value                 | Boolean, Array          | -                     | yes |    

#### InputButton
It uses [bootstrap button](https://v4-alpha.getbootstrap.com/components/buttons/) to render a form
button. 

##### Examples
````vue
<div id="app">
  <input-button>Primary Button</input-button>
  <input-button theme="secondary">Secondary Button</input-button>
  <input-button theme="info">Info Button</input-button>
  <input-button theme="success">Success Button</input-button>
  <input-button theme="warning">Warning Button</input-button>
  <input-button theme="danger">Danger Button</input-button> <br> <br>
  <input-button type="submit">Submit Button</input-button>
  <input-button value="Button with value prop"></input-button>
  <input-button v-model="title"></input-button>
</div>

<script>
new Vue({
  el: '#app',
  data: () => ({ title: 'Button with v-model' })
})
</script>
````

##### Model
 Name   | Value   
--------|---------
 value  | value   
 event  | -       

##### Props
 Name   | Type   | Default   | Remarks                                                                             
------- | ------ | --------- | -------                                                                          
 icon   | String | -         | Use FontAwesome icon class without `fa` prefix                                      
 theme  | String | `primary` | Bootstrap button themes, e.g. `success` would add `btn-success` class on the button 
 type   | String | `button`  | Possible values: `button` or `submit`                                               
 value  | String | `null`    | Button text                                                                        

##### Slots
 Name    | Description  
------  | -------------
default | Button text  

#### InputSearch
A search field with typeahead suggestion that respects bootstrap input style.

##### Examples

A simple search field.
````vue
<div id="app">
  <input-search v-model="search"></input-search>
</div>

<script>
new Vue({
  el: '#app',
  data: () => ({ search: '' })
})
</script>
````

With placeholder & typeahead suggestion.
````vue
<div id="app">
  <input-search v-model="search" :suggestion="suggestion"
                placeholder='Try typing "foo bar"...'></input-search>
</div>

<script>
new Vue({
  el: '#app',
  data: () => ({ search: '' }),
  
  computed: {
    suggestion: () => 'foo bar',
  }
})
</script>
````

With title & subtitle and required.
````vue
<div id="app">
  <input-search title="Search a foo" subtitle="This would search some foos."
                v-model="search" required></input-search>
</div>

<script>
new Vue({
  el: '#app',
  data: () => ({ search: '' })
})
</script>
````

With title & subtitle using slots.
````vue
<div id="app">
  <input-search v-model="search" title="yes" subtitle="yes">
    Search a <strong>foo</strong>
      
    <template slot="subtitle">
      This would <em>search</em> some <strong>foo</strong>s.
    </template>
  </input-search>
</div>

<script>
new Vue({
  el: '#app',
  data: () => ({ search: '' })
})
</script>
````

##### Model
| Name   | Value   |
| ------ | ------- |
| value  | value   |
| event  | input   |

##### Props
| Name                  | Type                    | Default               | Required | Remarks                    
| :-------------------- | :---------------------- | --------------------- | -------- | --------------                      
| autocomplete          | Boolean, String         | -                     | - | Same as HTML attribute
| autofocus             | Boolean                 | `false`               | - | Same as HTML attribute
| errors                | [ErrorBag](/#/mixins/#ErrorBag)                | Injected by [formHelper](/#/mixins#formHelper) | - | It is automatically set to correct value using `provide/inject`. In most cases you won't have to care about it.  
| name                  | String                  | `null`                | - | Same as HTML attribute
| input-class            | String                  | `null`               | - | Add CSS `class` to underlying `<input>` element.
| input-name            | String                  | `null`                | - | Used for accessing validation errors. <br> If not provided, `v-model` expression is used. <br> e.g. `... v-model="foo" ...` then `input-name` is `'foo'` <br> e.g. `... v-model="attributes.bar" ...` then `input-name` is `'bar'`
| placeholder           | String                  | -                     | - | Same as HTML attribute
| required              | Boolean                 | -                     | - | Same as HTML attribute
| subtitle              | String                  | `null`                | - | Input field helper text
| suggestion            | String                  | -                     | - | Typeahead shadow text 
| title                 | String                  | `null`                | - | Input field cue
| value                 | Boolean, Array          | -                     | yes |
