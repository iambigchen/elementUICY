<template>
  <header class="el-header" :style="{height}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'el-header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style>

</style>