import row from './src/main.js'

row.install = function(Vue, options) {
  Vue.component(row.name, row)
}

export default row