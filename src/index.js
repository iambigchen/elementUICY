import './common/var.scss'


import col from './components/col'
import row from './components/row'


const components = [
  col,
  row
]


const install = function(Vue, options) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: 1.0,
  install
}
