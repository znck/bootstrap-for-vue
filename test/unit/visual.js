import 'style-loader!css-loader!mocha-css'
import 'style-loader!css-loader!./helpers/style.css'

// create a div where mocha can add its stuff
const mochaDiv = document.createElement('DIV')
mochaDiv.id = 'mocha'
document.body.appendChild(mochaDiv)

function addStyle(link) {
  const style = document.createElement('link')
  style.rel = 'stylesheet'
  style.href = link
  document.head.appendChild(style)
}

function addScript(link) {
  const script = document.createElement('script')
  script.src = link
  document.head.appendChild(script)
}

addStyle('https://unpkg.com/bootstrap@4.0.0-alpha.6/dist/css/bootstrap.min.css')
addStyle('https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css')
addScript('https://unpkg.com/jquery@3.1.1/dist/jquery.min.js')
addScript('https://unpkg.com/tether@1.4.0/dist/js/tether.min.js')

import 'mocha/mocha.js'
import chai from 'chai'
import chaiDOM from 'chai-dom'
window.mocha.setup('bdd')
chai.use(chaiDOM)
chai.should()
window.expect = chai.expect

before(function (done) {
  function addBoostrap () {
    if (window.jQuery && window.Tether) {
      addScript('https://unpkg.com/bootstrap@4.0.0-alpha.6/dist/js/bootstrap.min.js')
      done()
    } else setTimeout(addBoostrap, 50)
  }

  setTimeout(addBoostrap, 50)
})

beforeEach(function () {
  this.DOMElement = document.createElement('DIV')
  this.DOMElement.id = `test-${Math.floor(Math.random() * 1000000)}`
  document.body.appendChild(this.DOMElement)
})

afterEach(function () {
  const testReportElements = document.getElementsByClassName('test')
  const lastReportElement = testReportElements[testReportElements.length - 1]

  if (!lastReportElement) return
  const el = document.getElementById(this.DOMElement.id)
  lastReportElement.appendChild(el)
})

const specsContext = require.context('./specs', true)
specsContext.keys().forEach(specsContext)

// window.mocha.checkLeaks()
window.mocha.run()
