<template>
  <div class="flex w-screen md:flex-row py-10 flex-col px-2  bak h-full min-h-screen justify-center items-center   ">






    <div class="max-w-[700px] w-full  md:px-8 px-1  -bg-gray-100 ">

      <div class="w-full lg:absolute mb-4 left-1 top-0 -mt-6 flex  justify-center ">
        <NuxtLink to="/">
          <img src="/logo-light.png" class=" " alt="" srcset="" />
        </NuxtLink>
      </div>


      <div>
        <h1
          class=" text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mb-6  dark:text-white">
          Verify
          <span class="text-blue-600 dark:text-blue-500">now</span> your documents
      </h1>

      </div>




      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-white dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or
              drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Images (PNG) and files (PDF) </p>
          </div>
          <input :disabled="noInteraction" @input="handleFileSelect" id="dropzone-file" type="file" class="hidden"
            accept=".jpg,.jpeg,.png,application/pdf" />
        </label>
      </div>





      <div v-if="fileToUpload.length != 0 || fileUploaded.length != 0"
        class="flex md:w-full  w-full flex-col px-4 bg-white mt-5 border overflow-y-auto pb-4 p-3 rounded-lg ">


        <!-- Footer -->
        <div
          class=" -mt-2 z-[100] mb-0  border-gray-200 rounded-xl py-2 px-4 md:px-5 dark:bg-white/10 dark:border-neutral-700">
          <div class="flex flex-wrap justify-between items-center gap-x-3">
            <div>
              <span class="text-sm font-semibold text-gray-600 dark:text-white">
                Information
              </span>
            </div>
            <!-- End Col -->

            <div class="-me-2.5">

              <button  :class="{'bg-red-400 hover:bg-red-500 hover:text-gray-100 text-gray-50':noInteraction }"  type="button" @click="reset"
                class="py-2 px-3 inline-flex  items-center gap-x-1.5 text-sm font-medium rounded-lg   text-gray-600 hover:bg-gray-100 bg-gray-50 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" x2="10" y1="11" y2="17"></line>
                  <line x1="14" x2="14" y1="11" y2="17"></line>
                </svg>
                Delete
              </button>

              <button :disabled="noInteraction" :class="{'cursor-not-allowed':noInteraction}" type="button" @click="upload"
                class="py-2 px-3 ml-2  inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg   bg-blue-500 text-gray-100 hve:text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide size-4 lucide-upload">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload
              </button>


            </div>
            <!-- End Col -->
          </div>
        </div>
        <!-- End Footer -->



        <!-- File Uploading Progress Form -->
        <div v-if="fileToUpload.length != 0">


          <!-- Uploading File Content -->
          <div v-for="(item, index) in fileToUpload" :key="index" class="mb-2 mt-4 flex w-full justify-between items-center">
            <div class="flex items-center gap-x-3">
              <div v-if="item.type==='pdf'" >
                <img src="/pdf.png" class="w-[24px]" alt="" srcset="">

              </div>
              <div v-else >
                <img src="/image.png" class="w-[24px]" alt="" srcset="">

              </div>
              <div>
                <p class="text-sm font-medium text-gray-800 dark:text-white">{{  wordCat(item.file.name) }}</p>
                <p class="text-xs text-gray-500 dark:text-neutral-500">7 KB</p>
              </div>
            </div>

            <div class="inline-flex items-center gap-x-2">

              <p @click="removeItem(item)" class="text-gray-500 cursor-pointer  hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="#">
                <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" x2="10" y1="11" y2="17"></line>
                  <line x1="14" x2="14" y1="11" y2="17"></line>
                </svg>
              </p>
            </div>
          </div>
          <!-- End Uploading File Content -->

          <!-- Progress Bar -->
          <div v-if="isUploaded" class="flex items-center gap-x-3 whitespace-nowrap">
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
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
        <!-- End File Uploading Progress Form -->





        <!----------------------------------------------OK----------------------------------------------------------------->





        <!-- File Uploading Progress Form -->
        <div v-if="fileUploaded.length !=0">

          <div
            class="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-green-300 before:me-6 after:flex-1 after:border-t after:border-green-300 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
            uploaded </div>
          <!-- Uploading File Content -->


          <div v-for="(item, index) in fileUploaded" :key="index" class="mb-2 flex justify-between items-center">
            <div class="flex items-center gap-x-3">
              <div v-if="item.type==='pdf'" >
                <img src="/pdf.png" class="w-[24px]" alt="" srcset="">

              </div>
              <div v-else >
                <img src="/image.png" class="w-[24px]" alt="" srcset="">

              </div>
              <div>
                <p class="font-semibold text-neutral-600">{{wordCat(item.file.name) }}</p>
                <p class="text-xs text-gray-500 dark:text-neutral-500">7 KB</p>
              </div>
            </div>
            <div class="inline-flex items-center gap-x-2">
              <p class="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="#">
                <svg class="flex-shrink-0 size-4 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                  </path>
                </svg>
              </p>

            </div>
          </div>
          <!-- End Uploading File Content -->



          <!-- Progress Bar -->
          <div v-if="isUploaded===false" class=" flex items-center gap-x-3 whitespace-nowrap">
            <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar"
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div
                class="flex flex-col justify-center rounded-full overflow-hidden bg-green-500 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style="width: 100%"></div>
            </div>
            <div class="w-6 text-end">
              <span class="text-sm text-gray-800 dark:text-white">100%</span>
            </div>
          </div>
          <!-- End Progress Bar -->

        </div>
        <!-- End File Uploading Progress Form -->

      </div>

      <!--  <div class="flex justify-center w-full mt-3 ">

      </div>
      -->

    </div>



    <div class="absolute z-10 lg:flex hidden -left-10  w-[310px] bottom-0 ">
      <img src="/Upload-pana.svg" alt="" srcset="">
    </div>


  </div>


  <div class="mt-2">


    <div v-if="read" class="w-screen h-screen  flex justify-center  items-center  fixed z-[150]  top-0 left-0 " >
      <div class="w-screen h-screen absolute top-0 left-0 bg-gray-50 opacity-40 " ></div>
      <div class="w-[180px] flex self-center z-[160] rounded-full h-[180px] border-t-4  border-r-4 border-b-4 border-l-0   border-l-gray-100 animate-spin  border-blue-300  "></div>
    </div>

    <div class="card flex justify-content-center">

        <Dialog  v-model:visible="openResult" maximizable modal header="Authenticity result" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }  ">
          <div v-for="(item, index) in fileUploaded" :key="index" class="mb-2 px-1 md:px-6  mt-4 flex w-full justify-between items-center">
            <div class="flex w-[10%]  items-center gap-x-4">
              <div v-if="item.type==='pdf'" >
                <img src="/pdf.png" class="w-[25px]" alt="" srcset="">

              </div>
              <div v-else >
                <img src="/image.png" class="w-[25px]" alt="" srcset="">

              </div>

            </div>

            <div class="w-[70%] gap-y-1 flex justify-center md:flex-row flex-col items-center gap-x-2 text-blue-600 font-semibold "  >
              <div>
                <p class="text-xs font-medium text-center  text-gray-800 dark:text-white">{{  wordCat(item.file.name) }}</p>

              </div>

              <div>
              Trust but verify

              </div>
              <svg class="flex-shrink-0 size-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                  </path>
                </svg>
            </div>

            <div class="flex w-[15%] justify-end items-center gap-x-2">

              <p class="text-gray-500 cursor-pointer  hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>

              </p>
            </div>
          </div>



          <div class="w-full flex  mt-8 ">
            <button @click="reset" type="button" class="py-2 px-3  justify-center flex w-full items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
  Close
</button>
          </div>
        </Dialog>
    </div>



    <my-footer />

  </div>
</template>

<script setup>

const fileInput = ref(null)

const progress = ref(0)
const isUploaded = ref(false)
const noInteraction  = ref(false)
const read = ref(false)
const openResult = ref(false);


const fileToUpload = ref([])
const fileUploaded = ref([])


const formData = new FormData()


const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (!file) return

  // Update file size for progress bar
  const fileSize = file.size / 1024 / 1024 // Convert to MB

  // Create FormData object
  // formData.append('file', file)

  if (isImageOrPDF(file.name) === 1) {
    fileToUpload.value.push({'file':file, 'type':'image'})
  } else {
    fileToUpload.value.push({'file':file,'type':'pdf'})
  }

  // Reset progress bar
  progress.value = 0




}

const isImageOrPDF = (fileName) => {
  const extension = fileName.split('.').pop().toLowerCase();
  const imageExtensions = ['jpg', 'jpeg', 'png'];
  const pdfExtension = 'pdf';

  if (imageExtensions.includes(extension)) {
    return 1;
  } else if (extension === pdfExtension) {
    return 0;
  } else {
    return -1; // Neither image nor PDF
  }
}

function wordCat(mot) {
  let max = 30
  if (mot.length > max) {
    return mot.substring(0, max) + "...";
  } else {
    return mot;
  }
}


const upload = async() => {
 isUploaded.value = true
 noInteraction.value = true

fileToUpload.value.forEach(async(_file) =>  {
      if(_file.type==='pdf'){
        try {
          await apiRequestPDF(_file.file)

        } catch (error) {
          console.log(error);
        }finally{
         /* fileUploaded.value = fileToUpload.value
       fileToUpload.value = []
        isUploaded.value =false
      read.value = true
      read.value =false
      openResult.value = true */
        }
      }
});

 /* setTimeout(() => {
       fileUploaded.value = fileToUpload.value
       fileToUpload.value = []
        isUploaded.value =false
      read.value = true
  }, 2000);


  setTimeout(() => {
      read.value =false
      openResult.value = true
  }, 5000); */
}

const reset = () => {
  fileToUpload.value =[]
    fileUploaded.value = []
    noInteraction.value = false
    openResult.value = false
}

const apiRequestPDF= async(file)=>{
const formData = new FormData()
 formData.append('file', file)
console.log(formData);
 try {
    const run = useRuntimeConfig()

    const response = await $fetch(run.public.backendUrl + '/api/doc/verify', {
      method: 'post',
      body:formData
    })
    pending.value = false
    documents.value = response
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}



const deleteItem =(tableau, element) => {
  const index = tableau.indexOf(element);
  if (index !== -1) {
    tableau.splice(index, 1);
  }
}

const removeItem = (element) =>{

   deleteItem(fileToUpload.value,element)

}


</script>



<style scoped>.bak {
  background: rgb(235, 235, 235);
  background: linear-gradient(129deg, rgba(235, 235, 235, 1) 86%, rgba(37, 99, 235, 1) 94%, rgba(5, 240, 38, 0.9009803750601804) 97%);
}</style>
