<template>
  <footer class="footer">
    <div class="contact-links">
      <a href="tel:+5521970084783" class="contact-item">
        📞 Contato
      </a>
      <a href="https://instagram.com/gourmetaurora" target="_blank" class="contact-item">
        📷 Instagram
      </a>
      <a href="mailto:auroragourmet128@gmail.com" class="contact-item">
        📩 E-mail
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
}

.contact-item:hover {
  color: #42b983;
}
</style>
