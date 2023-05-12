<template>
  <div>
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Hero from '../components/Hero.vue';

export default {
    name: "IndexPage",
    components: { Navbar, Hero }
}
</script>
