<template>
  <section id="menu" class="menu-section">
    <div class="container">
      <h2>📃 Menu</h2>
      <div class="menu-content">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuSection',
}
</script>

<style scoped>
.menu-section {
  padding: 4rem 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.menu-content {
  line-height: 1.6;
  color: #666;
}

@media (max-width: 768px) {
  .menu-section {
    margin: 2rem;
  }
}
</style>
