<template>

    <div class="ml-6">

        <ol class="lg:flex hidden  items-center whitespace-nowrap">
          
            <li class="inline-flex items-center">
                <p class="flex items-center text-sm text-blue-500 font-semibold hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                   >
                    <svg class="flex-shrink-0 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <path
                            d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3">
                        </path>
                    </svg>
                    {{ fupper(getBreadcrumb (store.active)) }}
                    <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </p>
            </li>
           
        </ol>
    </div>
</template>

<script setup>

import { store,getBreadcrumb,fupper  } from "@/store/main";

</script>