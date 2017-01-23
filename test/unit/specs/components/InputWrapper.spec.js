import { render } from '../../util'
import InputWrapper from 'src/components/InputWrapper.vue'
import InputBox from 'src/components/InputBox.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    data () {
      return {
        ok: false
      }
    },
    components: {InputWrapper, InputBox}
  })
}

describe('InputWrapper.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, `
        <input-wrapper title="Are you foo?">
          <input-box :radio="true" v-model="ok" title="Yes" />
          <input-box :radio="false" v-model="ok" title="No" />
        </input-wrapper>
      `)

    vm.$('.form-group').should.exist
      .and.have.class('form-group')

    vm.$('legend').should.exist
      .and.have.text('Are you foo?')
  })

  it('should render correctly for inline', function () {
    const vm = getComponent(this, `
        <input-wrapper title="Are you foo?">
          <input-box :radio="true" v-model="ok" title="Yes" class="form-check-inline" />
          <input-box :radio="false" v-model="ok" title="No" class="form-check-inline" />
        </input-wrapper>
      `)

    vm.$('.form-group').should.exist
      .and.have.class('form-group')

    vm.$('legend').should.exist
      .and.have.text('Are you foo?')
  })
})
