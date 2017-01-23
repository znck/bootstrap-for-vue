import { render } from '../../util'
import Typeahead from 'src/components/Typeahead.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { Typeahead },
    data () {
      return {
        search: '',
        suggestions: [
          {id: 1, name: 'Rahul Kadyan'},
          {id: 2, name: 'Foo Bar'}
        ]
      }
    }
  })
}

describe('Typeahead.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, '<typeahead v-model="search" title="Search Field" subtitle="Help Text here!" placeholder="Start typing..." v-bind="{suggestions}" />')

    // vm.$('.form-control').should.exist
  })
})
