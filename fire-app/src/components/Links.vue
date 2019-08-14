<template>
<section class="next">
  <div class="info">
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</section>

</template>

<script>
import { firestore } from '../main'
import firebase from 'firebase'

export default {
  name: 'heroSection',
  data () {
    return {
      title: null,
      button: null,
      link: null,
      alt: null,
      image: '',
      slideId: '',
      heroSection: [],
      editData: [],
      errors: [],
      showNav: false,
      editClicked: false
    }
  },
  firestore () {
    return {
      heroSection: firestore.collection('heroSection')
      }
    }
}
</script>

<style scoped>

.st0{fill:none;stroke:#EEEEEE;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st1{fill:#EEEEEE;}
.st2{fill:#636363;}
.st3{fill:none;stroke:#333;stroke-width:5;stroke-miterlimit:10;}

.st3 {
  transition: .1s ease-in-out;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
}
svg:hover .st3 {
  animation: dash 1.5s linear forwards;
}

.st-00{fill:#EEEEEE;}
.st-01{fill:none;stroke:#EEEEEE;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st-02{fill:none;stroke:#333333;stroke-width:5;stroke-miterlimit:10;}

.st-02 {
  transition: .1s ease-in-out;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
}
svg:hover .st-02 {
  animation: dash 1.5s linear forwards;
}

/* .st-10{fill:#EEEEEE;}
.st-11{fill:none;stroke:#333333;stroke-width:5;stroke-miterlimit:10;}
.st-12{fill:none;stroke:#EEEEEE;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st-13{fill:none;stroke:#EEEEEE;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} */

.st-10 {
  transition: .1s ease-in-out;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
}
svg:hover .st-10 {
  animation: dash 1.5s linear forwards;
}

.st-10{fill:none;stroke:#333333;stroke-width:5;stroke-miterlimit:10;}
.st-11{fill:none;stroke:#EEEEEE;stroke-width:5;stroke-linecap:round;}
.st-12{fill:none;stroke:#EEEEEE;stroke-width:6;stroke-linecap:round;}
.st-13{fill:#EEEEEE;}

@keyframes dash {
  0% {
    /* stroke-dashoffset: 2; */
  }

  30% {
    stroke-dashoffset: 0;
  }

  100% {
      stroke-dashoffset: 4000;
    stroke: #eee;
  }
}

.next {
  width: 100%;
  text-align: center;
  height: auto;
  padding: 3em 0 3em 0;
  background-color: #000;
  color: #eee;
}
.info-icons {
  width: 20%;
  display: inline-block;
  max-width: 250px;
}

.info a {
  display: block;
  font-size: 1.2em;
  text-decoration: none;
  transition: .3s all ease-in-out;
  margin: 1em 0;
  width: 50%;
  padding: 5px;
  font-family: 'didot', 'serif';
  text-transform: uppercase;
  letter-spacing: .2em;
}


img:hover {
  opacity: 0.8;
}


@media only screen and (max-width: 900px) {


  .info-icons {
    width: 30%;
    /* display: block; */
    margin: 0 auto;
  }

}
</style>
