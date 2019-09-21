import aside from './src/main.vue'

aside.install = function(Vue, options) {
  Vue.component(aside.name, aside)
}

export default aside