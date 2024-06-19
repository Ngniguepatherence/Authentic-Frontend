<template>


  <!-- ========== MAIN CONTENT ========== -->

  <!-- Content -->
  <div class="w-full min-h-screen h-full p-4 lg:ps-64">
    <div class="sm:px-8 px-0    space-y-4 sm:space-y-6">
      <!-- your content goes here ... -->

      <my-breadcrumb-lg />

      <MyStatsCard />

      <my-chart-stats />

    </div>

  </div>
  <!-- End Content -->
  <!-- ========== END MAIN CONTENT ========== -->

  <div  v-if="welcome" class=" fixed z-[9000]  top-0 flex justify-center  items-center  left-0 w-screen h-screen  " >
    <div class="absolute  left-0 top-0 -bg-neutral-300 opacity-40  w-screen h-screen"></div>
    <div class="text-7xl font-bold animate-bounce opacity-100 text-white uppercase ">
     
     <span class="text-green-600" >Stop</span>
     <span class="text-red-600"> Doc</span>
     <span class="text-yellow-500"> Fraud</span>.


    </div>
      
    
</div>

</template>





<script setup>

import Chart from 'primevue/chart';

import { ref, onMounted } from "vue";
import MyStatsCard from '../../components/my-stats-card.vue';


const  welcome = ref(false)

definePageMeta({
  layout: 'admin'
})

onMounted(()=>{
    setTimeout(() => {
      confettiAnime()
    }, 4000);
})

const confettiAnime = () => {
  let end = Date.now() + (3.5 * 1000);
  welcome.value= true

  setTimeout(() => {
    welcome.value = false
  }, 2500);
  // go Buckeyes!
  let colors = ['#00ff00', '#0b489b'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}




</script>
