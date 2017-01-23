import 'style-loader!css-loader!mocha-css'
import 'style-loader!css-loader!./helpers/style.css'

// create a div where mocha can add its stuff
const mochaDiv = document.createElement('DIV')
mochaDiv.id = 'mocha'
document.body.appendChild(mochaDiv)
const font = document.createElement('link')
font.rel = 'stylesheet'
font.href = 'https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css'
document.head.appendChild(font)
const bootstrap = document.createElement('link')
bootstrap.rel = 'stylesheet'
bootstrap.href = 'https://unpkg.com/bootstrap@4.0.0-alpha.6/dist/css/bootstrap.min.css'
document.head.appendChild(bootstrap)

import 'mocha/mocha.js'
import chai from 'chai'
import chaiDOM from 'chai-dom'
window.mocha.setup('bdd')
chai.use(chaiDOM)
chai.should()
window.expect = chai.expect

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
