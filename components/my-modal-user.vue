<template>
    <form @submit.prevent="submit" class="card flex  justify-content-center">



        <Dialog v-model:visible="store.modal.user" maximizable modal header="New staff" :style="{ width: '35rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">

            <div v-if="errors.length > 0" class=" bg-red-400 flex flex-col  gap-y-1  rounded-md px-4 py-2 w-full ">
                <ul>
                    <li type="disc" v-for="(error, key) in errors"
                        class=" w-full font-semibold text-white text-xs mt-0.5 mb-0.5 ">{{ error }}</li>
                </ul>
            </div>

            <div class="flex w-full mt-2 flex-col gapy-4  rounded-md  ">

                <div class="flex w-full flex-col mt-4 gap-y-4">
                    <div class="relative">
                        <input type="text" v-model="name" id="hs-floating-input-email" class="peer border p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2" placeholder="you@email.com">
                        <label for="hs-floating-input-email"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Name <span
                                class="text-red-500 text-sm ">*</span></label>
                    </div>
                </div>

                <div class="flex w-full flex-col mt-4 gap-y-4">
                    <div class="relative">
                        <input type="email" v-model="email" id="hs-floating-input-email" class="peer border p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2" placeholder="you@email.com">
                        <label for="hs-floating-input-email"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Email <span
                                class="text-red-500 text-sm ">*</span></label>
                    </div>
                </div>

  <!-- Select -->

  <select  v-model="type"  data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}' class="py-4 mt-4 bg-white border rounded-md px-3 ">

            <option class="font-semibold "  v-for="(type, key) in typeOption" :key="key">{{ type }}</option>

          </select>
          <!-- End Select -->

    

          <div class="flex pl-4 mt-4">
  <input @click="handlePassword" v-model="isRandom" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-checkbox" checked="">
  <label for="hs-checked-checkbox" class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Generate a password   </label>
  

  <span @click="copy(password)" class=" mt-0.5 pl-4 dark:border-neutral-700">
    
    <svg class="js-clipboard-default size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    </svg>

    <svg class="js-clipboard-success hidden size-4 text-blue-600 rotate-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </span>
  
  <span v-if="copied" class="text-xs font-se mt-0.5  text-blue-600 ml-4" >Copy</span>
      
</div>
               
                <div class="flex w-full flex-col mt-4 gap-y-4">
                    <div class="relative">
                        <input type="password" v-model="password" id="hs-floating-input-email" class="peer border p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2" placeholder="you@email.com">
                        <label for="hs-floating-input-email"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Password <span
                                class="text-red-500 text-sm ">*</span></label>
                    </div>
                </div>

                <div class="flex w-full flex-col mt-4 gap-y-4">
                    <div class="relative">
                        <input type="password" v-model="confirm" id="hs-floating-input-email" class="peer border p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2" placeholder="you@email.com">
                        <label for="hs-floating-input-email"
                            class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Confirm Password <span
                                class="text-red-500 text-sm ">*</span></label>
                    </div>
                </div>

                <div class="mt-6 mb-4 px-4">


                    <div class="flex justify-between">
                        <button @click="reset" type="button"
                            class="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-red-500 disabled:opacity-50 disabled:pointer-events-none">
                            Reset
                        </button>
                        <button @click="submit" type="submit"
                            class="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                            <span v-if="pending"
                                class="animate-spin cursor-pointer inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                                role="status" aria-label="loading"></span>
                            Submit
                        </button>
                    </div>
                </div>

            </div>
        </Dialog>
    </form>

    <Toast />
</template>

<script setup>

import { store } from "@/store/main";
import { log10 } from "chart.js/helpers";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const name = ref('')
const email = ref('')
const role = ref('')
const password = ref('')
const confirm = ref('')

const errors = ref([])
const pending = ref(false)

const type = ref('')
const typeOption = ref(['User','Admin'])

const isRandom = ref(false) 
const passRand = ref('') 



onMounted(() => {
    type.value = typeOption.value[0]
})


import { useClipboard } from '@vueuse/core'

const source = ref('Hello')
const { text, copy, copied, isSupported } = useClipboard({ source })


const visible = ref(false);

const submit = async () => {

    let isOkay = true
    errors.value = []
    if (name.value.length === 0) {
        errors.value.push('Name must be fill.')
        isOkay = false
    }

    if (email.value.length === 0) {
        errors.value.push('Email must be fill.')
        isOkay = false

    }

  



    if (!isEmailValid(email.value)) {
        errors.value.push('Please provide an existing email.')
        isOkay = false
    }

    if (password.value.length === 0 || password.value != confirm.value) {
        errors.value.push('Password should be provide or match.')
        isOkay = false

    }

    if (isOkay) {
        errors.value = []
        console.log('okay');
        //  request  
        const _token = useCookie('_token')
        pending.value = true
        console.log(_token.value);
        const formData = new FormData()
        formData.append('name', name.value)
        formData.append('email', email.value)
        formData.append('password', password.value)
        formData.append('role', role.value)
        console.log(formData);
        const run = useRuntimeConfig()
        try {
            const response = await $fetch(run.public.backendUrl + '/api/institutions/register_user', {
                method: 'POST',
                body: {
                    name: name.value,
                    role: type.value.toLowerCase(),
                    email: email.value,
                    password: password.value
                },
                headers: {
                   // 'Content-Type': 'multipart/form-data',
                    'x-auth-token': _token.value.token,
                }
            })

            console.log(response)
            console.log('Data save')
            toast.add({ severity: 'success', summary: 'Success', detail: 'User successfully add', life: 3000 });
            store.modal.user = false;
            reset();
        } catch (error) {
            console.error(error);
            errors.value.push('Something wrong, please try again later.')
        } finally {
            pending.value = false
        }


    }

}



function isEmailValid(email) {
    // Check if email is empty
    if (!email) {
        return false;
    }

    // Regular expression for basic email format
    const emailRegex = /\S+@\S+\.\S+/;

    // Check if email matches the regex
    return emailRegex.test(email);
}



function generatePassword() {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < 16; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}



const reset = () => {
    email.value = ''
    name.value = ''
    role.value = ''
    password.value = ''
    confirm.value = ''
    errors.value = []
    isRandom.value = false
}





const handlePassword = (e) => {
  password.value = generatePassword()
  confirm.value = password.value

}




</script>