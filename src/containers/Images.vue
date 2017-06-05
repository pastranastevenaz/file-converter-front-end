<template lang="html">
  <div id="images">
    Images container info goes here
    <uploader></uploader>
  </div>
</template>

<script>
import uploader from '../components/Uploader'
  export default{
    name: 'images'
  }
</script>

<style scoped>
#images{
  margin-top: 20vh;
  text-align: center;
}
</style>
