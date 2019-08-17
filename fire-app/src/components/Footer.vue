<template>
  <section>
    <footer> 
    <div class="slantRight" :style="{borderBottom: ' 30px solid #46ce90'}"></div>

      <div class="footer-group">

        <!-- <h3>Jake Jones</h3> -->
        <ul>
          <router-link to="/"><li>work</li></router-link>
          <router-link to="/resume"><li>resume</li></router-link>
          <router-link to="/contact"><li>contact</li></router-link>
        </ul>
      </div>


      <div class="footer-group-3">
        <a href="https://github.com/jakecjones" target="_blank"><img src="../assets/icons/github-01.png"></a>
        <a href="https://www.linkedin.com/in/jake-jones-47ba0914b/" target="_blank"><img src="/static/in-01.png"></a>
      </div>
      <div class="footer-group-2">
        <h3>© 2019 Jake Jones. All rights reserved.</h3>
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
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: row;
  z-index: 99999;
  padding-bottom: 50px !important;
}

.slantRight {
    position: absolute;
    content: "";
    border-left: 100vw solid transparent;
    height: 0;
    width: 0;
    bottom: -1px;
    left: 0;
    z-index: 2;
}

.footer-group-3 {
  position: absolute;
  bottom: 3em;
  left: 2em;
}
.footer-group-3 a img{
  width: 40px;
  height: auto;
  display: block;
  margin: 1.2em 0;
}

.footer-group {
  font-size: 1em;
  font-weight: 300;
  width: 85%;
  height: 100%;
  margin: 1em 2em 1.5em 4em;
  text-align: right;
}
.footer-group img {
  width: 50px;
  height: 50px;
  margin: 2.6em 0 0 0;
}
.footer-group ul {
  list-style: circle;
  display: block;
  float: right;
  
}
.footer-group h3 {
  font-size: 2em;
}
.footer-group ul li {
  display: block;
  text-align: left;
  padding: 2px 0;
  margin: 0;
  font-size: 2em;
  text-align: left;
  font-weight: 200;


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
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    padding: 2em 0 0 0;
  }
  .footer-group ul li{
    text-align: center;
    padding: 2px 0;
    font-size: 1.2em;
    text-align: left;
    display: inline-block;
    margin: 0 10px;

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
    width: 50px;

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
