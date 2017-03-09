import { render, makeErrors } from '../../util'
import InputText from 'src/components/InputText.vue'

function getComponent (ctx, template, data = {}) {
  if (!('value' in data)) data.value = ''

  return render(ctx, {
    template,
    data () { return data },
    components: { InputText }
  })
}

describe('InputText.vue', function () {
  it('should render correct contents', function () {
    const vm = getComponent(this, `<input-text v-model="value" />`)

    const group = vm.$el
    const input = vm.$('input')

    group.should.exist
      .and.have.class('form-group')
      .and.have.length(1)

    input.should.exist
      .and.have.class('form-control')
      .and.have.attr('type', 'text')
  })

  it('should have label', function (done) {
    const vm = getComponent(this, `<input-text v-model="value" title="Name Field" />`)

    const label = vm.$('label')
    const id = vm.$('input').getAttribute('id')

    label.should.exist
      .and.have.class('form-control-label')
      .and.have.attr('for', id)

    vm.tick().then(function () {
      label.should.have.text('Name Field')

      done()
    })
  })

  it('should have helper text', function (done) {
    const vm = getComponent(this, `<input-text v-model="value" subtitle='Your name here.' />`)

    const helper = vm.$('small')

    helper.should.exist
      .and.have.class('form-text')
      .and.have.class('text-muted')

    vm.tick().then(function () {
      helper.should.have.text('Your name here.')

      done()
    })
  })

  it('should provide feedback on error', function () {
    const vm = getComponent(this, `<input-text v-model="value" input-name="name" :errors="errors" />`, { name: 'name', errors: makeErrors({ name: 'Name is required.' }) })

    const group = vm.$el
    const feedback = vm.$('.form-control-feedback')

    return vm.tick().then(function () {
      group.should.have.class('has-danger')

      feedback.should.exist
        .and.have.text('Name is required.')
    })
  })

  it('should have required, autofocus and placeholder attributes', function () {
    const vm = getComponent(this, `<input-text v-model="value" required autofocus placeholder="Name" />`)

    const input = vm.$('input')

    input.should.have.attr('autofocus', 'autofocus')
    input.should.have.attr('placeholder', 'Name')

    return vm.tick().then(function () {
      input.should.have.attr('required', 'required')
    })
  })
})
