<template>
  <main class="el-main" :style="{height}">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'el-main',
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