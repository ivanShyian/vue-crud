<template>
  <div class="main__person-wrapper person mt-4">
    <div v-text="'<-- Back to people page'"
         class="font-weight-bold mb-3 back-btn"
         @click="$router.push('/')"
    ></div>
    <PersonJson></PersonJson>
    <div class="card">
      <div class="row">
        <PersonField type="name"
                     label="Name"
                     v-model="name"
        ></PersonField>
        <PersonField type="surname"
                     label="Surname"
                     v-model="surname"
        ></PersonField>
        <PersonField type="email"
                     label="Email"
                     v-model="email"
        ></PersonField>
        <PersonField type="phone"
                     label="Phone"
                     v-model="phone"
        ></PersonField>
      </div>
      <div class="btn-group btn-group-md" role="group" aria-label="..." v-if="newPerson">
        <button class="btn btn-danger">Delete</button>
        <button class="btn btn-primary">Save</button>
      </div>
      <div class="btn-group btn-group-md" role="group" aria-label="..." v-else>
        <button class="btn btn-warning">Cancel</button>
        <button class="btn btn-success">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonJson from '@/components/person/PersonJson'
import PersonField from '@/components/person/PersonField'
export default {
  name: 'person',
  mounted() {
    this.newPerson = !!this.$route.params.id
  },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      phone: '',
      newPerson: false
    }
  },
  components: { PersonField, PersonJson }
}
</script>

<style scoped lang="scss">
.back-btn {
  display: inline-flex;
  width: auto;
  cursor: pointer;
}
.card {
  padding: 1rem;
}
</style>
