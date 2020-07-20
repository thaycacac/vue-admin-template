<template>
  <div class="input">
    <span class="input__label">{{ label }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  margin-top: 12px;
  &__label {
    color: #666;
    font-size: 13px;
    margin: 10px 5px;
  }
}
</style>
