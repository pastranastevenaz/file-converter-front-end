<template lang="html">
  <div id="documents">
    Documents container info goes here
    <uploader></uploader>
  </div>
</template>

<script>
import uploader from '../components/Uploader'

  export default{
    name: 'documents'
  }
</script>

<style scoped>
#documents{
  margin-top: 20vh;
  text-align: center;
}
</style>
