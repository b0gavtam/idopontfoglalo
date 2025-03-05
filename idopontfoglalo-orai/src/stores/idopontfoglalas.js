import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useIdopontStore = defineStore('idopont', () => {
 
  const ujidopontfoglalas = () =>{
    router.push('/ujidopontfoglalas')


  }
  const loadAll = () => {
    fetch('http://localhost:3000/idopontok')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
      })
  }

  return {ujidopontfoglalas, loadAll }
})
