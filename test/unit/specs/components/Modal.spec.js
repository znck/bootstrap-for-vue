import { render } from '../../util'
import Modal from 'src/components/Modal'

function getComponent (ctx, template, data) {
  return render(ctx, {
    template,
    components: { Modal },
    data () {
      return data || { open: false, title: 'A Modal' }
    }
  })
}

describe('Modal.js', function () {
  it('should render correctly', function () {
    const vm = getComponent(
      this,
      '<div><button @click="open = !open">Toggle</button> <modal v-bind="{ open, title }" @close="open = false">This is a modal.</modal></div>'
    )
  })

  it('should render small modal correctly', function () {
    const vm = getComponent(
      this,
      '<div><button @click="open = !open">Toggle</button> <modal v-bind="{ open, title }" size="sm" @close="open = false">This is a modal.</modal></div>'
    )
  })

  it('should render custom modal', function () {
    const vm = getComponent(
      this,
      `<div>
        <button @click="open = !open">Toggle</button>
        <modal v-bind="{ open, custom: true }" @close="open = false">
          <div class="card card-block">This is a modal.</div>
        </modal>
      </div>`
    )
  })
})
