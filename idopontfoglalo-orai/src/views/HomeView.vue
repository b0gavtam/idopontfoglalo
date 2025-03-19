<template>
  <div class="container d-flex justify-content-center align-items-center mt-5">
    <div class="card p-4 shadow-lg" style="max-width: 500px;">
      <h1 class="text-center mb-4 text-primary">-Időpontfoglalás- <br> Orvosi rendelő</h1>
        <div class="mb-3 p-4">
            <label for="idopont" class="form-label">Válasszon egy időpontot:</label>
            <select id="idopont" class="form-select" v-model="valasztottId">
              <option v-for="idopont in szabadIdopontok" :key="idopont.id" :value="idopont.id">
                {{ idopont.datum }} - {{ idopont.ora }}
              </option>
            </select>
            <br>
            <div v-if="valasztottId">
                <button class="btn btn-primary w-100" @click="foglalasIranyitas(valasztottId)">Foglalás</button>
            </div>
        </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from "vue";
import { useIdopontStore } from "@/stores/idopontfoglalas.js";
import { useRouter } from "vue-router";

const store = useIdopontStore();
const router = useRouter()
const valasztottId = ref(null);

onMounted(() => {
  store.fetchIdopontok();
});

const szabadIdopontok = computed(() => {
  return store.idopontok.filter(i => !i.foglalt);
});

const foglalasIranyitas = (valasztottId) => {
  router.push(`/idopontfoglalas/${valasztottId}`)
}
</script>

<style scoped>

</style>
