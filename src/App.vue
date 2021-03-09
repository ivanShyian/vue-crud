<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <main>
      <div class="main__container container">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
</style>
<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: { TheNavbar }
}
</script>
