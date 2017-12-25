'use strict'

const implicitjs = require('../../')
const test = require('tape')

test('basic usage', (t) => {
  class A {}

  class B {
    @implicitjs.Convert(A)
    aToB (foo) {
      return new A()
    }
  }

  (function (@implicitjs.As(A) a) {
    t.ok(a instanceof A)
    t.end()
  })(new B())
})
