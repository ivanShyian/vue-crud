<template>
  <div class="main__people-wrapper card py-4 px-4 mt-3">
    <div class="d-flex justify-content-between mb-4">
      <h3 class="main__people-heading">People list</h3>
      <button class="btn btn-success"
              @click="$router.push('/person')"
      >Add person</button>
    </div>
    <PeopleTable v-if="isEmpty"></PeopleTable>
    <h4 v-else
        class="text-center text-danger pt-4"
    >List is empty!</h4>
  </div>
</template>

<script>
import PeopleTable from '@/components/people/PeopleTable'
export default {
  name: 'people',
  data() {
    return {
      isEmpty: true
    }
  },
  components: { PeopleTable }
}
</script>

<style scoped lang="scss">
h4 {
  border-top: 2px solid rgba(0, 0, 0, .2);
}
</style>
