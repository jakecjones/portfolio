<template>
  <section class="display">

    <div class="slider" :style="{backgroundColor: $parent.backgroundOne}" >
      <div class="slantLeft" :style="{borderBottom: ' 50px solid ' + $parent.contrastBackground}"></div>

          <div class="slide">
            
            <div class="page-heading">
            <h1 :style="{color: $parent.colorOne}">Jake Jones</h1>
            <p :style="{color: $parent.colorOne}">Web Developer <br>
            <span :style="{color: $parent.colorOne}"> & </span>
            <vue-typer  :style="{color: $parent.colorOne}" class="typer" :text="typer" erase-style='backspace' erase-delay='70' pre-type-delay='100' caret-animation='smooth'></vue-typer>
            </p>
            <router-link to="/contact"><button :style="{backgroundColor: $parent.accentOne, border: $parent.accentOne}">Contact</button></router-link>
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

                  <div @click="$parent.darkMode = !$parent.darkMode" class="dark-mode" :style="{backgroundColor: $parent.colorOne}">
                    <div :style="{ backgroundColor: $parent.colorTwo}" class="line"></div>
                    <div :style="{ left: $parent.onSwitch + 'px', borderColor: $parent.colorTwo, backgroundColor: $parent.colorOne}" class="circle"></div>
                  </div>

            </div>
          </div>
    </div>

    <section class="sub-section-heading" :style="{backgroundColor: $parent.contrastBackground}">
      <div v-if="showCode" class="code-block">
        <div class="html" :style="{color: $parent.colorTwo}">
          <span nowrap>&lt;section> class="sub-section-heading" :style="{backgroundColor: $parent.contrastBackground}"><br></span>
          &nbsp;&lt;h2> :style="{color: $parent.colorTwo}">Proud Papa.&lt;/h2><br>
          &nbsp;&lt;p class="description" :style="{color: $parent.colorTwo}">...&lt;p><br>
          &lt;/section>
        </div>

        </div>

      <img class="decor-left" src="/static/neon-decor-2.svg" alt="jake jones lamp logo">
      <img class="decor-left" src="/static/neon-decor-2.png" alt="jake jones lamp logo">
      <img class="decor-left" src="/static/neon-decor-2.png" alt="jake jones lamp logo">

      <div v-if="!showCode" class="page-heading">
        <h2 :style="{color: $parent.colorTwo}">Proud Papa.</h2>
        <p class="description" :style="{color: $parent.colorTwo}">I sometimes find it quite awkward to talk of my achievements in my career. It’s hard to say “I’m the best at this,” or “I’m really great at that.” I would; however, like to show you a few problems I have had to solve that makes me very proud to be a web developer. I hope this compilation showcases the diversity and fluidity of my work this past year.</p>

      </div>

      <div 
        :style="{backgroundColor: $parent.backgroundOne, color: $parent.colorOne}"
        @mouseover="showCode = !showCode" 
        @mouseleave="showCode = !showCode" 
        class="code-icon">  
          &lt;/>  
      </div>

    </section>

    <section class="section ar-section" :style="{backgroundColor: $parent.backgroundOne}">
        <model-viewer
          experimental-pmrem 
          preload 
          ar 
          magic-leap
          camera-orbit="45deg 55deg 2.5m"
          class="model" 
          poster="/static/loading-bg.svg" 
          src="/static/header-model.glb" 
          ios-src="/static/header-model.usdz" 
          camera-controls 
          :background-color="$parent.backgroundTwo" 
          >
          </model-viewer>

          <div v-if="!showCode" class="section__info">
             <h2 :style="{color: $parent.colorOne}">Augmented Reality.</h2>
             <p :style="{color: $parent.colorOne}">AR within the web is easily the most exciting tool for me to have worked on and talk about. Ultimately I was able to create an ecosystem for streamlining the conversion process of flat artwork images into 3d models. This project made use of three.js, SSH, xCode, webGL, javascript, vue.js, firebase and GCP. Feel free to try the free demo on <a href="http://roxyartmarket.com" target="_blank">roxyartmarket.com </a></p>
          </div>

          <div v-if="showCode" class="section__info">
            <div class="code-block" :style="{color: $parent.colorOne}">
            &lt;div class="section__info"><br>
              &nbsp;&lt;h2 :style="{color: $parent.colorOne}">Augmented Reality.&nbsp;&lt;/h2><br>
              &nbsp;&lt;p :style="{color: $parent.colorOne}">&lt;a>...&lt;/a>&lt;/p><br>
             &lt;/div><br>
             </div>
          </div>

        <div 
          :style="{backgroundColor: $parent.backgroundOne, color: $parent.colorOne}"
          @mouseover="showCode = !showCode" 
          @mouseleave="showCode = !showCode" 
          class="code-icon">  
            &lt;/>  
        </div>

                <img class="ar-glow" src="/static/neon-ar.svg" alt="jake jones lamp logo">
                <img class="ar-glow" src="/static/neon-ar-glow.png" alt="jake jones lamp logo">
                <img class="ar-glow" src="/static/neon-ar-glow.png" alt="jake jones lamp logo">

      </section>

      <section class="section stripe-section">
          <div v-if="!showCode" class="section__info">
             <h2>Stripe Integration.</h2>
             <p>The day was July 22nd and the time 4:30am. For the first time in my life I had stayed up 48 hours to finish a project, launch a site, and hard code our Stripe payment logic. With a blank sheet of white paper and a sharpie, I was victorious in my feat. 
             <br><br>My strong suits as a developer have always been front-end development, and since I started this career, I was encouraged to stay away from coding payment logic. It was encouraging to put this task under my belt and move forward confidently despite the many challenges I&nbsp;faced.
            </p>
          </div>
          <div v-if="showCode" class="section__info ">
            <div class="code-block">
            &lt;section class="section stripe-section"><br>
                &nbsp;&lt;div v-if="showCode" class="section__info"><br>
                  &nbsp;&nbsp;&lt;h2>Stripe Integration.&lt/h2><br>
                  &nbsp;&nbsp;&nbsp;&lt;p>...&lt;/p><br>
                &nbsp;&nbsp;&lt;/div><br>
                &lt;/section><br>
             </div>
          </div>
          
          <div class="mockup">
            <img src="/static/stripe-example.png">
          </div>
          <div class="slantRight" :style="{borderBottom: ' 100px solid' + $parent.backgroundTwo }"></div>
                
                
      <div 
        :style="{backgroundColor: $parent.backgroundOne, color: $parent.colorOne}"
        @mouseover="showCode = !showCode" 
        @mouseleave="showCode = !showCode" 
        class="code-icon">  
          &lt;/>  
      </div>

      </section>

      <section class="section profile-section " :style="{backgroundColor: $parent.backgroundTwo}">

        <div class="model">
          <img src="/static/profile-mockup.png">
        </div>
                        <img class="decor-glow" src="/static/decor-glow.png" alt="jake jones lamp logo">
                <img class="decor-glow" src="/static/decor-glow.png" alt="jake jones lamp logo">

                <img class="decor-glow" src="/static/decor.svg" alt="jake jones lamp logo">

        <div v-if="!showCode" class="section__info">



          <h2 :style="{color: $parent.colorOne}">Create a platform.</h2>
          <p :style="{color: $parent.colorOne}">When I started building Roxy Art Market, I was determined to create something that I had never created before. I wanted it to be social media and I wanted it to be an integration tool. I wanted to put my heart and passion into something while having something to show for&nbsp;it.<br><br>I created user profiles with follow and like actions. I created a CMS to manage artwork and dynamic scaling. I created a batch editor for users to update multiple pieces at one time. I created a payment system as mentioned above to manage my subscriptions. I created a sales landing page and the ability for users to quickly emerge themselves in a platform that lets them cast their work into the real&nbsp;world.</p>
        </div>

        <div v-if="showCode" class="section__info">
          <div class="code-block" :style="{color: $parent.colorOne}">
              &lt;div class="section__info"><br>

                &nbsp;&lt;h2 :style="{color: $parent.colorOne}">Create a platform.&lt;/h2><br>
                &nbsp;&lt;p :style="{color: $parent.colorOne}">...&lt;/p><br>
              &lt;/div>
              </div>
        </div>
        <div 
          :style="{backgroundColor: $parent.backgroundOne, color: $parent.colorOne}"
          @mouseover="showCode = !showCode" 
          @mouseleave="showCode = !showCode" 
          class="code-icon">  
            &lt;/>  
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
      showCode: false,
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
<style lang="scss" >

$break-small: 800px;
$break-med: 1100px;


  .vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
 
  .custom.char {
    /* Styles for each character
       e.g. color, background-color */
 
    &.typed {
      position: relative;
      z-index: 1;
      color: unset;
    }
  }
  }


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
        right: 80px;
        top: -60px;
        z-index: 200;
        opacity: 1;
        animation: lamp 2s ease-in alternate infinite;
        @media screen and (max-width: $break-med) {
          width: 120px;
          top: -70px;
        }
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
            width: 80%;
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



  .st0{fill:none;stroke:#42e5d8;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}


</style>


<style lang="scss" scoped>

$break-small: 800px;
$break-med: 1000px;

@keyframes shadow-pulse
{
  0% {
      box-shadow: 0 0 0 0px rgba(200, 200, 200, 0.2);
      filter: blur(0)
  }
  15% {
      filter: blur(0.25px)
  }
  100% {
      box-shadow: 0 0 0 35px rgba(200, 200, 200, 0);
      filter: blur(0)

  }
}




* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  width: 90%;
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
  font-style: italic;

}
.slide button {
  font-size: 1.1em;
  padding: 1em 2em;
  width: auto;
  margin-left: 100px;
  margin-top: 1em;
  float: left;
  color: #fff;
  font-weight: 700;
  font-family: 'avenir', 'nunito sans', sans-serif;
  letter-spacing: 0.3em;
  position: relative;
  z-index: 1;
  border-radius: 10px;

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

  .code-block {
    position: absolute;
    width: 80%;
    overflow-x: scroll;
    text-align: left;
    font-family: monospace;
    font-size: 16px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    padding: 1.4em;
    align-self: center;
    justify-self: center;        
    transition: none;

    .html {
      text-align: left;
    }

    @media screen and (max-width: $break-small) {
        width: 85%;
        transition: none;
  }

  }



    .code-icon {
      animation: shadow-pulse 2s infinite;
      position: absolute;
      background-color: #fff;
      font-family: 'avenir', 'nunito sans', sans-serif;
      font-weight: 900;
      bottom: 20px;
      left: 20px;
      width: 6vh;
      height: 4vh;
      font-size: 2vh;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      cursor: pointer;
      z-index: 9999;
      @media screen and (max-width: $break-med) {
        display: none;
      }

    }
}

.stripe-section {
  background-color: #46ce90;
  color: #fff !important;
}
// .profile-section {
//   .model {

//   }
// }
.section {
  height: 600px;
  display: flex;
  flex-direction: row;
  position: relative;

  .code-block {
    position: relative;
    width: 80%;
    overflow-x: scroll;
    text-align: left;
    font-family: monospace;
    font-size: 16px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    padding: 1.4em;
    .html {
      text-align: left;
    }

    @media screen and (max-width: $break-small) {
        width: 85%;
        transition: none;
  }
    }

  .code-icon {
    animation: shadow-pulse 2s infinite;
    position: absolute;
    background-color: #fff;
    font-family: 'avenir', 'nunito sans', sans-serif;
    font-weight: 900;
    bottom: 20px;
    left: 20px;
    width: 6vh;
    height: 4vh;
    font-size: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    z-index: 9999;
    @media screen and (max-width: $break-med) {
      display: none;
    }
  }

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
