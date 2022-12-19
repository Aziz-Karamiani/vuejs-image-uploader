<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <img src="./assets/logo.png" alt="vue">
    </div>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  beforeCreate() {
    this.$store.dispatch("setAppName", process.env.VUE_APP_APP_NAME);
  }
}
</script>

<style>
</style>
