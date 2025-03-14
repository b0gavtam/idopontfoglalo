<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useIdopontStore } from '@/stores/idopontfoglalas.js';
import { onMounted } from 'vue';
const store = useIdopontStore();
onMounted(async() => {
   await store.fetchIdopontok();
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

