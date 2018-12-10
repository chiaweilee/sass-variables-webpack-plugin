var webpack = require('webpack')
var extract = require('sass-extract')
var resolve = require('path').resolve

module.exports = function (source, name) {
    if (!source) return
    name = name || 'sassVars'

    var result = {}
    var vars = extract.renderSync({ file: resolve(source) }).vars.global
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
