<template>
  <transition
    name="alert"
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
  >
    <div :class="['alert', 'alert-' + alert.type]"
         role="alert"
         v-if="alert">
      {{ alert.text }}
    </div>
  </transition>
</template>
<script>
export default {
  computed: {
    alert() {
      return this.$store.getters['alert/isAlert']
    }
  }
}
</script>

<style scoped lang="scss">
.alert {
  position: fixed;
  top: 10%;
  left: 0;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  z-index: 100;
}
</style>
