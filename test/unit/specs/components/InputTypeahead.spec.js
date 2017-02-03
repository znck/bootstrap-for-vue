import { render } from '../../util'
import InputTypeahead from 'src/components/InputTypeahead.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { InputTypeahead },
    data () {
      return {
        search: '',
        suggestions: [
          { id: 1, name: 'Rahul Kadyan' },
          { id: 2, name: 'Foo Bar' }
        ]
      }
    }
  })
}

describe('InputTypeahead.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, '<input-typeahead v-model="search" title="Search Field" subtitle="Help Text here!" placeholder="Start typing..." v-bind="{suggestions}" />')

    // vm.$('.form-control').should.exist
  })
})
