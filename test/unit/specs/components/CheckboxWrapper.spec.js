import { render } from '../../util'
import CheckboxWrapper from 'src/components/CheckboxWrapper.vue'
import InputBox from 'src/components/InputBox.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    data () {
      return {
        ok: false
      }
    },
    components: {CheckboxWrapper, InputBox}
  })
}

describe('CheckboxWrapper.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, `
        <checkbox-wrapper title="Are you foo?">
          <input-box :radio="true" v-model="ok" title="Yes" />
          <input-box :radio="false" v-model="ok" title="No" />
        </checkbox-wrapper>
      `)

    vm.$('.form-group').should.exist
      .and.have.class('form-group')

    vm.$('legend').should.exist
      .and.have.text('Are you foo?')
  })

  it('should render correctly for inline', function () {
    const vm = getComponent(this, `
        <checkbox-wrapper title="Are you foo?">
          <input-box :radio="true" v-model="ok" title="Yes" class="form-check-inline" />
          <input-box :radio="false" v-model="ok" title="No" class="form-check-inline" />
        </checkbox-wrapper>
      `)

    vm.$('.form-group').should.exist
      .and.have.class('form-group')

    vm.$('legend').should.exist
      .and.have.text('Are you foo?')
  })
})
