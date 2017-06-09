<template lang="html">
  <div class="uploader">
    <!-- <form id="uploader" enctype="multipart/form-data" v-on:change="uploadFile">
      <p id="upload-file-prompt">Select a file to upload</p> -->
      <!-- <label v-on:click="greet" for="file-select"  class="custom-file-upload">Choose file</label> -->
      <!-- <span id="selected_filename">No file selected</span> -->
      <!-- <input type="file" id="file" name="file" class="inputFile"><br><br>
      <button type="submit" id="upload-button">Upload</button>
    </form> -->

    <div id="app">
      <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" v-on:change="onFileChange">
      </div>
      <div v-else>
        <img :src="image" />
        <button v-on:click="removeImage">Remove image</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

// var formData = new FormData();
// var imageFile = document.querySelector('#file');
//
// axios.post('upload_file', formData, {
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   }
// })

export default {
  name: 'uploader',
  data: function(){
    return{
      image: ''
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var that = this;

      reader.onload = (e) => {
        that.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Comfortaa);

img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

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
  /*display: none;*/
  /*visibility: hidden;*/
}

#upload-button{
  font-family: 'Comfortaa', cursive;
  border-style: none;
  background-color: #888;
  padding: 12px 16px;
  cursor: pointer;
  color: #fff;
  width: 70%;
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
