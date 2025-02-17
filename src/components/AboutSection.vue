<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>🍽️ Sobre o Restaurante</h2>
      <p class="description">
        Fundado em 2016 e localizado no coração de São Gonçalo, o Aurora Gourmet
         se propõe a servir uma comida de qualidade aliado com um atendimento de
        excelência, se tornando assim um dos melhores restaurantes da região.<br>
        Nestes quase 10 anos, Renato e Tânia construíram um pilar de atendimento
         baseado no bem-estar do cliente, ofertando uma diversidade grande de
        pratos que agrada a todos os gostos e desejos, de segunda a sábado. <br>
        São mais de 30 opções de pratos quentes e 15 opções de saladas, além de
        opções veganas para dar mais acessibilidade para todos os tipos de
        pessoas e ideais.<br>
        Você está convidado a se juntar a nós e fazer parte da história que
        construímos juntos.<br>
        <b>Venha pro Aurora!</b>
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
