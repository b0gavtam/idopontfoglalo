<script setup>
import {useIdopontStore} from '@/stores/idopontfoglalas.js';
 const store = useIdopontStore();
</script>

<template>
  <div class="container">
    <h1 class="text-center">Időpontfoglalás - Orvos</h1>
    <div class="idopont" v-for="idopont in idopontok" :key="idopont.id">
      <p> {{ idopont.id }}</p>
      <p> {{ idopont.datum }}</p>
      <p> {{ idopont.ora }}</p>
      <p> {{ idopont.nev }}</p>
      <p> {{ idopont.telefon }}</p>
    </div>
  </div>
</template>
