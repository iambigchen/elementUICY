import footer from './src/main.vue'

footer.install = function(Vue, options) {
  Vue.component(footer.name, footer)
}

export default footer