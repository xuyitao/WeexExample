export default {
  methods: {
    jump (to) {
        console.log('to='+to);
      if (this.$router) {
        this.$router.push(to)
      }
    }
  }
}
