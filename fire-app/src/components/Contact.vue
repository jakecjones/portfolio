<template lang="html">
  <section>
    <div class="info">
    <h3>Contact</h3>

    <p>Phone: <a href="tel:1-208-763-8439">(208) 763-8439</a></p>


    <h4>Email Us: </h4>
    <p>
    CEO:
    <a href="mailto:tyler@lamplightheritage.com">tyler@lamplightheritage.com</a>
    </br>
    CTO: <a href="mailto:jake@roxyartmarket.com">jake@roxyartmarket.com</a>
    </p>


    <p> Or feel free to send us a letter:
    </br>
    </br>

     Lamplight Heritage
     <br>
     424 E Sherman Ave suite 208
     <br>
     Coeur d'Alene, Idaho 83814 </p>


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
