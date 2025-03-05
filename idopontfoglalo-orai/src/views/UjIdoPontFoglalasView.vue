<template>
  <div class="container justify-content-center" >
    <h1 class="text-center">Új időpont foglalás</h1>
    <label for="nev"></label>
    <input type="text" name = "nev" v-model="ujnev">
    <br>
    <label for="telefon"></label>
    <input type="text" name = "telefon" v-model="ujtelefon">
    <br>
    <button @click="idopontStore.ujidopontfoglalas(ujnev, ujtelefon), idopontStore.back()"></button>
  </div>
</template>

<script scoped>
import { ref } from 'vue'
import { useIdopontStore } from '@/stores/idopontfoglalas.js'
const ujnev = ref()
const ujtelefon = ref()
const idopontStore = useIdopontStore()
</script>