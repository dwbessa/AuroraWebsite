<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/aurora_logo.png" alt="Aurora Logo">
      <span class="brand-name">Aurora Gourmet</span>
    </div>
    <div class="menu-container">
      <button class="hamburger-button" @click="toggleNav">
        <span class="hamburger-icon">☰</span>
      </button>
      <div class="nav-links" :class="{ 'nav-active': isNavOpen }">
        <a href="#" @click.prevent="$emit('toggle-menu'); toggleNav()">Menu</a>
        <a href="#reservas" @click="toggleNav">Reservas</a>
        <a href="#contato" @click="toggleNav">Contato</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(183, 85, 83);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-container img {
  height: 50px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f5f5;
}

.menu-container {
  position: relative;
}

.hamburger-button {
  background: none;
  border: none;
  color: #f5f5f5;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: block;
}

.nav-links {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgb(183, 85, 83);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 3px solid rgb(157,128,69);
}

.nav-links.nav-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-links a {
  text-decoration: none;
  color: #f5f5f5;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.nav-links a:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

/* Optional: Close menu when clicking outside */
@media (max-width: 768px) {
  .nav-links {
    width: 200px;
  }
}
</style>
