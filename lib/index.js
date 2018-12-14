var webpack = require('webpack')
var extract = require('sass-extract')
var path = require('path')

class SassVariablesPlugin {
    constructor (source, name) {
      if (!source) return
      name = name || 'process.env.SASS_VAR'

      var result = {}
      var vars = extract.renderSync({ file: path.resolve(source) }).vars.global

      Object.keys(vars).forEach(function (key) {
        result[key] = vars[key].value
      })

      var option = {}
      option[name] = JSON.parse(
        JSON.stringify(result).replace(
          /:"([^"]*)"/g,
          ':"\'$1\'"'
        )
      )

      return new webpack.DefinePlugin(option)
    }
}

module.exports = SassVariablesPlugin
