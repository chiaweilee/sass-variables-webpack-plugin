## sass-variables-webpack-plugin
Use Sass variables in JavaScript

### Install
```terminal
npm install sass-variables-webpack-plugin
```

### Usage in Webpack config
```js
var SassVars = require('sass-variables-webpack-plugin')
module.exports = {
    ...
    plugins: [
        SassVars('src/sass/vars.scss')
    ],
}
```

```scss
// vars.scss
$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
```

### Output

```js
// anywhere
// eslint-disable-next-line
console.log(sassVars)
```

* Your ESLint may report 'not defined';
* use SassVars('../src/sass/vars.scss', 'MySassVAR'/* Your custom name */) to instead default name of 'sassVars'.

```console
{$white: {…}, $gray-100: {…}, $gray-200: {…}, $gray-300: {…}, $gray-400: {…}, …}
$black: {r: 0, g: 0, b: 0, a: 1, hex: "#000000"}
$blue: {r: 0, g: 123, b: 255, a: 1, hex: "#007bff"}
$color-bg: {r: 238, g: 238, b: 238, a: 1, hex: "#eeeeee"}
...
```
