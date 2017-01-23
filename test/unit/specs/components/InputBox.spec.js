import { render, makeErrors } from '../../util'
import InputBox from 'src/components/InputBox.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { InputBox },
    data () {
      return {
        test: false,
        errors: makeErrors({ test: 'Name is required.' })
      }
    }
  })
}

describe('InputBox.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, `<input-box v-model="test" />`)

    vm.$('.form-check').should.exist
    vm.$('input').should.exist
      .and.have.class('custom-control-input')
  })


  it('should have helper text', function () {
    const vm = getComponent(this, `<input-box v-model="test" title="Yes" />`)

    vm.$('.custom-control-description').should.exist
      .and.have.text('Yes')
  })


  it('should provide feedback on error', function (done) {
    const vm = getComponent(this, `<input-box v-model="test" :errors="errors" title="Yes" />`)
    const group = vm.$('.form-check')

    vm.$nextTick(function () {
      group.should.have.class('has-danger')

      done()
    })
  })


  it('should be radio type', function () {
    const vm = getComponent(this, `<input-box v-model="test" radio="one" title="Yes" />`)

    const input = vm.$('input')
    input.should.have.attr('type', 'radio')
  })
})
