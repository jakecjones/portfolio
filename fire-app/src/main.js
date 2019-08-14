import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false


Vue.use(VueFire)


firebase.initializeApp({
  apiKey: "AIzaSyBXb85i_GWRaDe0Wci_mu132m0IEtUnTQE",
  authDomain: "roxy-landing.firebaseapp.com",
  databaseURL: "https://roxy-landing.firebaseio.com",
  projectId: "roxy-landing",
  storageBucket: "roxy-landing.appspot.com",
  messagingSenderId: "536365806210"
})

export const firestore = firebase.firestore()

new Vue({
  el: '#app',
  firestore () {
      return {
        gallery: firestore.collection('galleryTwo'),
        userData: firestore.collection('users')
      }
  },
  router,
  components: { App },
  template: '<App/>'
})
