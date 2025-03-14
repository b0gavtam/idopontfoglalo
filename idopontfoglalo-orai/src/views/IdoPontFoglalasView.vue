<template>
  <div class="container justify-content-center mt-5">
    <h1 class="text-center mb-4">Új időpont foglalása</h1>

    <p v-if="idopont" class="text-center mb-4">
      {{ idopont.datum }} - {{ idopont.ora }}
    </p>

    <form @submit.prevent="submitFoglalas" class="w-50 mx-auto">
      <div class="mb-3">
        <label for="nev" class="form-label">Név:</label>
        <input type="text" id="nev" v-model="nev" class="form-control" required />
      </div>

      <div class="mb-3">
        <label for="telefon" class="form-label">Telefonszám:</label>
        <input type="tel" id="telefon" v-model="telefon" class="form-control" required />
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-success">Foglalás</button>
      </div>
    </form>
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
.container {
  max-width: 400px;
  margin: auto;
  text-align: center;
}
.submit-button {
  background-color: #008CBA;
  color: white;
  padding: 10px;
}
</style>