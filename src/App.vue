<script setup>
import Navebottom from './views/Navabottom.vue'
import { mainstore } from './store';
const store = mainstore()
</script>

<template>
  <div>
    <RouterView></RouterView>
    <Navebottom v-if="store.isshow"/>
  </div>
</template>

<style scoped>

</style>
