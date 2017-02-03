import { render } from '../../util'
import Icon from 'src/components/Icon.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    data () {
      return { name: 'circle' }
    },
    components: { Icon }
  })
}

describe('Icon.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, `<icon :type="name"></icon>`)

    vm.$el.should.have.class('fa-circle')
      .and.have.text('')
  })

  it('should render without binding', function () {
    const vm = getComponent(this, `<icon type="circle"></icon>`)

    vm.$el.should.have.class('fa-circle')
      .and.have.text('')
  })
})
