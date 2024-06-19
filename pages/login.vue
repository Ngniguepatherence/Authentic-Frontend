<template>
  <!-- Hero -->
  <div class="relative bg-gray-100 overflow-hidden">


    <!-- End Col -->


    <div class="mx-auto  max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">

      <div
        class="hidden md:block md:absolute md:top-0 md:start-1/2 md:end-0 h-full bg-[url('/login2.svg')] bg-no-repeat bg-center bg-cover">
      </div>


      <div class="md:pe-8 -mt-6 md:w-1/2 xl:pe-0 xl:w-5/12">
        <!-- Title -->
        <nuxt-link to="/">
          <img src="/logo-light.png" class=" md:absolute relative flex self-center mb-4  top-0  md:left-20 " alt=""
            srcset="">
        </nuxt-link>
        <h1
          class="text-3xl mt-8 text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-neutral-200">
          Solving problems for every
          <span class="text-blue-600 dark:text-blue-500">Authorities</span>
        </h1>
        <p class="mt-1 mb-2 text-neutral-600 text-sm italic">A secure way of signing and ensuring the integrety of a
          document.</p>

        <!-- End Title -->

        <div class="mt-4 grid">
          <button type="button"
            class="py-3 px-4  hidden -inline-flex bg-gray-50 justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 hover:bg-white text-gray-800 shadow-sm 0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            <svg class="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
              <path
                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                fill="#4285F4" />
              <path
                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                fill="#34A853" />
              <path
                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                fill="#FBBC05" />
              <path
                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                fill="#EB4335" />
            </svg>
            Sign up with Google
          </button>
        </div>

        <div v-if="errors.length != 0"
          class=" bg-red-400 flex items-center flex-col  gap-y-1  rounded-md px-4 py-2 w-full ">

          <span v-for="(error, key, ) in errors" :key="key" class=" w-full text-white text-center "> {{ error }}</span>
        </div>

        <div
          class="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-1 before:border-t before:me-6 after:flex-1 after:border-t after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">
          Or</div>

        <!-- Form -->
        <form @submit.prevent="submit">
          <div class="mb-4">
            <label for="hs-hero-name-2" class="block text-sm font-medium dark:text-white"><span class="sr-only">Full
                name</span></label>
            <input v-model="email" type="text" id="hs-hero-name-2"
              class="py-3 px-4 block w-full border  rounded-lg text-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500 -border-blue-500 ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="email">
          </div>



          <div class="mb-4">
            <label for="hs-hero-password-2" class="block text-sm font-medium dark:text-white"><span
                class="sr-only">Password</span></label>
            <input v-model="password" type="password" id="hs-hero-password-2"
              class="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm -border-blue-500 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Password">
          </div>

          <div class="grid">
            <button type="submit"
              class="py-3 px-4 flex  justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none">

              <span v-if="pending"
                class="w-[20px] h-[20px] rounded-full border-4 border-l-inherit mt-1  animate-spin  border-white block"></span>

              <span>
                Sign
                up
              </span>

            </button>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </div>
  <!-- End Hero -->
</template>


<script setup>

import { store } from "@/store/main";

const email = ref('')
const password = ref('')
const errors = ref([])

const pending = ref(false)

function addTab(tableau, element) {
  if (!tableau.includes(element)) {
    tableau.push(element);
  }
}



const submit = async (e) => {
  errors.value = []
  if (email.value.trim().length == 0 && password.value.trim().length == 0) {
    addTab(errors.value, 'You must provide an email and password.')
    return;
  }



  const run = useRuntimeConfig()

  try {
    pending.value = true
    const response = await $fetch(run.public.backendUrl + '/api/institutions/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })


    const _token = useCookie('_token')
    _token.value = null;
    _token.value = response
    //_token.value.user.value = '' 
    console.log(response)

    // get user information endpoint (/institution/id)  /admin/dashboard

    if (response.user.type === 'institution') {
      let user = await getInstitution(run.public.backendUrl, response.user.id, response.token)

    } else if (response.user.type === 'user') {
      console.log('user attemp');
      setUser()
    }

    //  WARNING!!!!!!!!!!!!!!!!!

  } catch (error) {
    console.log(error.data); //Invalid Credentials
    // console.log(error.msg ); //Invalid Credentials
    if (error.data.msg === "Invalid Credentials") {
      addTab(errors.value, 'Invalid email or password.')

    } else {
      addTab(errors.value, 'Please verify your internet connexion.')
    }
  } finally {
    pending.value = false
    store.active = '/admin/dashboard'

  }



}


const getInstitution = async (base, id, token) => {

  try {
    const response = await $fetch(base + '/api/institutions/institution/' + id, {
      method: 'get',
      headers: {
        'x-auth-token': token
      }
    })

    const _token = useCookie('_token')
    _token.value.user.value = response
    console.log(_token);
    navigateTo('/admin/dashboard/')

  } catch (error) {
    console.error(error);
  }
}



const setUser = async () => {
  const _token = useCookie('_token')
  _token.value.user.value = _token.value.user
  navigateTo('/admin/dashboard/')

}
</script>