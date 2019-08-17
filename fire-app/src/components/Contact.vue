<template>
  <section class="display">

    <div class="slider" >

          <div class="slide">
            
            <div class="page-heading">
            <h1 >Contact</h1>
            <p class="description">
              <a href="mailto:jakejonesinfo@gmail.com">jakejonesinfo@gmail.com</a><br>
              <a href="tel:1-208-699-7404">(208) 699-7404</a>
            </p>
            
            <label>
            
            <template  v-if="activeSlide == 1">
              <input @keydown.enter="nextSlide()" type="text" v-model="name" placeholder="Name">
              <span class="step">1/3</span>
            </template>

            <template v-if="activeSlide == 2">
              <input @keydown.enter="nextSlide()" type="text" v-model="email" placeholder="Email">
              <span  class="step">2/3</span>
            </template>

            <template v-if="activeSlide == 3">
              <input @keydown.enter="nextSlide()" type="text" v-model="message" placeholder="Message">
              <span class="step">3/3</span>
            </template>
          </label>

            <!-- <input :style="{backgroundColor: $parent.backgroundTwo}" type="email" v-model="email" placeholder="Email">
            <input :style="{backgroundColor: $parent.backgroundTwo}" type="text" v-model="message" placeholder="Message"> -->

            
            <!-- <p :style="{color: $parent.colorOne}">Web Developer <br>
            & Designer
            </p> -->
            <div class="buttons-container">
              <button v-if="activeSlide == 2 || activeSlide == 3" @click="backSlide()" class="next" :style="{color: $parent.accentOne, borderColor: $parent.accentOne}">back</button>
              <button v-if="activeSlide != 3" @click="nextSlide()" class="next" :style="{color: $parent.accentOne, borderColor: $parent.accentOne}">next</button>
              <button v-if="activeSlide == 3" @click="send()" class="next" :style="{color: $parent.accentOne, borderColor: $parent.accentOne}">submit</button>
            </div>
            
          </div>
            <div class="svg-container">
                <!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 836 1525" style="enable-background:new 0 0 836 1525;" xml:space="preserve">

                <circle class="st0" cx="283" cy="292" r="64"/>
                <circle class="st0" cx="174" cy="958" r="32"/>
                <polygon class="st0" points="253.9,613.8 337.4,925.6 565.6,697.4 "/>
                <polygon class="st0" points="583.6,456 538.2,534.8 629.1,534.8 "/>
                <polyline class="st0" points="402.6,1354 511.9,1244.7 451.6,1184.4 661,975 "/>
                </svg> -->
                <img class="lamp-glow" src="/static/nav-glow-01.svg" alt="jake jones lamp logo">
                <img class="lamp-glow" src="/static/nav-glow-01.png" alt="jake jones lamp logo">
                <img class="lamp-glow" src="/static/nav-glow-01.png" alt="jake jones lamp logo">

            </div>
          </div>
    </div>

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
      activeSlide: 1,
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
    },
    methods: {
      nextSlide() {
        if (this.activeSlide == 3) {
          this.activeSlide = 1
          return
        }
        this.activeSlide = this.activeSlide + 1
    },
      backSlide() {
        if (this.activeSlide == 1) {
          this.activeSlide = 3
          return
        }
        this.activeSlide = this.activeSlide - 1
    },
    send() {
        const createdAt = new Date()
        firestore
          .collection("jakejonesinfo")
          .add({
            timestamp: createdAt,
            name: this.name,
            email: this.email,
            message: this.message,
          })
          .then((data) => {
            alert('thanks ' + this.name + '!  Jake should be back with you shortly.')
          })
    }
}
}
</script>


<style lang="scss" scoped>

$break-small: 800px;

.buttons-container {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 100px;
    @media screen and (max-width: $break-small) {
      margin-left: 35px;
      button {
        margin-left: 0;
        font-size: 10px !important;
      }
    }
}
.contact-slide {
  position: absolute;
  left: 100%;
}
.active-slide {
  position: relative;
  left: 0;

}

  .svg-container {
    width: 65%;
    position: absolute;
    bottom: 100px;
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
        width: 60%;
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
        width: 150px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 1;
        animation: lamp 2s ease-in alternate infinite;
      }

        @media screen and (max-width: $break-small) {
          .lamp-glow {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 1;
            animation: lamp 2s ease-in alternate infinite;
          }

          .decor-glow {
            width: 100px;
            position: absolute;
            right: 30px;
            top: -50px;
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
            width: 110px;
            position: absolute;
            right: 0;
            top: 0;
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
  .group {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20vh 0;
    // justify-content: center;

    h3, h4, p {
      font-size: 3vw;
      margin: 0;
      width: 50%;
      text-align: left; 
    }
    h3 {
      margin-bottom: 2vh;
      
    }
    h4 {
      font-size: 2vw;
      margin-bottom: 2vh;
      margin-top: 2vh;
    }
    p {
      font-size: 16px;
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
    color: #fff;
  }
  .page-heading h2 {
    font-family: 'avenir', 'nunito sans', sans-serif;
    font-weight: bold;
    font-size: 4vw;
    color: #393939;
    
  }



.slider {
  background-color: #303030;
  height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15%;
  position: relative;
  transition: all .35s ease-in-out;
  .next {
    width: auto;
  }
  label {
     width: 400px;
     margin: 0 0 2vh 0;
     margin-left: 100px;
     position: relative;
     .step {
      width: 50px;
      font-size: 14px;
      position: absolute;
      letter-spacing: 2px;
      right: -60px;
      top: -10px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: 100%; 
      color: #fff;
      font-weight: 100;
    }
    input {
      border: none;
      outline: none;
      margin: 0;
      border-radius: 0;
      font-size: 3vw;
      padding: 1em 0 10px 0;
      color: #fff;
      width: inherit;
      background-color: transparent !important;
      border-bottom: 1px solid #fff;

    }
    input::placeholder {
      color: #fff
    }
  }
   @media screen and (max-width: $break-small) {
     label {
       width: 280px;
     }
   }

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
  padding: 0;
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
  margin: 0 auto 0 100px;
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
  padding: 7px 30px;
  width: auto;
  margin-top: 1em;
  margin-right: 10px;
  border: 1px solid #46ce90;
  background-color: transparent;
  float: left;
  color: #fff;
  font-weight: 700;
  font-family: 'avenir', 'nunito sans', sans-serif;
  position: relative;
  z-index: 1;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #46ce90;
    color: #fff !important;
    cursor: pointer;
  }
  // box-shadow: 3px 3px 15px #666;
}


.sub-section-heading {
  background-color: #393939;
  height: 400px;
  margin: 0;
  padding: 2em 0;
  display: flex;
  justify-content: center;  
  position: relative;
  h2 {
    margin: 0 auto;
    width: 70%;
    max-width: 1000px;
  }

}
.stripe-section {
  background-color: #46ce90;
  color: #fff !important;
}
.section {
  height: 600px;
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

.page-heading  {
  h1 {
    padding: 0;
    width: auto;
    margin: -100px 0 20px 30px;
    font-size: 10vw;
    text-align: left;
    position: relative;
    z-index: 1;
  }
  p.description {
    margin-left: 30px;
  }
  label {
    margin-left: 30px;
    input {
    font-size: 6vw;
    }
  }

}




}
</style>
