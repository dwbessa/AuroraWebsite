<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="@/assets/aurora_logo.png" alt="Aurora Logo">
      <span class="brand-name">Aurora Gourmet</span>
    </div>
    <div class="nav-links">
      <a href="#reservas">Reservas</a>
      <a href="#contato">Contato</a>
    </div>
  </nav>
</template>

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
  gap: 1rem; /* Space between logo and text */
}

.logo-container img {
  height: 50px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f5f5;
}

.nav-links {
  display: flex;
  gap: 2rem; /* Space between nav links */
}

.nav-links a {
  text-decoration: none;
  color: #f5f5f5;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffffff;
}
</style>
