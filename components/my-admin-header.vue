<template>



  <!-- ========== HEADER ========== -->
  <header
    class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
    <nav class="flex basis-full items-center w-full mx-auto px-4 sm:px-6" aria-label="Global">
      <div class="me-5 lg:me-0 lg:hidden">
        <!-- Logo -->
        <NuxtLink to="/"
          class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          aria-label="Preline">
          <img src="/logo-light.png" alt="" srcset="">
        </NuxtLink>
        <!-- End Logo -->
      </div>

      <div class="w-full flex items-center  justify-between  ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div class="sm:hidden">
          <button type="button"
            class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"></svg>
          </button>
        </div>

        <div class="hidden lg:block">
          <label for="icon" class="sr-only">Search</label>
          <div class="relative  min-w-72 md:min-w-80">
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg class="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input v-model="store.search" type="text" id="icon" name="icon"
              class="py-2 border  px-4 ps-11 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Search">
          </div>
        </div>

        <div class="hidden sm:block">
          <label for="icon" class="sr-only">Search</label>
          <div class="relative  min-w-72 md:min-w-80">

          </div>
        </div>

        <div class="flex flex-row self-end gap-x-4 items-center justify-end gap-2">

          <div>
            <h2 class=" sm:text-sm   text-xs   -ml-4 text-gray-700 font-semibold  ">
              {{ toUpper(name) }}
            </h2>




          </div>


          <div v-if="pending">

            <button id="hs-dropdown-with-header" type="button"
              class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
              <div>
                <div class="border flex justify-center  items-center border-blue-600 p-1  rounded-full">

                  <div class="w-[38px] h-[38px] rounded-full  animate-pulse bg-gray-100">

                  </div>
                </div>
              </div>
            </button>
          </div>


          <div v-else class="hs-dropdown [--placement:bottom-right] relative inline-flex">

            <div class="border flex justify-center  items-center border-blue-600 p-2  rounded-full">

              <button id="hs-dropdown-with-header" type="button"
                class="w-[40px]  h-[40px] flex justify-center items-center  text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
                <img class="inline-block size-[39px] scale-125 rounded-full ring-2 ring-white dark:ring-neutral-800"
                  :src="image" alt="Image Description">
              </button>
            </div>



            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
              aria-labelledby="hs-dropdown-with-header">
              <div class="py-3 px-5 -m-2 bg-gray-50 rounded-t-lg dark:bg-neutral-800">
                <p class="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
                <p class="text-sm font-medium text-gray-800 dark:text-neutral-300">{{ user.value.headerName }}</p>
              </div>
              <div class="mt-2 py-2 w-full first:pt-0 last:pb-0">

                <button @click="logout()"
                  class="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-log-out">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->

</template>


<script setup>

import { store } from "@/store/main";

const pending = ref(true)
const image = ref('/profile.png')
const name = ref('')
const user = ref({
  value: {
    name: '',
    headerName:''
  },
  type: ''

})


onMounted(() => {

  const _token = useCookie('_token')
  user.value = _token.value.user
  pending.value = false
  image.value = user.value.type === 'institution' ? '/institution.jpeg' : '/profile.png'
  name.value = user.value.type === 'institution' ? user.value.name + ", Hey " + user.value.value.headerName : 'Hey, ' + user.value.name

})


const logout = async () => {
  //  api call
/*
  const run = useRuntimeConfig()
  try {
    const response = await $fetch(run.public.backendUrl + '/api/institutions/logout/', {
      method: 'post',
      body: {
        'x-auth-token': token
      }
    })

  } catch (error) {
    console.error(error);
  } finally(
    const _token = useCookie('_token')
    _token.value = undefined
    navigateTo('/login')
  )*/

  const _token = useCookie('_token')
    _token.value = null
    navigateTo('/login')

}


const toUpper = (word) => {
  return word.toUpperCase();
}
</script>