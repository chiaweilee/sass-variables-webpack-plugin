var webpack = require('webpack')
var extract = require('sass-extract')
var resolve = require('path').resolve

module.exports = function (source, name) {
    if (!source) return
    option = option || {}
    name = name || 'sassVars'

    var result = {}
    var vars = extract.renderSync({ file: resolve(__dirname, source) }).vars.global
    Object.keys(vars).forEach(key => {
        result[key] = vars[key].value
    })
    return new webpack.DefinePlugin({
        [name]: JSON.parse(
            JSON.stringify(result).replace(
                /:"([^"]*)"/g,
                `:"'$1'"`
            )
        )
    })
}
