<template lang="html">
  <div class="uploader">
    <form id="file-form" method="POST">
      <p id="upload-file-prompt">Select a file to upload</p>
      <label v-on:click="greet" for="file-select"  class="custom-file-upload">Choose file</label>
      <span id="selected_filename">No file selected</span>
      <input type="file" id="file-select" name="file" class="inputFile">
      <button type="submit" id="upload-button">Upload</button>
    </form>
  </div>
</template>

<script>
var selectedFilename;
// = document.getElementById('selected_filename');
export default {
  name: 'uploader',
  methods: {
    greet: function(event){
      var thefile = document.getElementById('file-select');
                alert(thefile.value);
      // document.getElementById('file-select').onChange = function(){
      //   alert('Selected File: ' + this.value);
      
    }
}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Comfortaa);

.uploader{
  text-align: center;
  border-style: solid;
  height: 10em;
}
#upload-file-prompt{
  font-family: 'Comfortaa', cursive;
  color: #555;
}
#file-select{
  font-family: 'Comfortaa', cursive;
  color: #555;
  border-style: none;
}
.custom-file-upload{
  font-family: 'Comfortaa', cursive;
  border-style: none;
  background-color: #888;
  padding: 8px 16px;
  cursor: pointer;
  color: #fff;
  width: 0.1px;
  height: 0.1px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
}
.custom-file-upload:hover{
  background-color: #aaa;
}
.custom-file-upload:active{
  background-color: #aaa;
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
}
#selected_filename{
  font-family: 'Comfortaa', cursive;
  color: #555;
  margin-left: 1em;
  margin-right: 2em;
}
input[type="file"]{
  display: none;
}

#upload-button{
  font-family: 'Comfortaa', cursive;
  border-style: none;
  background-color: #888;
  padding: 8px 16px;
  cursor: pointer;
  color: #fff;
  width: 8em;
  font-size: 1.01em;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
}
#upload-button:hover{
  background-color: #aaa;
}
#upload-button:active{
  background-color: #aaa;
  -webkit-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
}

</style>
