<template>
  <Transition name="fade">
    <div v-if="isOpen" class="menu-popup-overlay">
      <div class="menu-popup">
        <div class="menu-header">
          <h2>📃 Menu <span class="date-range">{{ dateRange }}</span></h2>
          <button class="close-button" @click="$emit('close')">&times;</button>
        </div>
        <div class="menu-content">
          <ul>
            <li><b>Segunda: </b>Rabada</li>
            <li><b>Terça: </b></li>
            <li><b>Quarta: </b></li>
            <li><b>Quinta: </b></li>
            <li><b>Sexta: </b>Feijoada</li>
            <li><b>Sábado: </b></li>
          </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'MenuSection',
  props: {
    isOpen: Boolean
  },
  emits: ['close'],
  setup() {
    const dateRange = computed(() => {
      const now = new Date()
      const monday = new Date(now)
      const saturday = new Date(now)

      monday.setDate(now.getDate() - now.getDay() + 1)
      saturday.setDate(now.getDate() - now.getDay() + 6)

      const formatDate = (date) => {
        return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`
      }

      return `${formatDate(monday)} a ${formatDate(saturday)}`
    })

    return {
      dateRange
    }
  }
}
</script>

<style scoped>
.menu-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.menu-popup {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.date-range {
  font-size: 0.9rem;
  color: #666;
  margin-left: 1rem;
  font-weight: normal;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
}

.menu-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-content li {
  margin-bottom: 1rem;
  color: #666;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
