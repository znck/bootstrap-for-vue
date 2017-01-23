import { render } from '../../util'
import Icon from 'src/components/Icon.vue'

function getComponent (ctx, props) {
  return render(ctx, Icon, { props })
}

describe('Icon.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, { type: 'circle' })

    vm.$('i.fa').should.exist
    vm.$('i.fa-circle').should.exist
      .and.have.text('')
  })

  it('should render without binding', function () {
    const vm = render(this, {
      template: '<icon type="circle" />',
      components: { Icon }
    })

    vm.$('i.fa').should.exist
    vm.$('i.fa-circle').should.exist
      .and.have.text('')
  })
})
