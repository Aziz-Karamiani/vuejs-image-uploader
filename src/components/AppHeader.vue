<template>
  <div class="ui secondary pointing menu">
    <a class="active item">
      {{ getAppName }}
    </a>
    <div class="right menu">
      <a class="ui item">
        Gallery
      </a>
      <a class="ui item">
        Upload
      </a>
      <a class="ui item">
        Register
      </a>
      <a class="ui item">
        Login
      </a>
      <a class="ui item">
        Logout
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    getAppName() {
      return this.$store.getters.getAppName;
    }
  }
}
</script>

<style scoped>

</style>