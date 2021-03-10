<template>
  <div>
    <div v-text="'<-- Back to people page'"
         class="font-weight-bold mb-2 mt-2 back-btn"
         @click="$router.push('/')"
    ></div>
    <div class="main__person-wrapper person mt-4" v-if="!invalidUser">
      <PersonJson @set-json="$emit('set-json', $event)"
      ></PersonJson>
      <div class="card">
        <div class="row">
          <PersonField type="name"
                       label="Name"
                       v-model.trim="fields.name"
          ></PersonField>
          <PersonField type="surname"
                       label="Surname"
                       v-model.trim="fields.surname"
          ></PersonField>
          <PersonField type="email"
                       label="Email"
                       v-model.trim="fields.email"
          ></PersonField>
          <PersonField type="phone"
                       label="Phone"
                       v-model.trim="fields.phone"
          ></PersonField>
        </div>
        <div class="btn-group btn-group-md"
             role="group"
             aria-label="..."
             v-if="!userFound">
          <button class="btn btn-warning">Cancel</button>
          <button class="btn btn-success"
                  :disabled="fieldsAreEmpty"
                  @click="addNewPerson"
          >Add</button>
        </div>
        <div class="btn-group btn-group-md"
             role="group"
             aria-label="..."
             v-else>
          <button class="btn btn-danger"
                  @click="deletePerson"
          >Delete</button>
          <button class="btn btn-primary"
                  :disabled="!hasChanges"
                  @click="saveChanges"
          >Save</button>
        </div>
      </div>
    </div>
    <div class="card mt-0" v-else>
      <h4 class="py-2 text-center">User with id - "{{ $route.params.id }}" not found</h4>
    </div>
  </div>
</template>

<script>
import PersonJson from '@/components/person/PersonJson'
import PersonField from '@/components/person/PersonField'
export default {
  name: 'person',
  mounted() {
    if (this.userFound) {
      this.currentUser = this.$store.getters.onePerson(this.$route.params.id)
      Object.keys(this.currentUser).map(e => {
        this.fields[e] = this.currentUser[e]
        this.initialValues[e] = this.currentUser[e]
      })
    } else if (this.$route.params.id && !this.userFound) {
      this.invalidUser = true
    }
  },
  data() {
    return {
      fields: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      },
      invalidUser: false,
      currentUser: '',
      initialValues: {}
    }
  },
  computed: {
    fieldsAreEmpty() {
      return Object.keys(this.fields).map(e => this.fields[e].length).includes(0)
    },
    userFound() {
      return this.$route.params.id ? this.$store.getters.onePerson(this.$route.params.id) : false
    },
    hasChanges() {
      return Object.keys(this.fields).reduce((acc, key) => {
        return this.fields[key] !== this.initialValues[key] || acc
      }, false)
    }
  },
  methods: {
    addNewPerson() {
      if (!this.fieldsAreEmpty) {
        this.$store.commit('addPerson', this.fields)
        this.fields = {
          name: '',
          surname: '',
          email: '',
          phone: ''
        }
      }
    },
    saveChanges() {
      if (this.hasChanges) {
        this.$store.commit('changePerson', {
          id: this.$route.params.id,
          updated: this.fields
        })
      }
    },
    deletePerson() {
      this.$store.commit('deletePerson', this.$route.params.id)
      this.$router.replace('/')
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
