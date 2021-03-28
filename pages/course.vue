<template>
  <div>
    <search-title/>
    <search-footer/>
  </div>
</template>
<style>

</style>
<script>
  export default {
    created() {
      console.log(this.$route.query)
    },
    watch: {
      "$route"() {
        console.log(arguments)
      }
    }
  }
</script>
