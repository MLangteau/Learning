
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');  //  This is where we pull in the bootstrap.js file (not the framework)

window.Vue = require('vue');
import Buefy from 'buefy';

Vue.use(Buefy);  //  using all of the buefy vue files

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({    // will set up on each page as needed
//     el: '#app'
// });
