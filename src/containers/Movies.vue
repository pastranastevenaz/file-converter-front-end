<template lang="html">
  <div id="movies">
    Movies content goes here
    <uploader></uploader>
  </div>
</template>

<script>
import uploader from '../components/Uploader'
  export default{
    name: 'movies'
  }
</script>

<style scoped>
#movies{
  margin-top: 20vh;
  text-align: center;
}
</style>
