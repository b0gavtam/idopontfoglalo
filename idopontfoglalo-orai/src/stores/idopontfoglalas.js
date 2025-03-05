import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIdopontStore = defineStore('idopont', () => {
 const idopontok = ref([])
  const ujidopontfoglalas = (ujnev, ujtelefon ) =>{
    let ujid;
    idopontok.value.length == 0 ? ujid = 1 : ujid = idopontok.value.length+ 1
    let ujidopont = {
      id: ujid,
      nev: ujnev,
      telefon: ujtelefon
    }
    idopontok.value.push(ujidopont)
  }
  const loadAll = () => {
      fetch('http://localhost:3000/idopontok')
      .then(response => response.json())
      .then(data => idopontok.value = data)
    }
  const back = () => {
    router.push("/")
  }
    

  return {ujidopontfoglalas, loadAll, back, idopontok}
})
