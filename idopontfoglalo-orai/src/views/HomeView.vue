<script setup>
import {useIdopontStore} from '@/stores/idopontfoglalas.js';
 const store = useIdopontStore();
</script>

<template>
  <div class="container">
    <h1 class="text-center">Időpontfoglalás - Orvos</h1>
    <div class="card" v-for="idopont in store.idopontok" :key="idopont.id">
      <p class="card-title"> {{ idopont.nev }}</p>
      <div class="card-body">
        <p class="card-text"> {{ idopont.id }}</p>
        <p class="card-text"> {{ idopont.datum }}</p>
        <p class="card-text"> {{ idopont.ora }}</p>
      </div>
      <p class="card-footer"> {{ idopont.telefon }}</p>
    </div>
  </div>
</template>
