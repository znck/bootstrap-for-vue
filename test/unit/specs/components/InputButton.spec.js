import { render } from '../../util'
import InputButton from 'src/components/InputButton.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { InputButton }
  })
}

describe('InputButton.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(this, '<input-button>Foo</input-button>')

    vm.$el.should.exist
      .and.have.class('btn')
      .and.have.attr('role', 'button')
  })

  it('should accept icon', function () {
    const vm = getComponent(this, '<input-button icon="circle">Foo</input-button>')

    vm.$el.should.contain('i.fa.fa-circle')
  })

  it('should accept button value', function () {
    const vm = getComponent(this, '<input-button value="Foo" />')

    vm.$el.should.text('Foo')
  })

  it('should accept class', function () {
    const vm = getComponent(this, '<input-button class="btn-secondary">Foo</input-button>')

    vm.$el.should.have.class('btn')
      .and.have.class('btn-secondary')
  })

  it('should render button groups correctly', function () {
    const vm = getComponent(this, '<div class="btn-group"><input-button>Foo</input-button><input-button>Bar</input-button></div>')

    vm.$('.btn').should.exist
      .and.have.class('btn')
      .and.have.attr('role', 'button')
  })
})
