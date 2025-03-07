<script setup>
import { useIdopontStore } from '@/stores/idopontfoglalas';
const store = useIdopontStore()
</script>

<template>
      <div class="container">
        <div class="foglalas">
          <h2>Időpontfoglalás</h2>
          <select name="idopontok" id="idopontok">
            <optgroup v-for=" idopont in store.idopontok" :key="idopont.id">
              <option value="">{{ idopont.datum, idopont.ora }}</option>
            </optgroup>
          </select>
        </div>

      </div>
</template>
