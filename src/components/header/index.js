import header from './src/main.vue'

header.install = function(Vue, options) {
  Vue.component(header.name, header)
}

export default header