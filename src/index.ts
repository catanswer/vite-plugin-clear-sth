import type { Plugin } from 'vite'
import { Options } from './types'

// merge field function
function mergeField(field: RegExp | Array<RegExp> | undefined, defaultValue: Array<RegExp> ): Array<RegExp> {
  if (field) {
    if (Array.isArray(field) && field.length > 0) {
      return defaultValue.concat(field)
    } else {
      return [field as RegExp, ...defaultValue]
    }
  } else {
    return defaultValue
  }
}

export default function(options: Options = {
  patterns: []
}): Plugin {

  // merge exclude field
  const includeDefault: Array<RegExp> = [/src/]
  let includes = mergeField(options.include, includeDefault)

  // merge exclude field
  const excludeDefault: Array<RegExp> = [/node_modules/]
  let excludes = mergeField(options.exclude, excludeDefault)

  return {
    name: 'vite-plugin-clear-sth',
    apply: 'build',
    transform(code, id) {
      includes.forEach(item => {
        if (!item.test(id)) return
      })
      excludes.forEach(item => {
        if (item.test(id)) return
      })

      let generatedCode = ''
      options.patterns.forEach(item => {
        generatedCode = code.replace(item, '')
      })
      return {
        code: generatedCode
      }
    }
  }
}
