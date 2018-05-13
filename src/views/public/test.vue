<template>
  <div>
    <p>VFormInput:
      <v-form-input v-model="test" />{{test}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'abc'
    }
  },
  created() {
    console.log(this.$layui)
  }
}
</script>

<style>

</style>
