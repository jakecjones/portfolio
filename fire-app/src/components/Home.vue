<template>
  <section class="display">

    <div class="slider" :style="{backgroundColor: $parent.backgroundOne}" >
      <div class="sliderTwo" :style="{borderBottom: ' 120px solid ' + $parent.contrastBackground}"></div>

          <div class="slide">
            
            <div class="page-heading">
            <h1 :style="{color: $parent.colorOne}">Jake Jones</h1>
            <p :style="{color: $parent.colorOne}">Web Developer <br> & creative dude</p>
            <router-link to="/contact"><button :style="{backgroundColor: $parent.accentOne, border: $parent.accentOne}">Contact Now</button></router-link>
          </div>
            <div class="svg-container">

                <svg version="1.1" x="0px" y="0px"
                  viewBox="0 0 500 798" style="enable-background:new 0 0 500 798;" xml:space="preserve">
                  <g>
                    <polyline class="st0" points="342.2,195.6 444.1,317.5 383,317.5 	"/>
                    <polyline class="st0" points="57,798 56.9,297.5 341.4,13 341.4,195.6 219.5,317.5 289,317.5 	"/>
                    <path class="st0" d="M383,317.5c-0.2,25.7-21.2,46.5-47,46.5s-46.7-20.8-47-46.5H383z"/>
                    <g>
                      <line class="st0" x1="342" y1="419" x2="342" y2="478"/>
                      <line class="st0" x1="342" y1="487" x2="342" y2="511"/>
                      <line class="st0" x1="342" y1="395" x2="342" y2="409"/>
                    </g>
                    <g>
                      <line class="st0" x1="378.9" y1="388.3" x2="408.3" y2="439.5"/>
                      <line class="st0" x1="412.7" y1="447.3" x2="424.7" y2="468.1"/>
                    </g>
                    <g>
                      <line class="st0" x1="282.2" y1="412.6" x2="257.9" y2="466.3"/>
                      <line class="st0" x1="292.1" y1="390.7" x2="286.3" y2="403.4"/>
                    </g>
                  </g>
                </svg>
                <img class="lamp-glow" src="/static/lamp-glow.png" alt="jake jones lamp logo">
                <img class="lamp-glow" src="/static/lamp-glow.png" alt="jake jones lamp logo">

            </div>
          </div>
    </div>

    <section class="sub-section-heading" :style="{backgroundColor: $parent.contrastBackground}">
      <div class="page-heading">
        <h2 :style="{color: $parent.colorTwo}">Tools</h2>
      </div>
    </section>



    <!-- <Links :key="$route.fullPath" />
    <Footer :key="$route.fullPath" /> -->





  </section>

</template>

<script>
import { firestore } from '../main'
import firebase from 'firebase'
import Links from './Links.vue'
import Footer from './Footer.vue'
import { Carousel, Slide } from 'vue-carousel'
import { page } from 'vue-analytics'



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
      data: [
        {
        id: 0,
        content: this.content
        },
        {
        id: 1,
        content: this.content,
        },
        {
        id: 2,
        content: this.content,
        },
        {
        id: 3,
        content: this.content,
        },

      ],
      editData: [],
      errors: [],
      showNav: false,
      editClicked: false
    }
  },
  components: {
    Links,
    Footer,
    Carousel,
    Slide
  },
  firestore () {
    return {
      heroSection: firestore.collection('heroSection')
      }
    }
}
</script>


<style lang="scss" scoped>



* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* svg styles */

  .page-heading {
    width: 60%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .svg-container {
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 2vw;
  }

  svg {
     width: 80%;
     position: absolute;
     bottom: 0;
     left: 0;
  }
@keyframes lamp {
  0% {
    opacity: .8;
  }
  45% {
    opacity: .4;
  }
  100% {
    opacity: 1;
  }
}


  .lamp-glow {
     width: 80%;
     position: absolute;
     bottom: 0;
     left: 0;
     opacity: 1;
     animation: lamp 2s ease-in alternate infinite;
  }



  .st0{fill:none;stroke:#00DCDD;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}

  // .st0 {
  //     stroke-dasharray: 800;
  //     stroke-dashoffset: 1400;
  //     animation: dash 5s linear forwards;
  // }
  //   @keyframes dash {
  //   to {
  //     stroke-dasharray: 0;
  //     stroke-dashoffset: 0;

  //   }
  // }

  .page-heading h1 {
    font-family: 'avenir', sans-serif;
    font-weight: bold;
    font-size: 8vw;
  }
  .page-heading h2 {
    font-family: 'avenir', sans-serif;
    font-weight: bold;
    font-size: 4vw;
  }



.slider {
  background-color: #eee;
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15%;
  position: relative;
  transition: all .35s ease-in-out;
}

// .slider::after {
//     position: absolute;
//     content: "";
//     border-bottom: 120px solid  #393939;
//     border-right: 100vw solid transparent;
//     height: 0;
//     width: 0;
//     bottom: 0;
//     left: 0;
//     transition: all .35s ease-in-out;

// }

.sliderTwo {
    position: absolute;
    content: "";
    border-bottom: 120px solid  #393939;
    border-right: 100vw solid transparent;
    height: 0;
    width: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
}


.slide {
  /* background-image: url(../assets/icons/home-splash.jpg); */
   height: 600px;
   display: flex;
   flex-direction: row;
   /* background-size: cover;
   background-position: center;
   -webkit-transform: translate3d(0,0,0) !important; */
}

.page-heading h1 {
  padding: 0 0 0 0;
  width: auto;
  margin: 0 0 20px 100px;
  text-align: left;
  position: relative;
  z-index: 1;
}

.page-heading h2 {
  padding: 2em 0 0 0;
  width: auto;
  margin: 0 0 20px 100px;
  text-align: left;
  position: relative;
  z-index: 1;
}
.slide p {
  font-size: 2em;
  padding: 10px 0 2px 0;
  width: 50%;
  margin: 0 auto 2em 100px;
  z-index: 1;
  text-align: left;
  position: relative;
  color: #393939;
}
.slide button {
  font-size: 1.1em;
  padding: 1em 2em;
  width: auto;
  margin-left: 100px;
  background-color: #569664;
  border: 2px solid #569664;
  float: left;
  color: #fff;
  font-weight: 400;
  font-family: 'avenir', sans-serif;
  letter-spacing: 0.3em;
  font-style: italic;
  position: relative;
  z-index: 1;
  box-shadow: 3px 3px 15px #666;
}

.sub-section-heading {
  background-color: #393939;
  height: 400px;
  margin: 0;
  display: flex;
  justify-content: center;  
  h2 {
    margin: 0;
    width: 100%;
  }
}


@media only screen and (max-width: 900px) {

  .slider {
    height: 400px;
  }

  .slide {
    height: 400px;
    background-size: cover;
    background-position: center;
  }
  .VueCarousel-pagination {
      /* margin: 10px auto;
      z-index: 99; */
      display: none;
    }

  .page-heading h1 {
    font-size: 2.4em;
    width: 90%;
    margin: 0 auto 0 auto;
    text-align: left;
    font-weight: 900;
  }
  .page-heading h2 {
    font-size: 2.4em;
    width: 90%;
    margin: 0 auto 0 auto;
    text-align: left;
    font-weight: 900;
  }
  .slide p {
    font-size: 2em;
    padding: 0;
    width: 90%;
    margin: 0 auto 2em auto;
    text-align: left;

  }
  .slide button {
    font-size: .9em;
    padding: 1em 2em;
    width: auto;
    margin-left: 5%;
    background-color: #569664;
    border: 2px solid #569664;
    float: left;
    color: #fff;
    font-weight: 400;
    font-family: 'avenir', sans-serif;
    letter-spacing: 0.3em;
    font-style: italic;
  }


}
</style>
