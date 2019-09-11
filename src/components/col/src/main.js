 export default {
    name: 'el-col',
    props: {
      tag: {
        default: 'div'
      },
      span: {
        type: Number,
        default: 24
      }
    },
    render(h) {
      return h(this.tag, {
        class: [
          'el-col',
          `el-col-${this.span}`
        ]
      }, this.$slots.default);
    }
}
