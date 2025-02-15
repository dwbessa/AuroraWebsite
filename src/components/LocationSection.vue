<template>
  <section id="location" class="location-section">
    <div class="container">
      <h2>📍 Localização</h2>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4544571062565!2d-43.04517889999999!3d-22.82267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999af138e018c7%3A0xb9c83492dad3af5f!2sAurora%20Gourmet!5e0!3m2!1spt-BR!2sbr!4v1739651991344!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocationSection',
}
</script>

<style scoped>
.location-section {
  flex: 1;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  max-width: 100%;
  text-align: left;
}

h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .map-container iframe {
    height: 250px;
  }
}
</style>
