<template>
  <footer class="footer">
    <div class="contact-links">
      <a href="tel:+5521970084783" class="contact-item">
        <span class="icon"><i class="fas fa-phone icon"></i></span>
        <span class="text">Contato</span>
      </a>
      <a href="https://instagram.com/gourmetaurora" target="_blank" class="contact-item">
        <span class="icon"><i class="fab fa-instagram"></i><br></span>
        <span>Instagram</span>
      </a>
      <a href="mailto:auroragourmet128@gmail.com" class="contact-item">
        <span class="icon"><i class="fas fa-envelope icon"></i></span>
        <span>E-mail</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style scoped>
.footer {
  background-color: rgb(183, 85, 83);
  padding: 2rem;
  color: white;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.contact-item {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 1.5rem;
}

.text {
  font-size: 1rem;
}

.contact-item:hover {
  color: #42b983;
}
</style>
