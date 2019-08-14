<template>
  <section>
    <footer>
      <div class="footer-group">
        <h3>Lamplight</h3>
        <ul>
          <router-link to="/"><li>Home</li></router-link>
          <router-link to="/portfolio"><li>Portfolio</li></router-link>
        </ul>
      </div>
      <div class="footer-group">
        <h3>Resources</h3>
        <ul>
        <router-link to="/about"><li>About</li></router-link>
        <router-link to="/careers"><li>Careers</li></router-link>
        <router-link to="/contact"><li>Contact</li></router-link>
      </ul>
      </div>

      <div class="footer-group">
        <!-- <router-link to="/addartwork"><img src="../assets/icons/logo.svg"></router-link> -->
        <br>
        <!-- <p>Active Users: <strong>{{users.length}}</strong></p> -->
      </div>
      <div class="footer-group-3">
        <a href="https://www.facebook.com/lamplightheritage" target="_blank"><img src="../assets/icons/fb.svg"></a>
        <a href="https://www.instagram.com/lamplightheritage/" target="_blank"><img src="../assets/icons/insta.svg"></a>
        <a href="https://twitter.com/llightheritage" target="_blank"><img src="../assets/icons/twitter.svg"></a>
      </div>
      <div class="footer-group-2">
        <h3>© 2019 Lamplight Heritage. All rights reserved.</h3>
      </div>


    </footer>
  </section>

</template>

<script>
import { firestore } from '../main'
import * as firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'footer',
  data () {
    return {
      isLoggedIn: false,
      currentUser: false,
      photoUrl: '',
      displayName: '',
      email: '',
      users: []
    }
  },
  firestore () {
    return {
      users: firestore.collection('users')
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.isLoggedIn = false
        this.$router.push('/login')
      })
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
    }
  }

}
</script>
<style scoped>

footer {
  width: 100%;
  height: auto;
  position: relative;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 99999;
}

.footer-group-3 {
  position: absolute;
  bottom: 3em;
  left: 2em;
}
.footer-group-3 a img{
  width: 20px;
  height: auto;
  display: block;
  margin: 1.2em 0;
}

.footer-group {
  font-size: 1.2em;
  width: auto;
  height: 100%;
  text-align: left;
  margin: 1em 2em 4em 2em;
}
.footer-group img {
  width: 50px;
  height: 50px;
  margin: 2.6em 0 0 0;
}
.footer-group ul {
  list-style: circle;
  display: block;
}
.footer-group h3 {
  font-size: 1em;
}
.footer-group ul li {
  display: block;
  text-align: left;
  padding: 2px 0;
  margin: 0;
  font-size: .9em;

  /* list-style: circle; */
}
.footer-group ul a {
  text-decoration: none;
  color: inherit;
}

.footer-group-2 {
  position: absolute;
  bottom: 10px;
  left: 1.2em;
  display: block;
  height: auto;
}
.footer-group-2 h3 {
  font-weight: lighter;
  padding: 1em;
  font-size: .7em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
span {
  color: #42b983;
}
@media only screen and (max-width: 900px) {
  footer {
    display: block;
    padding: 0 0 2em 0;
  }
  .footer-group {
    font-size: 1em;
    width: 40%;
    height: auto;
    text-align: center;
    margin: 0 5px;
    display: inline-block;
    vertical-align: top;

  }
  .footer-group ul li{
    text-align: center;
    padding: 2px 0;
    font-size: 1em;
    text-align: left;
  }
  .footer-group-3 {
    position: relative;
    width: 90%;
    line-height: 1em;
    bottom: auto;
    left: auto;
    margin: 10px auto;
  }
  .footer-group-2 {
    position: relative;
    width: 90%;
    line-height: 1em;
    bottom: auto;
    left: auto;
    margin: 10px auto;
  }
  .footer-group-3 a img{
    display: inline-block;
    margin: 15px 10px 0 10px;
    width: 30px;

  }
  .footer-group h3 {
    font-size: 1.2em;
    text-align: left;
  }
  .footer-group p {
    font-size: 1.2em;
    text-align: left;
  }
}
</style>
