<template>
  <aside class="el-aside" :style="{width}">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'el-aside',
  props: {
    width: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style>

</style>