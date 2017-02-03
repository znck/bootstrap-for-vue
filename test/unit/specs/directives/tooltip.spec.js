import { render } from '../../util'
import tooltip from 'src/directives/tooltip'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    data () {
      return { tip: 'A tooltip' }
    },
    directives: { tooltip }
  })
}

describe('Tooltip.js', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, `
      <div v-tooltip="tip">Hover Me!</div>
    `)

    // document.querySelector()
  })
})
