import { render } from '../../util'
import Dropdown from 'src/components/Dropdown.vue'

function getComponent (ctx, template, data) {
  return render(ctx, {
    template,
    components: {Dropdown},
    data () {
      return data || { show: false, items: [{name: "Hello"}, {name: "Good Morning"}, {name: "Good Bye"}] }
    }
  })
}

describe('Dropdown.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(
      this,
      '<Dropdown v-bind="{ show, items }" @close="open = false"><button @click="show = !show">Toggle</button></Dropdown></div>'
    )
  })

})
