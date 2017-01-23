import Vue from 'vue'
import { ErrorBag } from 'src/mixins/formHelper'
import { createVM } from './helpers/utils'


export function makeErrors (items = {}) {
  return new ErrorBag(items)
}

function mount (vm) {
  vm.$ = function (selector) {
    return this.$el.querySelector(selector)
  }

  vm.tick = function () {
    return new Promise(resolve => this.$nextTick(resolve))
  }

  return vm
}

export function render (ctx, Component, data, parent = {}) {
  return mount(
    createVM(ctx, typeof Component === 'string' ? Component : function (h) {
      return h(Component, data)
    }, parent)
  )
}

export function directive (name, expression, value) {
  return { name, expression, value }
}

export function wait (milis) {
  return new Promise(resolve => setTimeout(resolve, milis))
}
