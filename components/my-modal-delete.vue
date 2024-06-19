<template>
    <div class="card flex justify-content-center">

        <Dialog v-model:visible="store.modal.delete" modal header="Warning" :style="{ width: '35rem' }">


            <div v-if="!pending" class="w-full flex  justify-center mb-6 -mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide text-red-500 lucide-triangle-alert">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                </svg>
            </div>

            <div v-else class="w-full flex  justify-center mb-6 -mt-1">

                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide text-gray-500 mt-1 animate-spin relative lucide-refresh-ccw">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                    <path d="M16 16h5v5" />
                </svg>
            </div>
            <div class="w-full">
                <span class="p-text-secondary text-600-gray block mb-5">Do you really want to delete
                <span class=" font-semibold"> {{ store.modalDelete.text }} </span> ? write <span class="text-red-500 font-semibold ">delete</span></span>

            </div>


            <div class="flex w-full gap-x-2 justify-between ">
                <input v-model="keyword" @input="deleteData" type="text"
                    class="py-2 px-3 block border w-full  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="delete" :disabled="pending">

            </div>
        </Dialog>

    </div>

    <Toast />
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { store } from "@/store/main";

let pending = ref(false)
const props = defineProps(['isOpen'])
const keyword = ref('')
const toast = useToast();

const deleteData = () => {

    console.log(keyword);
    if (keyword.value === 'delete') {
        switch (store.modalDelete.type) {
            case 'Document':
                pending.value = true


                setTimeout(() => {
                    console.log('item delete');

                    /// request

                    toast.add({ severity: 'success', summary: 'Success', detail: 'Document successfully delete', life: 3000 });
                    store.modal.delete = false
                    keyword.value = ''
                    pending.value = false
                }, 2000);
                break;
            case 'User':
                pending.value = true


                setTimeout(() => {
                    console.log('item delete');

                    /// request

                    toast.add({ severity: 'success', summary: 'Success', detail: 'User successfully delete', life: 3000 });
                    store.modal.delete = false
                    keyword.value = ''
                    pending.value = false
                }, 2000);
                break;
            default:
                console.log('No action define');
                break;
        }

    }
}

const visible = ref(true);


</script>
