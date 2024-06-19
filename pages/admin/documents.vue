<template>

         <!-- Content -->
  <div class="w-full min-h-screen h-full p-4 lg:ps-64">
    <div class="sm:px-8 px-0    space-y-4 sm:space-y-6">
      <!-- your content goes here ... -->

      <my-breadcrumb-lg />


      <!-- Card -->
      <div class="flex  lg:overflow-hidden overflow-x-auto overflow-y-hidden flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div
                            class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                            <!-- Header -->
                            <div
                                class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                <div>
                                    <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                        Documents
                                    </h2>
                                    <p class="text-sm text-gray-600 dark:text-neutral-400">
                                        Manage Documents.
                                    </p>
                                </div>

                                <div>
                                    <div class="inline-flex gap-x-2">

                                        <div @click="loadData" :class="{'animate-spin':pending}" class="h-full p-2 rounded-full cursor-pointer hover:bg-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide text-gray-500 a-nimate-spin relative lucide-refresh-ccw">
                                                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                                <path d="M3 3v5h5" />
                                                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                                <path d="M16 16h5v5" />
                                            </svg>

                                        </div>

                                        <button
                                            class="py-2 -flex hidden  px-3 -inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-50 text-neutral-700 hover:bg-gray-100 shadow disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>
                                            Add Admin
                                        </button>

                                        <button @click="openModalDocument"
                                            class="py-2 flex   px-3 -inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 shadow disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
                                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>
                                            New Signature
                                        </button>


                                    </div>
                                </div>
                            </div>
                            <!-- End Header -->

                            <!-- Table -->
                            <table class="min-w-full  lg:px-8 divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead class="bg-gray-50 px-8 dark:bg-neutral-800">
                                    <tr>
                                        <th scope="col" class="ps-6 py-3 text-start">
                                            <label for="hs-at-with-checkboxes-main" class="flex">
                                                <input type="checkbox"
                                                    class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    id="hs-at-with-checkboxes-main">
                                                <span class="sr-only">Checkbox</span>
                                            </label>
                                        </th>

                                        <th scope="col" class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                            <div class="flex items-center gap-x-2">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Title
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start">
                                            <div class="flex items-center gap-x-2">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                            Sign by      
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-start">
                                            <div class="flex items-center gap-x-2">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Status
                                                </span>
                                            </div>
                                        </th>

                                       

                                        <th scope="col" class="px-6 py-3 text-start">
                                            <div class="flex items-center gap-x-2">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                    Created
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-6 py-3 text-end"></th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tr v-for="(doc,key ) in documents.filter(doc => doc.StaffName.includes(store.search)).slice( startAt , startAt + shift) " :key="key">
                                        <td class="size-px whitespace-nowrap">
                                            <div class="ps-6 py-3">
                                                <label for="hs-at-with-checkboxes-1" class="flex">
                                                    <input type="checkbox"
                                                        class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        id="hs-at-with-checkboxes-1">
                                                    <span class="sr-only">Checkbox</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap">
                                            <div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                <div class="flex items-center gap-x-3">
                                                    <img class="inline-block w-[22px]"
                                                        src="/pdf.png"
                                                        alt="Image Description">
                                                    <div class="grow">
                                                        <span
                                                            class="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Docs name </span>
                                                        <span
                                                            class="block text-sm text-gray-500 dark:text-neutral-500"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap">
                                            <div class="px-6 py-3">
                                                <span
                                                    class="block text-sm font-semibold text-gray-800 dark:text-neutral-200"></span>
                                                <span class="block text-sm text-gray-500 dark:text-neutral-500">{{ doc.StaffName}}
                                                    </span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap">
                                            <div class="px-6 py-3">
                                                <span
                                                    class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                                                    <svg class="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16"
                                                        height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    Sign
                                                </span>
                                            </div>
                                        </td>
                                       
                                        <td class="size-px whitespace-nowrap">
                                            <div class="px-6 py-3">
                                                <span class="text-sm text-gray-500 dark:text-neutral-500">{{ dateFormat(doc.createdAt)}}
                                                    </span>
                                            </div>
                                        </td>
                                        <td class="size-px whitespace-nowrap">
                                            <div class="px-6 py-1.5">
                                                <button @click="openModalDelete(doc)"
                                                    class="inline-flex border border-white hover:border-gray-100 p-1.5 rounded-full hover:border hover:bg-gray-50 items-center gap-x-1 text-sm text-red-600 decoration-2 hover:underline font-medium dark:text-blue-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="lucide lucide-trash-2">
                                                        <path d="M3 6h18" />
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                        <line x1="10" x2="10" y1="11" y2="17" />
                                                        <line x1="14" x2="14" y1="11" y2="17" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                   
                                </tbody>
                            </table>
                            <!-- End Table -->

                            <!-- Footer -->
                            <div
                                class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                <div>
                                    <p class="text-sm text-gray-600 dark:text-neutral-400">
                                        <span class="font-semibold ml-1 mr-1 space-x-3 text-gray-800 dark:text-neutral-200">{{ documents.length}}   results</span>
                                      
                                        <span class="font-semibold ml-1 mr-1 space-x-3 text-gray-800 dark:text-neutral-200">page: {{ Math.floor(startAt/shift) +1 }}</span>
                                        <span class="font-semibold ml-1 mr-1  text-gray-800 dark:text-neutral-200">range: {{ startAt+1 }} - {{ startAt+ shift }}</span>
                                    </p>
                                    
                                </div>

                                <div>
                                    <div class="inline-flex gap-x-2">
                                        <button @click="tablePrev"  :class="{'cursor-not-allowed':startAt === 0}"  type="button"
                                            class="py-1.5 bg-gray-100 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 g-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                            <svg class="flex-shrink-0   size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                            Prev
                                        </button>

                                        <button :class="{'cursor-not-allowed': (startAt + shift ) > documents.length}" @click="tableNext" type="button"
                                            class="py-1.5 bg-gray-100 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                            Next
                                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- End Footer -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Card -->
    </div>

    </div>


    <my-modal-delete />

    <my-modal-sign-doc  />

</template>

<script setup>
import { store } from "@/store/main";


definePageMeta({
    layout: 'admin'
})

let isOpen = ref(false)
let pending = ref(false)
let documents = ref([])

//-------- table params
const startAt = ref(0)
const shift = ref(5)

const page = ref(1)

// ---------------- table function

const tableNext = ()=>{
    if( (startAt.value + shift.value +1) < documents.value.length ){
        startAt.value = startAt.value + shift.value +1
    }
  
}



const tablePrev = ()=>{
    if( startAt.value != 0 ){
        startAt.value = startAt.value - shift.value -1
    }
}


const openModalDelete = (doc) => {
    store.modalDelete.data = doc
    store.modalDelete.id = doc.id
    store.modalDelete.text = 'Document ....'
    store.modalDelete.type = 'Document'
    store.modal.delete = true
}

const openModalDocument = () => {
    store.modal.document = true
}


onMounted( async ()=>{

    loadData()
})

const loadData = async () => {
pending.value = true

   //documents.value =[]
    const _token = useCookie('_token')
    console.log('mount');

  try {
const run = useRuntimeConfig()

    const response = await $fetch(run.public.backendUrl + '/api/doc/documents', {
      method: 'get',
      headers : {
        'x-auth-token': _token.value.token
      }
    })
    pending.value = false
    documents.value = response
    console.log(response);
  } catch (error) {
    console.error(error);
  } 

}


const dateFormat =(date)=>{

// Créer un objet Date à partir de la chaîne de caractères
const dateObject = new Date(date);

// Formater la date au format "DD MMM YYYY, HH:mm"
const formattedDate = dateObject.toLocaleString('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

return formattedDate;
}
</script>