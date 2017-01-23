import { render, makeErrors } from '../../util'
import InputText from 'src/components/InputText.vue'

function getComponent (ctx, props, attrs) {
  props = props || { value: '' }
  attrs = attrs || {}

  if (!('value' in props)) props.value = '' // Value is a required field.

  return render(ctx, InputText, { props, attrs })
}

describe('InputText.vue', function () {
  it('should render correct contents', function () {
    const vm = getComponent(this)

    const group = vm.$('.form-group')
    const input = vm.$('input')

    group.should.exist
      .and.have.class('form-group')
      .and.have.length(1)

    input.should.exist
      .and.have.class('form-control')
      .and.have.attr('type', 'text')
  })


  it('should have label', function (done) {
    const vm = getComponent(this, { title: 'Name Field' })

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
    const vm = getComponent(this, { subtitle: 'Your name here.' })

    const helper = vm.$('small')

    helper.should.exist
      .and.have.class('form-text')
      .and.have.class('text-muted')

    vm.tick().then(function () {
      helper.should.have.text('Your name here.')

      done()
    })
  })


  it('should provide feedback on error', function (done) {
    const vm = getComponent(this, { name: 'name', errors: makeErrors({ name: 'Name is required.' }) })

    const group = vm.$('.form-group')
    const feedback = vm.$('.form-control-feedback')

    vm.tick().then(function () {
      group.should.have.class('has-danger')

      feedback.should.exist
        .and.have.text('Name is required.')

      done()
    })
  })


  it('should have required, autofocus and placeholder attributes', function (done) {
    const vm = getComponent(this, {}, { required: true, autofocus: true, placeholder: 'Name' })

    const input = vm.$('input')

    vm.tick().then(function () {
      input.should.have.attr('autofocus', 'autofocus')
      input.should.have.attr('required', 'required')
      input.should.have.attr('placeholder', 'Name')

      done()
    })
  })
})
