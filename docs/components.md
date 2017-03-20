# Components
-- Description. --

## Input Components

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
| errors                | [ErrorBag](/helpers#ErrorBag)                | Injected by [formHelper](/mixins#formHelper) | - | It is automatically set to correct value using `provide/inject`. In most cases you won't have to care about it.  
| name                  | String                  | `null`                | - | Same as HTML attribute
| input-class            | String                  | `null`               | - | Add CSS `class` to underlying `<input>` element.
| input-name            | String                  | `null`                | - | Used for accessing validation errors. <br> If not provided, `v-model` expression is used. <br> e.g. `... v-model="foo" ...` then `input-name` is `'foo'` <br> e.g. `... v-model="attributes.bar" ...` then `input-name` is `'bar'`
| placeholder           | String                  | -                     | - | Same as HTML attribute
| required              | Boolean                 | -                     | - | Same as HTML attribute
| subtitle              | String                  | `null`                | - | Input field helper text
| suggestion            | String                  | -                     | - | Typeahead shadow text 
| title                 | String                  | `null`                | - | Input field cue
| value                 | Boolean, Array          | -                     | yes |

##### Slots
Name | Description 
-----|-------------
default | Input field title
subtitle | Input field subtitle

#### InputSelect
A native `<select>` element with bootstrap custom input style.

##### Examples
A simple select field.

````vue
<div id="app">
  <input-select v-model="select" :options="options"></input-select>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ select: '' }),
  
  computed: {
    options: () => [
      { id: 1, name: 'Foo' },
      { id: 2, name: 'Bar' },
      { id: 3, name: 'Baz' },
      { id: 4, name: 'Bam' },
    ]
  }
})
</script>
````

A select field with title, subtitle & placeholder.
````vue
<div id="app">
  <input-select v-model="select" :options="options"
                title="Foo Selector"
                subtitle="You must choose one of these."
                placeholder="Select one...." required></input-select>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ select: '' }),
  
  computed: {
    options: () => [
      { id: 1, name: 'Foo' },
      { id: 2, name: 'Bar' },
      { id: 3, name: 'Baz', disabled: true },
      { id: 4, name: 'Bam' },
    ]
  }
})
</script>
````

With title & subtitle using slots.
````vue
<div id="app">
  <input-select v-model="select" title="yes" subtitle="yes" :options="options">
    Select a <strong>foo</strong>
      
    <template slot="subtitle">
      You can <em>choose</em> some <strong>foo</strong>s.
    </template>
  </input-select>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ select: '' }),
  
  computed: {
    options: () => [
      { id: 1, name: 'Foo' },
      { id: 2, name: 'Bar' },
      { id: 3, name: 'Baz', disabled: true },
      { id: 4, name: 'Bam' },
    ]
  }
})
</script>
````

A select field with custom value, display & disabled props.
````vue
<div id="app">
  <input-select v-model="select" :options="options"
                value-key="val" display-key="disp"
                disabled-key="is"></input-select>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ select: '' }),
  
  computed: {
    options: () => [
      { val: 1, disp: 'Foo', is: false },
      { val: 2, disp: 'Bar', is: false },
      { val: 3, disp: 'Baz', is: true },
      { val: 4, disp: 'Bam', is: false },
    ]
  }
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
| disabled-key          | String                 | `'disabled'`           | - | Disables option in select dropdown
| display-key           | String                 | `'name'`               | - | Visible value of the option
| errors                | [ErrorBag](/helpers#ErrorBag) | Injected by [formHelper](/mixins#formHelper) | - | It is automatically set to correct value using `provide/inject`. In most cases you won't have to care about it.  
| name                  | String                  | `null`                | - | Same as HTML attribute
| input-class            | String                  | `null`               | - | Add CSS `class` to underlying `<input>` element.
| input-name            | String                  | `null`                | - | Used for accessing validation errors. <br> If not provided, `v-model` expression is used. <br> e.g. `... v-model="foo" ...` then `input-name` is `'foo'` <br> e.g. `... v-model="attributes.bar" ...` then `input-name` is `'bar'`
| options               | Array                  | -                      | yes | Options for select dropdown. An array of objects where each object is an option.
| placeholder           | String                  | -                     | - | Same as HTML attribute
| required              | Boolean                 | -                     | - | Same as HTML attribute
| subtitle              | String                  | `null`                | - | Input field helper text 
| title                 | String                  | `null`                | - | Input field cue
| value                 | Boolean, Array          | -                     | yes |
| value-key             | String                 | `'id'`                 | - | Actual value of the option

##### Slots
Name | Description 
-----|-------------
default | Input field title
subtitle | Input field subtitle


#### InputSwitch
Toggle switches are missing from bootstrap. It provides an alternate UI for [InputBox](#InputBox) with same [API](#props). 


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

#### InputText
It wraps default `<input>` element with bootstrap styles & Vue magic.

##### Examples
A simple input field.
````vue
<div id="app">
  <input-text v-model="name"></input-text>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' })
})
</script>
````

An input field with title, subtitle & placeholder.
````vue
<div id="app">
  <input-text v-model="name" title="Your Name" subtitle="Give you full name e.g. John Doe" placeholder="xxxxx xxx"></input-text>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' })
})
</script>
````

An input field with custom title & subtitle.
````vue
<div id="app">
  <input-text v-model="name" title="yes" subtitle="yes" placeholder="xxxxx xxx">
    Your <strong>Name</strong>
    
    <template slot="subtitle">
      Give you full name <em><strong>e.g.</strong> John Doe</em>
    </template>
  </input-text>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' })
})
</script>
````

A numeric input field with min & max limits.
````vue
<div id="app">
  <input-text v-model="name" type="number" min="1" max="10"></input-text>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' })
})
</script>
````

A phone number input field with autocomplete.
````vue
<div id="app">
  <input-text v-model="name" type="tel" autocomplete="tel"></input-text>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' })
})
</script>
````

An email number input field with autocomplete.
````vue
<div id="app">
  <input-text v-model="name" type="email" autocomplete="email"></input-text>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' })
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
| errors                | [ErrorBag](/helpers#ErrorBag) | Injected by [formHelper](/mixins#formHelper) | - | It is automatically set to correct value using `provide/inject`. In most cases you won't have to care about it.  
| name                  | String                  | `null`                | - | Same as HTML attribute
| input-class            | String                  | `null`               | - | Add CSS `class` to underlying `<input>` element.
| input-name            | String                  | `null`                | - | Used for accessing validation errors. <br> If not provided, `v-model` expression is used. <br> e.g. `... v-model="foo" ...` then `input-name` is `'foo'` <br> e.g. `... v-model="attributes.bar" ...` then `input-name` is `'bar'`
| placeholder           | String                  | -                     | - | Same as HTML attribute
| required              | Boolean                 | -                     | - | Same as HTML attribute
| subtitle              | String                  | `null`                | - | Input field helper text
| title                 | String                  | `null`                | - | Input field cue
| type                  | String                  | `'text'`              | - | Same as HTML attribute on `<input>` element
| value                 | Boolean, Array          | -                     | yes |

##### Slots
Name | Description 
-----|-------------
default | Input field title
subtitle | Input field subtitle

#### InputTextarea
A textarea field, styled with bootstrap.

##### Examples
A simple textarea field
````vue
<div id="app">
  <input-textarea v-model="text"></input-textarea>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: '' })
})
</script>
````

A non-resizeable textarea field
````vue
<div id="app">
  <input-textarea v-model="text" resizeable="none"></input-textarea>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: '' })
})
</script>
````

With rows
````vue
<div id="app">
  <input-textarea v-model="text" :rows="2"></input-textarea>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: '' })
})
</script>
````

It supports title, subtitle & placeholder too.
````vue
<div id="app">
  <input-textarea v-model="text" :rows="2"
                  title="Write something"
                  subtitle="You should write at least 200 words."
                  placeholder="start writing..."></input-textarea>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: '' })
})
</script>
````

And slots too.
````vue
<div id="app">
  <input-textarea v-model="text" :rows="2"
                  title="yes" subtitle="yes"
                  placeholder="start writing...">
    <strong>Write something</strong>
    <em slot="subtitle">You should write at least 200 words.</em>
  </input-textarea>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: '' })
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
| errors                | [ErrorBag](/helpers#ErrorBag) | Injected by [formHelper](/mixins#formHelper) | - | It is automatically set to correct value using `provide/inject`. In most cases you won't have to care about it.  
| name                  | String                  | `null`                | - | Same as HTML attribute
| input-class            | String                  | `null`               | - | Add CSS `class` to underlying `<input>` element.
| input-name            | String                  | `null`                | - | Used for accessing validation errors. <br> If not provided, `v-model` expression is used. <br> e.g. `... v-model="foo" ...` then `input-name` is `'foo'` <br> e.g. `... v-model="attributes.bar" ...` then `input-name` is `'bar'`
| placeholder           | String                  | -                     | - | Same as HTML attribute
| required              | Boolean                 | -                     | - | Same as HTML attribute
| resizeable            | Boolean                 | -                     | - | Vertically resizeable textarea
| rows                  | Number                  | -                     | - | Height of textarea in number of text rows
| subtitle              | String                  | `null`                | - | Input field helper text 
| title                 | String                  | `null`                | - | Input field cue
| value                 | Boolean, Array          | -                     | yes |

##### Slots
Name | Description 
-----|-------------
default | Input field title
subtitle | Input field subtitle

#### InputTypeahead
An advanced select input inspired from select2.

##### Examples
A simple typeahead input field
````vue
<div id="app">
  <input-typeahead v-model="name" :suggestions="names"></input-typeahead>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' }),
  
  computed: {
    names: () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ]
  }
})
</script>
````

A typeahead input field with custom props.
````vue
<div id="app">
  <input-typeahead v-model="name" :suggestions="names"
                   suggestion-key="name" suggestion-value="name"
                   :show-empty="false"></input-typeahead>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' }),
  
  computed: {
    names: () => [
      { name: 'John Doe' },
      { name: 'Jane Doe' }
    ]
  }
})
</script>
````

Multiple selections
````vue
<div id="app">
  <input-typeahead v-model="name" :suggestions="names" placeholder="select multiple"></input-typeahead>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: [] }),
  
  computed: {
    names: () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ]
  }
})
</script>
````

<p class="warning">Dropdown closes when clicked away. Though it may not work here if you click outside of `<iframe>` container.</p>

Custom filter logic
````vue
<div id="app">
  <input-switch v-model="j" title="should start with J"></input-switch>
  <input-typeahead v-model="name" :suggestions="names"
                   :filter="startsWithJ"></input-typeahead>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '', j: false }),
  
  computed: {
    names: () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Bruce Lee' },
    ]
  },
  
  methods: {
    startsWithJ (item) {
      return this.j === false || item.name[0] === 'J' 
    }
  }
})
</script>
````

Custom searchable fields
````vue

<div id="app">
  <input-typeahead v-model="name" :suggestions="names"
                   placeholder="Try typing xxx or yyy"
                   :search="['foo']"></input-typeahead>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' }),
  
  computed: {
    names: () => [
      { id: 1, name: 'John Doe', foo: 'xxx' },
      { id: 2, name: 'Jane Doe', foo: 'yyy' }
    ]
  }
})
</script>
````

Configure search: It uses [sifter](https://github.com/brianreavis/sifter.js) for search. You can provide `search` prop to provide sifter config.
````vue

<div id="app">
  <input-typeahead v-model="name" :suggestions="names"
                   :search="{ sort: [{ field: 'id', direction: 'asc' }] }"></input-typeahead>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ name: '' }),
  
  computed: {
    names: () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Bruce Lee' },
    ]
  }
})
</script>
````

<p class="tip">
  Default sifter config: <br>
  
  `{ fields: [<suggestion-value>], sort: [{ field: <suggestion-value>, direction: 'asc' }], limit: 25 }` 
</p>


Custom suggestion render
````vue

<div id="app">
  <input-typeahead v-model="name" :suggestions="names" component="name-comp"></input-typeahead>
</div>

<script>
const NameComp = {
  template: `<strong :style="{
                      color: selected ? 'red' : 'black',
                      background: active ? '#ccc' : '#fff'
                          }">
              {{ item.name }}
            </strong>`,
  
  props: ['active', 'selected', 'item'] // - required props.
}

Vue.component('NameComp', NameComp)

new Vue({
  el: '#app',
  
  data: () => ({ name: '' }),
  
  computed: {
    names: () => [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Bruce Lee' },
    ]
  }
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
| component             | String                  | -                     | - | Custom component for rendering suggestions. **This should be globally registered.**
| errors                | [ErrorBag](/helpers#ErrorBag) | Injected by [formHelper](/mixins#formHelper) | - | It is automatically set to correct value using `provide/inject`. In most cases you won't have to care about it.
| filter                | Function                | -                     | - | Custom filter logic. It should return a `Boolean`. 
| name                  | String                  | `null`                | - | Same as HTML attribute
| input-class           | String                  | `null`                | - | Add CSS `class` to underlying `<input>` element.
| input-name            | String                  | `null`                | - | Used for accessing validation errors. <br> If not provided, `v-model` expression is used. <br> e.g. `... v-model="foo" ...` then `input-name` is `'foo'` <br> e.g. `... v-model="attributes.bar" ...` then `input-name` is `'bar'`
| placeholder           | String                  | -                     | - | Same as HTML attribute
| required              | Boolean                 | -                     | - | Same as HTML attribute
| search                | Array, Object           | -                     | - | List of searchable fields or sifter config
| show-empty            | Boolean                 | `true`                | - | Show not found component if empty
| subtitle              | String                  | `null`                | - | Input field helper text
| suggestions           | String                  | -                     | - | Typeahead shadow text
| suggestion-key        | String                  | `'id'`                | - | Value of the suggestion
| suggestion-value      | String                  | `'id'`                | - | Display text for the suggestion
| title                 | String                  | `null`                | - | Input field cue
| value                 | Boolean, Array          | -                     | yes |

##### Slots
Name | Description 
-----|-------------
default | Input field title
subtitle | Input field subtitle

##### Events
Name  | Payload | Description
------|---------|------------
search | String | Value in typeahead search field
enter | Event | Native `keypress` event
blur | Event | Native `blur` event

## Other Components

#### Alert
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
This component is available as `<alert>` or `<vb-alert>` (web component spec complaint).

##### Examples
A simple alert message

````vue
<div id="app">
  <alert>This is an alert message.</alert>
</div>
````

#### Breadcrumb

#### Dropdown

#### Modal

#### Icon

#### SmartForm

## Internals

#### Search

#### Typeahead
