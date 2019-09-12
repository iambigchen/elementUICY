 export default {
    name: 'el-col',
    props: {
      span: {
        type: Number,
        default: 24
      },
      tag: {
        type: String,
        default: 'div'
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object]
    },
    computed: {
      gutter() {
        let parent = this.row
        return parent ? parent.gutter : 0
      }
    },
    inject: ['row'],
    render(h) {
      let style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }

      let classList = [];
      classList.push(`el-col-${this.span}`);
      if (this.offset) {
        classList.push(`el-col-offset-${this.offset}`);
      }

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        classList.push(`el-col-${size}-${this[size]}`); 
      });

      return h(this.tag, {
        class: [
          'el-col',
          classList
        ],
        style
      }, this.$slots.default);
    }
}
