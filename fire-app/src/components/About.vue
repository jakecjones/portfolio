<template lang="html">
  <section>
    <div class="info">
    <h3>Lamplight Heritage</h3>
    <h4>reinforcing the value of heritage through the digital humanities.</h4>

    <p>Lamplight Heritage was founded on the banks of the River Clyde in Glasgow, Scotland, with the unique purpose of bridging the gap between heritage fields and emerging technologies. As a company, we are dedicated to researching, producing, and innovating within the broad field of digital humanities so that we may target, engage, and inspire the next generation of museum and heritage site visitors. Our goal is to reinforce the intrinsic value of heritage related content, using emerging technology as a tool rather than the subject of production. Our international team consists of postgraduate researchers, museum specialists, archaeologists, designers, and developers with direct experience in humanities and technology—all of which are eager to work with institutions in producing tailored experiences for a wide range of themes and content. We are Lamplight Heritage, and we reinforce the value of heritage through digital humanities.</p>

    <h3>Research</h3>
    <p>Research is at the core of our identity. We believe that proper research produces proper results, so we strive to understand how the human brain interprets augmented space and how we can retain a material’s natural aura in superimposed environments.</p>

    <h3>Production</h3>
    <p>From our research, we are able to direct production in a way that ensures maximum capability for engagement and interaction with content. Each production is tailored to the client’s specific needs, taking into account content, targeted demographics, and budget.</p>

    <h3>Innovation</h3>
    <p>Innovation is what drives our research and production—we connect the past with the future by illuminating the past for the sake of the future, and in the process pioneer this new industry called “Augmented Heritage™.”</p>


  </div>

    <Footer :key="$route.fullPath" />
  </section>

</template>

<script>
import Footer from './Footer.vue'


export default {
  components: {
    Footer
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>

</style>
