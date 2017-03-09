export function isArray(any) {
  return Array.isArray(any)
}

export function isObject(any) {
  return any !== null && typeof (any) === 'object'
}

export function mapObject(source, take) {
  const target = {}

  if (isArray(take)) {
    take.forEach((key) => {
      if (key in source) {
        target[key] = source[key]
      }
    })
  } else {
    Object.keys(take).forEach((sourceKey) => {
      const targetKey = take[sourceKey]

      if (sourceKey in source) {
        target[targetKey] = source[sourceKey]
      }
    })
  }

  return target
}

export function each(obj, callback) {
  Object.keys(obj).forEach(key => callback(obj[key], key))
}

export class ErrorBag {
  constructor(errors) {
    this._errors = typeof (errors) === 'object' ? errors : {}
  }

  has(key) {
    return this._errors.hasOwnProperty(key)
  }

  get(key) {
    const value = this._errors[key]

    if (isArray(value)) {
      return value.join(' ')
    }

    return value
  }

  unset(key) {
    delete this._errors[key]
  }
}
