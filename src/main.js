import Vue from 'vue'
import navbar from './components/Navbar'
import router from './router'
/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
        <router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  components: {
    navbar
  }
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
