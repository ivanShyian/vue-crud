export default {
  data() {
    return {
      userJson: null
    }
  },
  computed: {
    jsonWasLoaded() {
      return !!this.userJson
    }
  },
  methods: {
    parseJson(e) {
      const files = e.target.files || e.dataTransfer.files
      if (files.length) {
        this.userJson = files[0]
      }
    },
    readFile() {
      if (this.jsonWasLoaded) {
        const reader = new FileReader()
        reader.onload = e => {
          const result = e.target.result
          this.$store.dispatch('parseData', JSON.parse(result))
        }
        reader.readAsText(this.userJson)
        this.userJson = null
      }
    }
  }
}
