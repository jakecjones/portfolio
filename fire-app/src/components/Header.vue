<template>
<header :style="{ backgroundColor: $parent.backgroundTwo}">

  <div @click="$parent.darkMode = !$parent.darkMode" class="dark-mode">
    <div :style="{ backgroundColor: $parent.colorOne}" class="line"></div>
    <div :style="{ left: $parent.onSwitch + 'px', borderColor: $parent.colorOne, backgroundColor: $parent.colorTwo}" class="circle"></div>
  </div>


  <div @click="addActive" class="nav-button">
    <div :style="{ backgroundColor: $parent.colorOne}" class="line"></div>
    <div :style="{ backgroundColor: $parent.colorOne}" class="line"></div>
    <div :style="{ backgroundColor: $parent.colorOne}" class="line"></div>
  </div>

  <section :class="{navigation: activeNav}" class="container page" :style="{backgroundColor: $parent.contrastBackground}">
      <img src="/static/neon-decor-2.svg" alt="jake jones lamp logo">
      <img src="/static/neon-decor-2.png" alt="jake jones lamp logo">
      <img src="/static/neon-decor-2.png" alt="jake jones lamp logo">

        <ul>
          <router-link active-class="active" to="/"><li :style="{ color: $parent.colorTwo}">work</li></router-link>
          <router-link active-class="active" to="/resume"><li :style="{ color: $parent.colorTwo}">resume</li></router-link>
          <router-link active-class="active" to="/contact"><li :style="{ color: $parent.colorTwo}">contact</li></router-link>
        </ul>
<!-- 
                    <input :style="{backgroundColor: $parent.backgroundTwo}" type="text" v-model="name" placeholder="name">
            <input :style="{backgroundColor: $parent.backgroundTwo}" type="email" v-model="email" placeholder="email">
            <input :style="{backgroundColor: $parent.backgroundTwo}" type="text" v-model="message" placeholder="message"> -->

  </section>

</header>

</template>

<script>
import firebase from 'firebase'
import { firestore } from '../main'


export default {
  name: 'header',
  data () {
    return {
      activeNav: false,
      isLoggedIn: false,
      currentUser: false,
      photoUrl: '',
      displayName: '',
      email: '',
      searchHidden: false,
      errorClass: 'errorClass',
      searchExpand: 'searchExpand',
      users: '',
      query: ''
    }
  },
  methods: {
    addActive() {
      this.activeNav = !this.activeNav
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    }
  },
  firestore () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
      this.photoURL = firebase.auth().currentUser.photoURL
      this.uid = firebase.auth().currentUser.uid
      return {
        users: firestore.collection('users').where('uid', '==', this.uid)
      }
    }
  },
  created () {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
      this.photoURL = firebase.auth().currentUser.photoURL
      this.uid = firebase.auth().currentUser.uid
    }
  }
}
</script>

<style>
/* .active {
  position: relative;
}
.active::after {
  position: absolute;
  content: "";
  width: 100px;
  left: -50px;
  bottom: 15px;
  height: 2px;
  background-color: #fff;
} */
</style>

<style lang="scss" scoped>

.dark-mode {
  position: fixed;
  top: 25px;
  left: 30px;
  width: 50px;
  z-index: 9999999;
  text-align: center;
  padding: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
  height: 10px;
  cursor: pointer;

    .line {
      width: calc(100% - 25px);
      height: 3px;
      background-color: #444;
      margin: 3px;
      border-radius: 10px;
      position: absolute;
      left: 10px;
      top: 3px;
    }
    .circle {
      width: 10px;
      height: 10px;
      border: 2px solid #444;
      border-radius: 50%;
      position: absolute;
      transition: all .35s ease-in-out;
      background-color: #fff;
    }
}




.nav-button {
  position: fixed;
  top: 20px;
  right: 30px;
  width: 40px;
  z-index: 9999999;
  text-align: center;
  padding: 0 5px 5px 5px;
  display: flex;
  flex-direction: column;
}
.nav-button .line {
  width: 90%;
  height: 3px;
  background-color: #444;
  margin: 3px;
  border-radius: 10px;
}

.nav-button .line:nth-child(1) {
  width: 40%;
  align-self: flex-end;
}
.nav-button .line:nth-child(2) {
  width: 100%;
}
.nav-button .line:nth-child(3) {
  width: 40%;
}

header {
  width: 100%;
  background-color: #fff;
  color: #000;
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 9999999;
}
input[type="text"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="time"],
input[type="url"],
input[type="password"],
textarea,
select {
    position: absolute;
    top: 8px;
    right: 1.5em;
    font-family: 'avenir', 'nunito sans', sans-serif;
    text-transform: lowercase;
    letter-spacing: 2px;
    background: #FFF;
    border-style: none;
    box-shadow: 3px 3px 3px #eee;
    border-radius: 25px;
    font-size: 16px;
    margin: 0;
    outline: 0;
    width: 0;
    padding: 12px 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    text-align: center;
    margin-bottom: 15px;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

}
input[type="text"].searchExpand {
  width: 30%;
  padding: 12px 7px;
}

.button {
  margin: 0 10px;
  width: auto;
  height: auto;
  padding: 8px 55px;
  display: inline-block;
  color: #000;
  border: 1px solid #333;
  font-weight: bold;
}
.conversion-button {
  background-color: #161616;
  border: 3px solid #000;

  color: #fff;
}
.sign-in {
  position: absolute;
  top: 10px;
  left: 15px;
}
.logo {
  margin-top: 7px;
  width: 50px;
}
.search-icon {
  right: 30px;
  top: 5px;
  width: 50px;
  position: absolute;
}

.search {
  padding: 5px 20px;
  border-radius: 20px;
  font-family: 1.2em;
  font-family: Georgia;
  background: white;
  line-height: 3;
  border: none;
  position: absolute;
  top: 12px;
  right: 20px;
  width: 300px;
  transition: .2s ease-in-out;
  font-family: "source sans pro";
  letter-spacing: 0.1em;
  display: none;
}
.search:focus {
    background-color: #EEEEEE;
    border: none;
    outline: none;
    color: #000;
}

#user-image {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  /* border: 2px solid #323232; */
  position: absolute;
  top: 15px;
  left: 30px;
  background-size: contain;
}
.beta {
  color: #fff;
  display: inline-block;
  font-family: 'avenir', 'nunito sans', sans-serif;
  font-weight: 300;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  width: 100%;
  position: fixed;
  top: 65px;
  left: 0;
  background-color: #333;
  text-align: left;
  padding: 5px 0 5px 1em;
  display: none;
  /* position: absolute;
  left: 4em; */
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

.navigation {
  width: 300px !important;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.social-group a img{
  width: 20px;
  display: block;
}

.container {
  transition: .3s ease-in-out;
  margin: 65px auto 0 auto;
  padding: 50px 0;
  height: calc(100% - 65px);
  width: 0;
  right: 0;
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
  }

  ul {
    margin-top: -10vh;
    position: absolute;
    left: 50px;
  }

  li {
    display: block;
    color: #fff;
    text-align: left;
    font-size: 2.2em;
    font-weight: 100;
    margin-bottom: 2vh;
    padding-bottom: 1vh;
    border-bottom: 1px solid #aaa;
  }

  // background-color: #000;
}
.container form {
  border-right: 2px solid white;
  margin-right: 2em;
  padding-right: 0;
}

.container fieldset{
    border: none;
}
.container legend {
    font-size: 1.4em;
    margin-bottom: 10px;
}
.container label {
    display: block;
    margin-bottom: 8px;
}
.container input[type="text"],
.container input[type="date"],
.container input[type="datetime"],
.container input[type="email"],
.container input[type="number"],
.container input[type="search"],
.container input[type="time"],
.container input[type="url"],
.container input[type="password"],
.container textarea,
.container select {
    font-family: "source sans pro", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    /* background: #E5E5E5; */
    border: none;
    border-radius: 4px;
    font-size: 1em;
    margin: 0;
    outline: 0;
    padding: 25px 7px;
    width: 90%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    /* background-color: #e8eeef; */
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    margin-bottom: 15px;
    cursor: pointer;


}
.container input[type="text"]:focus,
.container input[type="date"]:focus,
.container input[type="datetime"]:focus,
.container input[type="email"]:focus,
.container input[type="number"]:focus,
.container input[type="search"]:focus,
.container input[type="time"]:focus,
.container input[type="url"]:focus,
.container input[type="password"]:focus,
.container textarea:focus,
.container select:focus{
    background: #FFF;
}
.container select{
    -webkit-appearance: menulist-button;
    height:35px;
}
/* .container .number {
    background: #1abc9c;
    color: #fff;
    height: 30px;
    width: 30px;
    display: inline-block;
    font-size: 0.8em;
    margin-right: 4px;
    line-height: 30px;
    text-align: center;
    text-shadow: 0 1px 0 rgba(255,255,255,0.2);
    border-radius: 15px 15px 15px 0px;
} */
.out-link  {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'avenir', 'nunito sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: lighter;
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  margin: 0 auto;
  outline: 0;
  padding: 20px 7px;
  width: 70%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: unset;
  color: #fff;
  text-align: right;
  transition: all .5s ease-in-out;
  text-decoration: none;
  display: block;
}
.container input[type="submit"],
.container input[type="button"]
{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'avenir', 'nunito sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-weight: lighter;
  border: none;
  border-radius: 4px;
  font-size: 1.2em;
  margin: 0 auto;
  outline: 0;
  padding: 20px 7px;
  width: 70%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: unset;
  color: #fff;
  text-align: right;
  transition: all .5s ease-in-out;
  cursor: pointer;

}
.container input[type="submit"]:hover,
.container input[type="button"]:hover
{
    color: #999;
}

@media only screen and (max-width: 900px) {

  .button {
    margin: 5px 10px;
    width: auto;
    height: auto;
    padding: 8px 55px;
    display: inline-block;
    /* background-color: #333; */
    color: #000;
    border: 1px solid #333;
    font-weight: bold;
    display: none;
  }

  .conversion-button {
    background-color: #eee;
    border: 3px solid #000;
    display: block;
    color: #333;
    font-size: 12px;
    padding: 8px 20px;
  }


}
</style>
