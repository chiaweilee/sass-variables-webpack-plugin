## sass-variables-webpack-plugin
Use Sass variables in JavaScript

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
