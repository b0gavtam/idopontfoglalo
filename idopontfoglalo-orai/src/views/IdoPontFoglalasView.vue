<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow-lg" style="max-width: 450px; width: 100%;">
      <h2 class="text-center mb-4 text-primary">Új időpont foglalása</h2>

      <div v-if="idopont" class="alert alert-info text-center">
        <strong>{{ idopont.datum }}</strong> - {{ idopont.ora }}
      </div>

      <form @submit.prevent="submitFoglalas" class="w-100 mx-auto">
        <div class="mb-3">
          <label for="nev" class="form-label">Név:</label>
          <input type="text" id="nev" v-model="nev" class="form-control" required />
        </div>

        <div class="mb-3">
          <label for="telefon" class="form-label">Telefonszám:</label>
          <input type="tel" id="telefon" v-model="telefon" class="form-control" required />
        </div>

        <button type="submit" class="btn btn-primary w-100">Foglalás</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useIdopontStore } from '@/stores/idopontfoglalas.js'
import { computed } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const nev = ref();
const telefon = ref();
const route = useRoute();
const router = useRouter();
const idopontId = ref(Number(route.params.id));
const store = useIdopontStore();

onMounted(() => {
  store.fetchIdopontok();
});

const idopont = computed(() => {
  return store.idopontok.find(i => i.id == idopontId.value);
});

const submitFoglalas = async () => {
  await store.foglalIdopont(idopontId.value, nev.value, telefon.value);
  router.push("/");
};
</script>
<style scoped>
</style>