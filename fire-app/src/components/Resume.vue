<template>
  <section class="display">

    <!-- <div class="slider" :style="{backgroundColor: $parent.backgroundOne}" >
      <div class="slantLeft" :style="{borderBottom: ' 50px solid ' + $parent.contrastBackground}"></div>

          <div class="slide">
            
            <div class="page-heading">
            <h1 :style="{color: $parent.colorOne}">Resume</h1>
            <p :style="{color: $parent.colorOne}">Web Developer <br>
            & Designer
            </p>

            <router-link to="/contact"><button :style="{backgroundColor: $parent.accentOne, border: $parent.accentOne}">Contact</button></router-link>
          </div>
            <div class="svg-container">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 836 1525" style="enable-background:new 0 0 836 1525;" xml:space="preserve">

                <circle class="st0" cx="283" cy="292" r="64"/>
                <circle class="st0" cx="174" cy="958" r="32"/>
                <polygon class="st0" points="253.9,613.8 337.4,925.6 565.6,697.4 "/>
                <polygon class="st0" points="583.6,456 538.2,534.8 629.1,534.8 "/>
                <polyline class="st0" points="402.6,1354 511.9,1244.7 451.6,1184.4 661,975 "/>
                </svg>
                <img class="lamp-glow" src="/static/x-glow-01.png" alt="jake jones lamp logo">
                <img class="lamp-glow" src="/static/x-glow-01.png" alt="jake jones lamp logo">
                <img class="lamp-glow" src="/static/x-glow-01.png" alt="jake jones lamp logo">

            </div>
          </div>
    </div> -->

    <section class="sub-section-heading" :style="{backgroundColor: '#46ce90'}">

      <img class="decor-left" src="/static/neon-decor-2.svg" alt="jake jones lamp logo">
      <img class="decor-left" src="/static/neon-decor-2.png" alt="jake jones lamp logo">
      <img class="decor-left" src="/static/neon-decor-2.png" alt="jake jones lamp logo">

      <div class="page-heading">
        <h2>Resume</h2>
        <p class="description">I sometimes find it quite awkard to talk of my achievments in my career. It’s hard to say “I’m the best at this,” or “I’m really great at that.” I would however llke to show you a few problems I have had to solve that make me very proud to be a web deveoloper.</p>

      </div>
      <div class="slantRight" :style="{borderBottom: ' 50px solid ' + $parent.backgroundTwo}"></div>

    </section>

    <section class="resume section" :style="{backgroundColor: $parent.backgroundTwo, color: $parent.colorOne}">
                <img class="decor-glow" src="/static/decor-glow.png" alt="jake jones lamp logo">
                <img class="decor-glow" src="/static/decor-glow.png" alt="jake jones lamp logo">
                <img class="decor-glow" src="/static/decor.svg" alt="jake jones lamp logo">
      <div class="group">
        <h3>Experience</h3>
        <h4>Roxy Art Market</h4>
        <p>UX/UI</p>
        <p>3D model automation</p>
        <p>Front-end development</p>
        <p>Back-end development</p>
        <p>Database architecture</p>
        <p>API integration</p>

        <h4>Bahlr Media</h4>
        <p>Front-end Development</p>
        <p>Craft CMS Development</p>
        <p>Shopify Development</p>

        <h4>Bixell Design Studio</h4>
        <p>Front-end Development</p>
        <p>Logo Design</p>
        <p>Branding</p>
      </div>
      <div class="group">
        <h3>Education</h3>
        <h4>North Idaho College</h4>
        <p>Associates of Science</p>
        <p>Associates of Arts</p>

        <h3>Tools</h3>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Javascript</p>
        <p>Node.js</p>
        <p>Vue.js</p>
        <p>Webpack</p>
        <p>Three.js</p>
        <p>SCSS</p>
        <p>NPM</p>
        <p>Firebase</p>
        <p>Webhooks</p>
        <p>GIT</p>
        <p>Craft CMS</p>
        <p>Shopify</p>
        <p>PHP</p>
        <p>WebGL</p>
        <p>SVG Animation</p>
      </div>

      <div class="group">
        
      </div>


    </section>

    

    <Footer/> 





  </section>

</template>

<script>
import { firestore } from '../main'
import firebase from 'firebase'
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
      typer: [
          "Designer.",
          "Engineer.",
          "Creative dude."
      ],
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

$break-small: 800px;


  .svg-container {
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 2vw;
      @media screen and (max-width: $break-small) {
        width: 45%;
      }
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
  // .st0 {
  //     stroke-dasharray: 800;
  //     stroke-dashoffset: 1400;
  //     animation: dash 2s linear forwards;
  // }
  //   @keyframes dash {
  //   to {
  //     stroke-dasharray: 0;
  //     stroke-dashoffset: 0;

  //   }
  // }


      .lamp-glow {
        width: 80%;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 1;
        animation: lamp 2s ease-in alternate infinite;
      }

      .decor-glow {
        width: 200px;
        position: absolute;
        right: 100px;
        top: 0;
        opacity: 1;
        animation: lamp 2s ease-in alternate infinite;
      }

        .ar-glow {
        width: 150px;
        position: absolute;
        right: 10px;
        bottom: 10px;
        opacity: 1;
        animation: lamp 2s ease-in alternate infinite;
      }
      .decor-left {
        width: 200px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
        animation: lamp 2s ease-in alternate infinite;
      }

        @media screen and (max-width: $break-small) {
          .lamp-glow {
            width: 80%;
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 1;
            animation: lamp 2s ease-in alternate infinite;
          }

          .decor-glow {
            width: 180px;
            position: absolute;
            right: 30px;
            top: 0;
            opacity: 1;
            animation: lamp 2s ease-in alternate infinite;
            z-index: 20;
          }

            .ar-glow {
            width: 80px;
            position: absolute;
            right: 0;
            bottom: 0;
            opacity: 1;
            animation: lamp 2s ease-in alternate infinite;
          }
          .decor-left {
            width: 150px;
            position: absolute;
            right: 20px;
            top: 20px;
            opacity: 1;
            animation: lamp 2s ease-in alternate infinite;
          }
    }



  .st0{fill:none;stroke:#42e5d8;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}


</style>
<style lang="scss" scoped>

$break-small: 800px;


* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.resume {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  position: relative;
  padding: 20vh 0;

  .group {
    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5vh 0;



    // justify-content: center;

    h3, h4, p {
      font-size: 3vw;
      margin: 0 auto;
      width: 90%;
      text-align: left; 
    }
    h3 {
      margin-bottom: 2vh;
      margin-top: 4vh;
      padding-bottom: 2vh;
      border-bottom: 2px solid #aaa;
    }
    h4 {
      font-size: 2vw;
      margin-bottom: 2vh;
      margin-top: 4vh;
    }
    p {
      font-size: 16px;
      // text-transform: lowercase;
    }

    @media screen and (max-width: $break-small) {
      width: 100%;
      h3 {
        font-size: 6vw;
      }
      h4 {
        font-size: 4vw;
      }
      p {
        font-size: 4vw;
      }
    }
  }

}
/* svg styles */

.dark-mode {
  background-color: red;
  position: absolute;
  top: -12vw;
  left: 48%;
  width: 40px;
  z-index: 9999999;
  text-align: center;
  padding: 10px 10px 15px 10px;
  display: flex;
  flex-direction: column;
  height: 10px;
  cursor: pointer;
  border-radius: 20px;

    .line {
      width: calc(100% - 25px);
      height: 3px;
      background-color: #444;
      margin: 3px;
      border-radius: 10px;
      position: absolute;
      left: 10px;
      top: 12px;
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

      @media screen and (max-width: $break-small) {
        display:none;
      }
}

  .page-heading {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;

  }

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
    font-family: 'avenir', 'nunito sans', sans-serif;
    font-weight: bold;
    font-size: 7vw;
  }
  .page-heading h2 {
    font-family: 'avenir', 'nunito sans', sans-serif;
    font-weight: bold;
    font-size: 4vw;
    color: #393939;
    
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

.slantLeft {
    position: absolute;
    content: "";
    border-right: 100vw solid transparent;
    height: 0;
    width: 0;
    bottom: -1px;
    left: 0;
    z-index: 2;
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
  padding: 0;
  width: 70%;
  margin: 0 auto;
  text-align: left;
  position: relative;
  z-index: 1;
}

.page-heading p.description {
  font-size: 16px;
  padding: 0;
  width: 70%;
  margin: 0 auto;
  z-index: 1;
  text-align: left;
  position: relative;
  color: #393939;
  max-width: 1000px;
}

.slide p {
  font-size: 2em;
  padding: 10px 0 2px 0;
  width: 50%;
  margin: 0 auto 20px 100px;
  z-index: 1;
  text-align: left;
  position: relative;
  color: #393939;
  font-style: italic;

}
.slide button {
  font-size: 1.1em;
  padding: 1em 2em;
  width: auto;
  margin-left: 100px;
  margin-top: 1em;
  background-color: #569664;
  border: 2px solid #569664;
  float: left;
  color: #fff;
  font-weight: 700;
  font-family: 'avenir', 'nunito sans', sans-serif;
  letter-spacing: 0.3em;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  // box-shadow: 3px 3px 15px #666;
}

.sub-section-heading {
  background-color: #393939;
  color: #fff !important;
  height: 400px;
  margin: 0;
  padding: 4em 0 2em 0;
  display: flex;
  justify-content: center;  
  position: relative;
  h2 {
    margin: 0 auto;
    width: 70%;
    max-width: 1000px;
    color: #fff !important;
  }
  p {
    color: #fff !important;
  }

}
.stripe-section {
  background-color: #46ce90;
  color: #fff !important;
}
.section {
  display: flex;
  flex-direction: row;
  position: relative;

  .model {
    width: 50%;
    height: 600px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 90%;
    }
  }

  .mockup {
    width: 40%;
    height: inherit;
    outline: none;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    img {
      height: 75%;
      position: absolute;
      z-index: 20;
    }
  }
  &__info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h2 {
      width: 80%;
      font-size: 4vw;
      margin: 0 auto 15px auto;
      text-align: left;
    }
    p {
      width: 80%;
      margin: 0 auto;
      text-align: left;
      line-height: 1.6em;
    }
  }
  @media screen and (max-width: $break-small) {


      flex-direction: column;
      height: auto;
      
      .model {
      width: 100%;
      height: 500px;
      }

      .mockup {
        width: 100%;
        height: 400px;
        outline: none;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        margin-top: -80px;

        img {
          height: unset;
          width: 90%;
          position: relative;
          bottom: unset;
          z-index: 20;
          margin-top: -80px;


        }
      }
      &__info {
        width: 100%;
        padding: 5em 0;
        h2 {
        width: 80%;
        font-size: 8vw;
        text-align: left;
      }
      p {
        width: 80%;
        margin: 0 auto;
        text-align: left;
      }
      }
    }

  }


@media only screen and (max-width: 900px) {

  .slider {
    height: 500px;
  }

  .slide {
    height: 500px;
    background-size: cover;
    background-position: center;
  }
  .VueCarousel-pagination {
      /* margin: 10px auto;
      z-index: 99; */
      display: none;
    }

  .page-heading h1 {
    font-size: 2.8em;
    width: 70%;
    margin: -1.5em auto 0 auto;
    text-align: left;
    font-weight: 900;
  }
  .page-heading h2 {
    font-size: 2.4em;
    width: 70%;
    margin: 0 auto;
    text-align: left;
    font-weight: 900;
  }
  .slide p {
    font-size: 2em;
    padding: 0;
    width: 70%;
    margin: 0 auto 15px auto;
    text-align: left;
  }
  .slide button {
    font-size: .9em;
    padding: 1em 2em;
    width: auto;
    margin-left: 15%;
    background-color: #569664;
    border: 2px solid #569664;
    float: left;
    color: #fff;
    font-family: 'avenir', 'nunito sans', sans-serif;
    letter-spacing: 0.3em;
  }


}
</style>
