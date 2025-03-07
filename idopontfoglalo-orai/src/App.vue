<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useIdopontStore } from '@/stores/idopontfoglalas.js';
const store = useIdopontStore();
onMounted(async() => {
   await store.loadAll();
})
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

