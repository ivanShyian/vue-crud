<template>
  <div id="app">
    <TheNavbar></TheNavbar>
    <TheMain></TheMain>
  </div>
</template>
<script>
import TheNavbar from '@/components/TheNavbar'
import TheMain from '@/components/TheMain'
export default {
  components: { TheMain, TheNavbar }
}
</script>
