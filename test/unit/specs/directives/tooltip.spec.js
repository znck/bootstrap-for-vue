import { render } from '../../util'
import Vue from 'vue'
import tooltip from 'src/directives/tooltip'

console.log(tooltip);

function getComponent (ctx, template) {
  return render(ctx, { template, directives: { tooltip } })
}

describe('Tooltip.js', function () {
  it ('should render correctly', function () {
    const vm = render(this, `<div><div v-tooltip="'Hey! Here is a tooltip.'">Hover Me!</div></div>`)
  })
})
