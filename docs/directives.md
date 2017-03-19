## Directives
-- Description. --

#### Tooltip
It uses [bootstrap tooltip](https://v4-alpha.getbootstrap.com/components/tooltips/#usage) to render a tooltip. 

`v-tooltip`

##### Example

**Tooltip:**
````vue
<div id="app">
  <a href="#" v-tooltip="'Tooltip text here'">Hover over me</a>
  <a href="#" v-tooltip="text">Hover over me too</a>
</div>

<script>
new Vue({
  el: '#app',
  
  data: () => ({ text: 'More tooltip text' })
})
</script>
````
