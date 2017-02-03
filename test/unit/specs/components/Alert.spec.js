import { render } from '../../util'
import Alert from 'src/components/Alert.vue'

function getComponent (ctx, template) {
  return render(ctx, {
    template,
    components: { Alert }
  })
}

describe('Alert.vue', function () {
  it('should render correctly', function () {
    const vm = getComponent(
      this,
      '<alert>This is an alert.</alert>'
    )

    vm.$el.should.exist
      .and.have.text('×This is an alert.')
  })

  it('should render error', function () {
    const vm = getComponent(
      this,
      '<alert type="danger">This is an alert.</alert>'
    )

    vm.$el.should.exist
      .and.have.text('×This is an alert.')
  })

  it('should render warning', function () {
    const vm = getComponent(
      this,
      '<alert type="warning">This is an alert.</alert>'
    )

    vm.$el.should.exist
      .and.have.text('×This is an alert.')
  })

  it('should render info', function () {
    const vm = getComponent(
      this,
      '<alert type="info">This is an alert.</alert>'
    )

    vm.$el.should.exist
      .and.have.text('×This is an alert.')
  })

  it('should render with message', function () {
    const vm = getComponent(
      this,
      '<alert message="This is an alert."/>'
    )

    vm.$el.should.exist
      .and.have.text('×This is an alert.')
  })

  it('should not be dismissable', function () {
    const vm = getComponent(
      this,
      '<alert :dismissable="false" message="This is an alert."/>'
    )

    vm.$el.should.exist
      .and.have.text('This is an alert.')
  })

  it('should render custom html', function () {
    const vm = getComponent(
      this,
      '<alert><h1>Alert</h1> <p>This is an alert.</p></alert>'
    )

    vm.$el.should.exist
  })
})
