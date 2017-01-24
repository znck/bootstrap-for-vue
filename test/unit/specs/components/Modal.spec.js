import { render } from '../../util'
import Modal from 'src/components/Modal.vue'

function getComponent (ctx, template, data) {
  return render(ctx, {
    template,
    components: {Modal},
    data () {
      return data || { open: false, title: 'A Modal' }
    }
  })
}

describe('Modal.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(
      this,
      '<div><button @click="open = !open">Toggle</button> <modal v-bind="{ open, title }" @close="open = false">This is an modal.</modal></div>'
    )
  })


  it('should render small modal correctly', function () {
    const vm = getComponent(
      this,
      '<div><button @click="open = !open">Toggle</button> <modal v-bind="{ open, title }" size="sm" @close="open = false">This is an modal.</modal></div>'
    )
  })
})
