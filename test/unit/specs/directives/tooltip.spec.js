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
      <div style="width: 200px">
        <div style="background: gray; margin: 5px" v-tooltip:top="tip">Top</div>
        <div style="background: gray; margin: 5px" v-tooltip:top-left="tip">Top Left</div>
        <div style="background: gray; margin: 5px" v-tooltip:top-right="tip">Top Right</div>
        <div style="background: gray; margin: 5px" v-tooltip="tip">Bottom</div>
        <div style="background: gray; margin: 5px" v-tooltip:bottom-right="tip">Bottom Right</div>
        <div style="background: gray; margin: 5px" v-tooltip:bottom-left="tip">Bottom Left</div>
        <div style="background: gray; margin: 5px" v-tooltip:left="tip">Left</div>
        <div style="background: gray; margin: 5px" v-tooltip:left-top="tip">Left Top</div>
        <div style="background: gray; margin: 5px" v-tooltip:left-bottom="tip">Left Bottom</div>
        <div style="background: gray; margin: 5px" v-tooltip:right="tip">Right</div>
        <div style="background: gray; margin: 5px" v-tooltip:right-top="tip">Right Top</div>
        <div style="background: gray; margin: 5px" v-tooltip:right-bottom="tip">Right Bottom</div>
      </div>
    `)

    // document.querySelector()
  })
})
