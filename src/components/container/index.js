import container from './src/main.vue'

container.install = function(Vue, options) {
  Vue.component(container.name, container)
}

export default container