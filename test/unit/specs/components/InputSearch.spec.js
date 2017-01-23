import { render } from '../../util'
import InputSearch from 'src/components/InputSearch.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { InputSearch },
    data () {
      return {
        search: ''
      }
    }
  })
}

describe('InputSearch.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, '<input-search v-model="search" title="Search Field" subtitle="Help Text here!" placeholder="Start typing..." suggestion="Rahul Kadyan" />')

    // vm.$('.form-control').should.exist
  })
})
