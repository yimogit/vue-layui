<template>
    <input type="value" v-model="currentValue" @change="change" />
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      if (this.value !== val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    change(e) {
      this.$emit('change', e)
    }
  }
}
</script>
