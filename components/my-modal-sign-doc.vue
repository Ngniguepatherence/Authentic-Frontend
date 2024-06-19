<template>
  <form @submit.prevent="submit" class="card flex  justify-content-center">



    <Dialog v-model:visible="store.modal.document" maximizable modal header="Sign document " :style="{ width: '35rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">



      <div class="flex w-full mt-2 flex-col gapy-4  rounded-md  ">


        <div v-if="hasError" class=" bg-red-400 flex items-center  gap-y-1  rounded-md px-4 py-2 w-full ">


          <ul>
<li type="disc"  class=" w-full text-white text-xs font-semibold mt-0.5 mb-0.5 ">Missing file or title</li>
</ul>
        </div>

        <div class="flex w-full flex-col mt-4 gap-y-4">
          <div class="relative">
            <input type="title" v-model="title" id="hs-floating-input-email" class="peer border p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
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
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Title <span
                class="text-red-500 text-sm ">*</span></label>
          </div>


          <!-- Select -->
          <select  data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}' class="py-4 hidden bg-white border rounded-md px-3 ">

            <option @input="handleType(key)" v-for="(type, key) in typeOption" :key="key">{{ type }}</option>

          </select>
          <!-- End Select -->


          <div class="flex gap-y-1 flex-col">
            <label for="file-input-medium" class="text-xs">Choose file <span class="text-blue-600">(PDF only) <span
                  class="text-red-500 text-sm ">*</span></span> </label>
            <input @input="handleFileSelect" accept="application/pdf" type="file" name="file-input-medium"
              id="file-input-medium" class="block  py-0.5 w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
      file:bg-gray-50 file:border-0
      file:me-4
      file:py-3 file:px-5
      dark:file:bg-neutral-700 dark:file:text-neutral-400">
          </div>

          <!-- Progress Bar -->
          <div v-if="upload" class="flex px-1 items-center gap-x-3 whitespace-nowrap">
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar"
              aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">
              <div
                class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                style="width: 25%"></div>
            </div>
            <div class="w-6 text-end">
              <span class="text-sm text-gray-800 dark:text-white">25%</span>
            </div>
          </div>
          <!-- End Progress Bar -->

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




    </Dialog>
  </form>

  <Toast />
</template>

<script setup>

import { store } from "@/store/main";
import { useToast } from "primevue/usetoast";

const toast = useToast();


const title = ref('')
const file = ref(null)
const type = ref('')
const typeOption = ref(['Fax', 'Courriel', 'DEGREE', 'DECREE'])
const hasError = ref(false)
const pending = ref(false)
const upload = ref(false)

onMounted(() => {
  type.value = typeOption.value[0]
  hasError.value = false
})



const visible = ref(false);

const submit = async () => {

  hasError.value = false

  if (title.value.trim().length === 0 || file.value === null) {
    hasError.value = true
    return;
  }

  pending.value = true

  const _token = useCookie('_token')
  const formData = new FormData()
  formData.append('file', file.value)
  formData.append('title', title.value)
  const run = useRuntimeConfig()

  try {
    const response = await $fetch(run.public.backendUrl + '/api/doc/signfile', {
      method: 'post',
      body: formData,
      headers: {
        //'Content-Type': 'multipart/form-data',
        'x-auth-token': _token.value.token,
      }  
    })

    pending.value = false
    store.modal.document = false
    //console.log(response);
    toast.add({ severity: 'success', summary: 'Success', detail: 'Document successfully signed', life: 3000 });
    reset()
  } catch (error) {
    console.error(error);
  }
}



const handleFileSelect = (event) => {
  const f = event.target.files[0]
  if (!f) return

  // Update file size for progress bar
  const fileSize = f.size / 1024 / 1024 // Convert to MB

  file.value = f

}

const handleType = (key) => {
  type.value = typeOption.value[key]
}

const reset = () => {
  title.value = ''
  file.value = null
  hasError.value = false
 
}




</script>
