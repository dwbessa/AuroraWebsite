<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>🍽️ Sobre o Restaurante</h2>
      <p class="description">
        Aurora Gourmet é um restaurante que combina sabores tradicionais com
        apresentações contemporâneas. Nossa cozinha é dedicada a criar
        experiências gastronômicas únicas usando ingredientes frescos e locais.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
.about-section {
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

.description {
  line-height: 1.6;
  color: #666;
}

@media (max-width: 768px) {
  .about-section {
    margin-bottom: 2rem;
  }
}
</style>
