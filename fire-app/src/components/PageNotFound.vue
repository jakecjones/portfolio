<template lang="html">
  <section>
    <div class="info">
    <h3>Well this is awkward... Unfortunatly we've landed on the wrong page.</h3>
    </div>

    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    	 viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
    <g>
    	<path class="st0" d="M135.6,569.8l111.9-265.9h63.4v265.9h40.6v63.9h-40.6v90.9h-63.4v-90.9H135.6V569.8z M247.5,569.8V439
    		l-52.4,130.8H247.5z"/>
    	<path class="st0" d="M604.9,629.5c0,28-9.8,51.7-29.5,71.2c-19.7,19.5-43.3,29.2-70.8,29.2c-28,0-51.7-9.8-71.3-29.4
    		c-19.5-19.6-29.3-43.2-29.3-70.9V399.1c0-28,9.8-51.7,29.5-71.3c19.7-19.5,43.4-29.3,71-29.3c28,0,51.7,9.8,71.2,29.5
    		c19.4,19.7,29.2,43.4,29.2,71V629.5z M539.2,397.7c0-10-3.6-18.6-10.7-25.7c-7.1-7.1-15.8-10.7-25.9-10.7c-10,0-18.5,3.6-25.6,10.7
    		c-7.1,7.1-10.6,15.7-10.6,25.7v230.9c0,10,3.5,18.6,10.6,25.7c7.1,7.1,15.6,10.7,25.6,10.7c10.1,0,18.8-3.6,25.9-10.7
    		s10.7-15.7,10.7-25.7V397.7z"/>
    	<path class="st0" d="M648.5,569.8l111.9-265.9h63.4v265.9h40.6v63.9h-40.6v90.9h-63.4v-90.9H648.5V569.8z M760.4,569.8V439
    		L708,569.8H760.4z"/>
    </g>
    </svg>

    <Footer :key="$route.fullPath" />
  </section>

</template>

<script>
import Footer from './Footer.vue'
import { page } from 'vue-analytics'


export default {
  components: {
    Footer
  },
  methods: {
    track () {
      page('/')
    }
  }
}
</script>

<style lang="css" scoped>

svg {
  width: 50%;
  margin: 0 auto;
}

.st0 {
  fill:none;stroke:#000000;
  stroke-width:10;
  transition: .1s ease-in-out;
  stroke-dasharray: 2000;
  stroke-dashoffset: 0;
  animation: dash 3s infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 0;
  }

  30% {
    stroke-dashoffset: 2000;
    stroke: #eee;

  }

  100% {
      stroke-dashoffset: 0;
  }
}
/* svg:hover .st3 {
  animation: dash 1.5s linear forwards;
} */

.info {
  max-width: 90%;
  margin: 10px auto;
  text-align: left;
  padding: 5px;
  background-color: #eee;
}
.info h3 {
  letter-spacing: 1px;
  font-size: 1.8em;
  /* padding: 1em;
  background-color: #fff; */
}
.info p {
  font-family: 'avenir', sans-serif;
  letter-spacing: 1px;
  font-size: 1em;

  /* border-left: 4px solid #333; */
  /* padding-left: 1em; */
}
</style>
