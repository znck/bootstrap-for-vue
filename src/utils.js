export function isArray (any) {
  return typeof (any) === 'object' && any instanceof Array
}

export function isObject (any) {
  return any !== null && typeof (any) === 'object'
}

export function mapObject (source, take) {
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
