import { render, makeErrors } from '../../util'
import InputSelect from 'src/components/InputSelect.vue'

function getComponent (ctx, template, value = 1) {
  return render(ctx, {
    template,
    data () {
      return {
        value,
        options: [
          { id: 1, name: 'one' },
          { id: 2, name: 'two' },
          { id: 3, name: 'three' },
          { id: 4, name: 'four' }
        ],
        errors: makeErrors({ value: 'This field is required.' })
      }
    },
    components: { InputSelect }
  })
}

describe('InputSelect.vue', function () {
  it('should render correct contents', function () {
    const vm = getComponent(this, '<input-select v-model="value" :options="options" />')

    const group = vm.$el
    const input = vm.$('select')

    group.should.exist
      .and.have.class('form-group')

    input.should.exist
      .and.have.class('form-control')
      .and.have.class('custom-select')
  })

  it('should have label', function () {
    const vm = getComponent(this, '<input-select v-model="value" :options="options" title="Select a number" />')

    const id = vm.$('select').getAttribute('id')

    vm.$('label').should.exist
      .and.have.class('form-control-label')
      .and.have.text('Select a number')
      .and.have.attr('for', id)
  })

  it('should have helper text', function () {
    const vm = getComponent(this, '<input-select v-model="value" :options="options" title="Select a number" subtitle="Eg. 1, 2, 3, 4" />')

    const helper = vm.$('small')

    helper.should.exist
      .and.have.class('form-text')
      .and.have.class('text-muted')
      .and.have.text('Eg. 1, 2, 3, 4')
  })

  it('should have required and autofocus attributes & placeholder', function () {
    const vm = getComponent(this, '<input-select v-model="value" :options="options" title="Select a number" subtitle="Eg. 1, 2, 3, 4" required autofocus placeholder="Number"/>', '')

    const input = vm.$('select')

    return vm.tick().then(function () {
      const placeholder = vm.$('option')

      input.should.have.attr('autofocus', 'autofocus')
      input.should.have.attr('required', 'required')
      placeholder.should.have.text('Number')
    })
  })

  it('should provide feedback on error', function () {
    const vm = getComponent(this, `<input-select v-model="value"
      :options="options" title="Select a number" subtitle="Eg. 1, 2, 3, 4" :errors="errors" />`)

    return vm.tick().then(function () {
      const group = vm.$el
      const feedback = vm.$('.form-control-feedback')

      group.should.have.class('has-danger')

      feedback.should.exist
        .and.have.text('This field is required.')
    })
  })
})
