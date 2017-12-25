'use strict'

const store = Symbol('implicits-store')

exports.As = (clazz) => {
  return (target) => {
    return target[store][clazz](target)
  }
}

exports.Convert = (clazz) => {
  return (target, prop, descriptor) => {
    if (target[store]) {
      target[store][clazz] = descriptor
    } else {
      target[store] = {
        [clazz]: descriptor.value
      }
    }
  }
}
