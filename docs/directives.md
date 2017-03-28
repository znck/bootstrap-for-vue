## Directives
Check out [Vue docs](https://vuejs.org/v2/guide/syntax.html#Directives) to know about directives.

#### Tooltip
It uses [bootstrap tooltip](https://v4-alpha.getbootstrap.com/components/tooltips/#usage) to render a tooltip. 

```
v-tooltip:position="expression"
```

Position could be `top`, `right`, `bottom` & `left` or any combination of these.

##### Example

**Tooltip:**
````vue
<div id="app">
  <a href="#" v-tooltip="'Tooltip text here'">Hover over me</a>
  <a href="#" v-tooltip:right="text">Hover over me too</a>
  <a href="#" v-tooltip:bottom-right="text">Hover over me too</a>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: 'More tooltip text' })
})
</script>
````