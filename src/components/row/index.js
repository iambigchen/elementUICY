import row from './src/main.vue'

row.install = function(Vue, options) {
  Vue.component(row.name, row)
}

export default row