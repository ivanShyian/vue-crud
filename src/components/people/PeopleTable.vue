<template>
  <table class="main__people-table">
    <tr class="text-center bg-primary py-1">
      <th>Name</th>
      <th>Surname</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
    <PeopleTableItem v-for="p in people"
                     :key="p.id"
                     :person="p"
    ></PeopleTableItem>
  </table>
</template>

<script>
import PeopleTableItem from '@/components/people/PeopleTableItem'
export default {
  props: {
    people: {
      type: Array,
      required: false,
      default: Array
    }
  },
  components: { PeopleTableItem }
}
</script>

<style scoped>
</style>
