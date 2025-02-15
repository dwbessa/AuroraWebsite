<template>
  <section id="contato" class="contato-section">
    <div class="container">
      <h2>📞 Contato</h2>
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Insira seu nome"
          >
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="seu@email.com"
          >
        </div>

        <div class="form-group">
          <label for="message">Mensagem</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Digite aqui a sua mensagem"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Enviar Mensagem</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Here you can handle the form submission
      console.log('Form Data:', this.formData)
      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
      // You could add an alert or notification here
      alert('Mensagem enviada com sucesso!')
    }
  }
}
</script>

<style scoped>
.contato-section {
  padding: 4rem 2rem;
  background-color: #fff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-form {
  max-width: 500px;
  margin: 2rem auto;
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: rgb(183, 85, 83);
  box-shadow: 0 0 0 2px rgba(183, 85, 83, 0.2);
}

textarea {
  resize: vertical;
}

.submit-btn {
  background-color: rgb(183, 85, 83);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: rgb(163, 65, 63);
}

/* Add responsive styles */
@media (max-width: 600px) {
  .contact-form {
    padding: 0 1rem;
  }
}
</style>
