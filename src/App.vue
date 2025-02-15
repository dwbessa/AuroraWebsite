<template>
  <div>
    <NavBar />
    <div class="main-content">
      <AboutSection />
      <LocationSection />
    </div>
    <MenuSection />
    <ReservationSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AboutSection from './components/AboutSection.vue'
import LocationSection from './components/LocationSection.vue'
import FooterSection from './components/FooterSection.vue'
import ReservationSection from './components/ReservationSection.vue'
import ContactSection from './components/ContactSection.vue'
import MenuSection from './components/MenuSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AboutSection,
    LocationSection,
    MenuSection,
    ReservationSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-content {
  margin-top: 82px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
}
</style>
