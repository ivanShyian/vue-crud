<template>
  <div class="person__importer card px-4 py-4 mb-3">
    <h5 class="text-center" @click="addFile = !addFile">Add JSON file to database</h5>
    <div class="row pt-4 justify-content-center " v-if="addFile">
      <div class="input-group align-items-center col-sm-10 pb-4">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button class="btn btn-outline-warning" type="button" id="inputGroupFileAddon04">Single?</button>
          <button class="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addFile: false
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
