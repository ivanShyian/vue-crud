<template>
  <div class="col-6">
    <label :for="type">{{ label }}</label>
    <input :id="type"
           class="form-control"
           type="text"
           :value="value"
           @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.col-6 {
  margin-bottom: 1rem;
  label {
    font-weight: 700;
  }
  display: flex;
  flex-direction: column;
}
</style>
