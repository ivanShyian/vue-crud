<template>
  <main>
    <div class="main__container container">
      <AppAlert/>
      <router-view/>
    </div>
  </main>
</template>

<script>
import AppAlert from '@/components/ui/AppAlert'
export default {
  components: {
    AppAlert
  }
}
</script>
