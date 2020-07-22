/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import axios from "axios";
import Iine from './components/Iine.vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import Keijiban from './components/Keijiban.vue';
import TopLink from "./components/TopLink.vue";

Vue.use(VueRouter);

Vue.component('top', require('./components/Top.vue').default);
Vue.component('top-link', require('./components/TopLink.vue').default);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/iine',
			name: 'iine',
			component: Iine	
		},
		{
			path: '/keijiban',
			name: 'keijiban',
			component: Keijiban
		}
	]
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
	router
});
