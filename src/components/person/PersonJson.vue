<template>
  <div class="person__importer card px-4 py-4 mb-3">
    <h5 class="text-center" @click="addFile = !addFile">Add JSON file to database</h5>
    <div class="row pt-4 justify-content-center " v-if="addFile">
      <div class="input-group align-items-center col-sm-10 pb-4">
        <div class="custom-file">
          <input type="file"
                 accept="application/JSON"
                 class="custom-file-input"
                 id="inputGroupFile04"
                 aria-describedby="inputGroupFileAddon04"
                 @change="parseJson"
          >
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button class="btn btn-outline-warning" type="button" id="inputGroupFileAddon04">Single?</button>
          <button class="btn btn-outline-primary"
                  type="button"
                  id="inputGroupFileAddon04"
                  @click="readFile">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      addFile: false,
      json: null
    }
  },
  methods: {
    parseJson(e) {
      const files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.json = files[0]
      }
    },
    readFile() {
      const reader = new FileReader()
      reader.onload = e => {
        const result = e.target.result
        this.$emit('set-json', JSON.parse(result))
      }
      reader.readAsText(this.json)
    }
  }
}
</script>

<style scoped>
h5 {
  cursor: pointer;
  transition: color ease 0.5s;
}
h5:hover {
  color: blue;
  transition: color ease 0.5s;
}
</style>
