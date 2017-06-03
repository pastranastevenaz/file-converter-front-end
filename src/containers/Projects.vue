<template>
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Sample Posts
        </div>
        <div class="">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in posts">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

  export default{
    name: 'projects',
    data: function(){
      return{
        posts: []
      }
    },
    methods: {
      loadProjects: function(){
        // Would not work with this. The scope was messed up.
        // Had to assign this to self variable in order for
        // HTTP request to assign to post variable
        var self = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
            console.log(response);
            self.posts=response.data
          })
          .catch(function (error) {
            console.log(error);
          });
        // axios.get('https://jsonplaceholder.typicode.com/posts').then((
        //   response)=>{
        //     this.posts=response.data
        //   },(err)=>{
        //     console.log(err)
        //   })
      }
    },
    mounted(){
      this.loadProjects()
    },
  }
</script>

<style scoped>

</style>
