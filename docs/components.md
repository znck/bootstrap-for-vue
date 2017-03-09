# Components
-- Description. --

## InputComponents

#### InputBox

```html
<div id="app-1">
  <input-box v-model="confirm" title="Do you want to continue?"/>
</div>
```

```js
new Vue({
  el: '#app-1',
  
  data: () => ({ confirm: false })
})
```

<div id="app-1" class="output">
  <input-box v-model="confirm" title="Do you want to continue?"/>
</div>

<script>
new Vue({
  el: '#app-1',
  
  data: () => ({ confirm: false })
})
</script>

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
