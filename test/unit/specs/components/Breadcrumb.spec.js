import Vue from 'vue'
import { render } from '../../util'
import Breadcrumb from 'src/components/Breadcrumb.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { Breadcrumb },
    computed: {
      crumbs () {
        return [
          { link: '/', title: 'Home' },
          { link: '/users', title: 'Users' },
          { link: '/users/me', title: 'Me' }
        ]
      },
      links () {
        return ['home', 'users', 'me']
      }
    }
  })
}

describe('Breadcrumb.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, `<breadcrumb :links="crumbs" component="a"/>`)

    vm.$el.should.exist
  })

  it('should render correctly', function () {
    const vm = getComponent(this, `<breadcrumb :links="links" component="a"/>`)

    vm.$el.should.exist
  })
})
