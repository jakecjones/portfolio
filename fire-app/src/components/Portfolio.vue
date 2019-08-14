<template>
  <section>
    <div class="info">



    <a href="https://roxyartmarket.com">
      <h3>Roxy Art Market</h3>
      <p>Marketplace, technology, production company, art & business coaching: all of these describe what The Roxy Art Market is, and will continue to be—a place where artists, collectors, and buyers can foster their talents and grow their trade. We are here to help grow your business, one artwork at a time.</p>
      <img src="../assets/icons/roxy-portfolio.jpg" alt="roxy art market">
    </a>
    </div>

    <Footer :key="$route.fullPath" />
  </section>

</template>

<script>
import Footer from './Footer.vue'


export default {
  name: 'portfolio',
  components: {
    Footer
  },
  methods: {

  }
}

</script>

<style scoped>
.info {
  margin: 2em auto;
  width: 90%;
}

.info a {
  text-decoration: none;
}

.info p {
  font-weight: lighter;
}

a img {
  margin: 1em auto;
  width: 100%;
  transition: .2s all ease-in-out;
}

a img:hover {
  opacity: .8;
}

</style>
