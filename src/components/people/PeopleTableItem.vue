<template>
  <tr class="text-center align-items-center">
    <td>{{ person.name }}</td>
    <td>{{ person.surname }}</td>
    <td>{{ person.phone }}</td>
    <td>{{ person.email }}</td>
    <td class="text-right">
      <button class="btn btn-outline-primary mr-2 btn-sm"
              @click="editPerson(person.id)"
      >Edit</button>
      <button class="btn btn-outline-danger mr-2 btn-sm"
              @click="deletePerson(person.id)"
      >Del</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: false,
      default: Object
    }
  },
  methods: {
    deletePerson(idx) {
      this.$store.dispatch('deleteUser', idx)
    },
    editPerson(idx) {
      this.$router.push(`/person/${idx}`)
    }
  }
}
</script>

<style scoped>

</style>
