// store.js
import { reactive } from 'vue'



export const store = reactive({
  search :'',
  active: '/admin/dashboard',
  modal:{
    delete:false, 
    institution:false,
    document:false,
    user:false,
    
  },
  modalDelete:{
    data:null,
    text: null,
    id:null,
    type:null
  }

})


export const getBreadcrumb =  (url) => {
    // On utilise l'expression régulière `/([^/]+)` pour extraire le second fragment
    const regex = /([^/]+)/g;
    const matches = url.match(regex);
  
    // On vérifie s'il y a au moins deux fragments
    if (matches && matches.length >= 2) {
      // On retourne le second fragment
      return matches[1];
    } else {
      // Si aucun fragment n'est trouvé, on retourne une chaîne vide
      return "";
    }
  }

export  function fupper(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  
  