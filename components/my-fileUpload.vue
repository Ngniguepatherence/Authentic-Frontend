
<template>
    <div class="card border rounded-lg mt-4 ">
        <Toast />
        <FileUpload name="demo[]" url="/api/upload" @upload="onTemplatedUpload($event)" :multiple="true" accept="" :maxFileSize="1000000000000000" @select="onSelectedFiles">
            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                <div class="flex  justify-between items-center flex-1 gap-x-4">
                    <div class="flex gap-2">
                        <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                        <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
                        <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
                    </div>
                    <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
                        ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                    >
                </div>
            </template>
            <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                <div v-if="files.length > 0">
                    
                    <h5 class="text-left text-orange-600" >Pending</h5>

                    <div class="flex flex-wrap   p-0 sm:p-5 gap-5">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 items-center w-full px-6 flex justify-between flex-column border-1 surface-border align-items-center gap-y-2 gap-x-4 ">
                            <!--  <div>
                              <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                            </div>
                             -->
                             <div class="border bg-gray-50 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                             </div>


                             <div class="flex  ">
                                <span class="font-semibold">{{ cutWord(file.name) }}</span>
                             </div>

                             <div>{{ formatSize(file.size) }}</div> 

                            <div class="flex   items-center ">
                                <Badge value="Pending..." severity="warning" />
                                <Button icon="pi pi-times" class="flex self-end " @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded  severity="danger" />
                            </div>

                            <div class="text w-10 h-6 hidden -flex justify-center items-center text-white text-xs italic font-semibold rounded-full p-2 bg-red-600">
                                Fake
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5 class="text-left text-green-600" >Completed</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 items-center w-full px-6 flex justify-between flex-column border-1 surface-border align-items-center gap-y-2 gap-x-4">
                           <!--  <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
                            </div>
                            -->
                            <div class="border bg-gray-50 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-gray-600 lucide-file"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                             </div>


                             <div class="flex  ">
                                <span class="font-semibold">{{ cutWord(file.name) }}</span>
                             </div>

                             <div>{{ formatSize(file.size) }}</div> 

                            <div class="flex   items-center ">
                                <Badge value="Completed" severity="success" />
                                <Button icon="pi pi-times" class="flex self-end " @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded  severity="danger" />
                            </div>

                            <div class="text  w-10 h-6 flex justify-center items-center text-white text-xs italic font-semibold rounded-full p-2 bg-blue-600">
                                News
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="flex items-center justify-center flex-col">
                    <i class="pi pi-cloud-upload border-2 rounded-full border-circle p-5 text-8xl text-400 border-400" />
                    <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                </div>
            </template>
        </FileUpload>
    </div>
</template>

<script setup>

import 'primeicons/primeicons.css'

import { ref } from 'vue';
import { usePrimeVue } from 'primevue/config';
import { useToast } from "primevue/usetoast";

const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const cutWord = (mot) => {
    let longueurMax = 20
  if (mot.length <= longueurMax) {
    return mot;
  } else {
    return mot.substring(0, longueurMax) + "...";
  }
}

const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
    files.value = event.files;
    files.value.forEach((file) => {
        totalSize.value += parseInt(formatSize(file.size));
    });
};

const uploadEvent = (callback) => {
    totalSizePercent.value = totalSize.value / 10;
    callback();
};

const onTemplatedUpload = () => {
    toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};

const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    const sizes = $primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};
</script>

<style>

 @import url("primevue/resources/themes/lara-light-green/theme.css");
 </style>
