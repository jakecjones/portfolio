<template>
  <div id="app">
        <transition name="fade" mode="out-in">

    <router-view/>
        </transition>

    <Header :key="$route.fullPath"/>
  </div>
</template>
<script>



import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
    data () {
    return {
      darkMode: false,
      checkDark: false,
      onSwitch: 10,
      backgroundOne: '#eee',
      backgroundTwo: '#fff',
      contrastBackground: '#393939',
      colorOne: '#393939',
      colorTwo: '#fff',
      colorTwo: '#fff',
      accentOne: '#46ce90'
    }
  },
  watch: {
    darkMode(val) {
      if (val) {
        this.onSwitch = 36
        this.backgroundOne = '#333'
        this.backgroundTwo = '#444'
        this.contrastBackground = '#eee'
        this.colorOne = '#fff'
        this.colorTwo = '#444'
        this.accentOne = '#46ce90'
      } else {
        this.onSwitch = 10
        this.backgroundOne = '#eee'
        this.backgroundTwo = '#fff'
        this.contrastBackground = '#393939'
        this.colorOne = '#393939'
        this.colorTwo = '#fff'
        this.accentOne = '#46ce90'
      }
    }
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

a {
  color: #46ce90;
  text-decoration: none;
  font-weight: bold;
}
p {
  orphans: 3 !important;
  widows: 3 !important;
}
* {
  transition: all .35s ease-in-out;
}
::selection {
  background: rgb(239, 239, 239); /* WebKit/Blink Browsers */
  color: #fff;
}
::-moz-selection {
  background: rgb(239, 239, 239); /* Gecko Browsers */
  color: #fff;
}

html,body {
  margin: 0;
  padding: 0;
  background-color: #eee;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.info {
  width: 90%;
  max-width: 900px;
  margin: 1em auto;
  text-align: left;
  padding: 5px;
}

.info h3 {
  letter-spacing: 1px;
  font-size: 1.8em;
}
.info p {
  font-family: 'avenir', 'nunito sans', sans-serif;
  letter-spacing: 1px;
  font-size: 1em;
  max-width: 90%;
}
.info h4 {
  max-width: 500px;
}
.info p {
  font-family: 'avenir', 'nunito sans', sans-serif;
  letter-spacing: 1px;
  font-size: 1em;

  /* border-left: 4px solid #333; */
  /* padding-left: 1em; */
}

.info a {
  /* text-decoration: none; */
  color: inherit;
  font-weight: bold;
}


#app {
  font-family: 'avenir', 'nunito sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
  margin-top: 60px;
  width: 100%;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@keyframes animate {
  0% {
    width: 100%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}

@media only screen and (max-width: 900px) {
  .info {
    width: 90%;
    max-width: 90%;
    margin: 0 auto;
  }
  .info p {
    max-width: 100%;
  }
}


</style>
