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
  <RouterView />
</template>

