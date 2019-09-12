 export default {
    name: 'el-row',
    props: {
      gutter: {
        type: Number,
        default: 24
      },
      type: '',
      justify: ''
    },
    computed: {
      style() {
        const ret = {}
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret
      }
    },
    provide() {
      return {
        row: this
      };
    },
    render(h) {
      return h('div', {
        class: [
          'el-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          {'el-row--flex': this.type === 'flex'}
        ],
        style: this.style
      }, this.$slots.default);
    }
}
