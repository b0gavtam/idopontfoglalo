<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Időpontfoglalás - Orvosi rendelő</h1>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="form-group">
          <label for="idopont">Válassz egy időpontot: </label>
          <select id="idopont" v-model="valasztottId">
            <option v-for="idopont in szabadIdopontok" :key="idopont.id" :value="idopont.id">
              {{ idopont.datum }} - {{ idopont.ora }}
            </option>
          </select>
        </div>
          <div v-if="valasztottId">
              <button class="btn btn-primary" @click="foglalasIranyitas(valasztottId)">Foglalás</button>
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
