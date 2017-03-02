// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import 'assets/css/theme_styles.css'
import 'assets/css/loading-bar.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routers from './routers'
import Mock from './mock'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import bootstrap from 'bootstrap'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI);

var router = new VueRouter({
  routes:routers
});

new Vue({
  router
}).$mount('#app');
