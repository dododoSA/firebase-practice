import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDaBZ7cSWHxcS2sjqU4iB1Z1B_VNusLJZs",
  authDomain: "chat-app-e7f82.firebaseapp.com",
  databaseURL: "https://chat-app-e7f82.firebaseio.com",
  projectId: "chat-app-e7f82",
  storageBucket: "chat-app-e7f82.appspot.com",
  messagingSenderId: "169467057307",
  appId: "1:169467057307:web:49918401535dbdb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
