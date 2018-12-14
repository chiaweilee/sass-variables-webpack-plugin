## sass-variables-webpack-plugin
Use Sass variables in JavaScript

<a href="https://npmcharts.com/compare/sass-variables-webpack-plugin?minimal=true"><img src="https://img.shields.io/npm/dm/sass-variables-webpack-plugin.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/sass-variables-webpack-plugin"><img src="https://img.shields.io/npm/v/sass-variables-webpack-plugin.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/sass-variables-webpack-plugin"><img src="https://img.shields.io/npm/l/sass-variables-webpack-plugin.svg" alt="License"></a>

### Install
```bash
npm install sass-variables-webpack-plugin
```

### Usage
```JavaScript
// webpack.config.js
var SassVariablesPlugin = require('sass-variables-webpack-plugin')
```

```JavaScript
// webpack.config.js
plugins: [
    new SassVariablesPlugin('src/sass/vars.scss'/* , 'process.env.SASS_VAR' */)
]
```

```scss
// vars.scss
$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
```

### Output

```JavaScript
process.env.SASS_VAR.$white // '#fff'
```

### Custom output

e.g

```JavaScript
new SassVariablesPlugin('src/sass/vars.scss', 'sassvar')
```

```JavaScript
console.log(sassvar)
```
