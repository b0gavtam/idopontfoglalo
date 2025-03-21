import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification';
import axios from 'axios';
import { useRouter } from 'vue-router';

export const useIdopontStore = defineStore("idopont", () => {
  const idopontok = ref([]);
  const router = useRouter()
  const toast = useToast()
  const fetchIdopontok = async () => {
    try {
      const response = await axios.get("http://localhost:3000/idopontok");
      idopontok.value = response.data;
    } catch (error) {
      toast.error("Hiba az időpontok lekérésekor!")
      console.error("Hiba az időpontok lekérésekor:", error);
    }
  };

  
  const idopontFoglalas = async (id, nev, telefon) => {  
    try {
      if (!nev || !telefon) {
        toast.warning("Minden mezőt ki kell tölteni!");
        
      }
      else{
        await axios.patch(`http://localhost:3000/idopontok/${id}`, { foglalt: true, nev, telefon });
        fetchIdopontok();
        toast.info("Foglalás sikeres!");
        router.push("/");
      }
    } catch (error) {
      console.error("Hiba a foglalás során:", error);
    }
  };

  return { idopontok, fetchIdopontok, idopontFoglalas};
});