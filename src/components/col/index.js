import col from './src/main.js'

col.install = function(Vue, options) {
  Vue.component(col.name, col)
}

export default col