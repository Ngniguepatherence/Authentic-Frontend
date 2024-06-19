<template>

    <!-- Sidebar Toggle -->
    <div
        class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
        <div class="flex flex-row-reverse justify-between items-center py-4">
            <div class="flex -bg-red-400 justify-end ">
                <div class="ml-6 self-center ">
                    <label for="icon" class="sr-only">Search</label>
                    <div class="relative lg:hidden block min-w-32 w-[80%] md:min-w-64">
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg class="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                        </div>
                        <input type="text" id="icon" name="icon"
                            class="py-2 border  px-4 ps-11 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Search">
                    </div>
                </div>
                <!-- Navigation Toggle -->
                <div class="flex items-center w-fit">
                    <button type="button" class="text-gray-500 hover:text-gray-600"
                        data-hs-overlay="#application-sidebar-brand" aria-controls="application-sidebar-brand"
                        aria-label="Toggle navigation">
                        <span class="sr-only">Toggle Navigation</span>
                        <svg class="size-6 w-[60px]" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
                <!-- End Navigation Toggle -->
            </div>


            <!-- Breadcrumb -->
            <ol class="ms-3 flex items-center whitespace-nowrap">
                <li class="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                    <svg class="flex-shrink-0 text-blue-600 me-3 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <path
                            d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3">
                        </path>
                    </svg>

                </li>
                <li class="text-sm font-semibold text-blue-600 -text-gray-800 truncate dark:text-neutral-400"
                    aria-current="page">
                    {{ fupper(getBreadcrumb(store.active)) }}

                </li>
                <svg class="flex-shrink-0 text-blue-600 mt-1 mx-3 overflow-visible size-2.5 -text-gray-400 dark:text-neutral-600"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </ol>
            <!-- End Breadcrumb -->
        </div>
    </div>
    <!-- End Sidebar Toggle -->


    <div id="application-sidebar-brand" :class="{'px-6':pending}"
        class="hs-overlay [--auto-close:lg]  hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-blue-700 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

        <div class="px-6">
            <NuxtLink to="/">
                <img src="/logo-dark.png" alt="" srcset="">
            </NuxtLink>
        </div>

        <nav v-if="!pending" class="hs-accordion-group px-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open>
            <ul class="space-y-1.5">
                <li>
                    <NuxtLink @click="setActive('/admin/dashboard')" to="/admin/dashboard"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/dashboard' }"
                        class="flex text-sm items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        href="#">
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Dashboard
                    </NuxtLink>
                </li>

                <li v-if="user.type === 'institution'" class="hs-accordion" id="users-accordion">
                    <NuxtLink @click="setActive('/admin/users')" to="/admin/users"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/users' }"
                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600">
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Users

                        <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>


                    </NuxtLink>


                </li>



                <li v-if="user.type != 'institution'" class="hs-accordion" id="account-accordion">
                    <NuxtLink @click="setActive('/admin/account')" to="/admin/account"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/account' }"
                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600">
                        <svg class="flex-shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="18" cy="15" r="3" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                            <path d="m21.7 16.4-.9-.3" />
                            <path d="m15.2 13.9-.9-.3" />
                            <path d="m16.6 18.7.3-.9" />
                            <path d="m19.1 12.2.3-.9" />
                            <path d="m19.6 18.7-.4-1" />
                            <path d="m16.8 12.3-.4-1" />
                            <path d="m14.3 16.6 1-.4" />
                            <path d="m20.7 13.8 1-.4" />
                        </svg>
                        Account

                        <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>

                    </NuxtLink>


                </li>


                <li v-else class="hs-accordion" id="account-accordion">
                    <NuxtLink @click="setActive('/admin/settings')" to="/admin/settings"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/settings' }"
                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-settings">
                            <path
                                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>

                        Settings

                        <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>

                    </NuxtLink>


                </li>

                <li v-if="user.type === 'institution'" class="hs-accordion" id="users-accordion">
                    <NuxtLink @click="setActive('/admin/editor')" to="/admin/editor"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/editor' }"
                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide size-4 lucide-notepad-text">
                            <path d="M8 2v4" />
                            <path d="M12 2v4" />
                            <path d="M16 2v4" />
                            <rect width="16" height="18" x="4" y="4" rx="2" />
                            <path d="M8 10h6" />
                            <path d="M8 14h8" />
                            <path d="M8 18h5" />
                        </svg>
                        Text editor

                        <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>


                    </NuxtLink>


                </li>

                <li v-if="user.type === 'admin'" class="hs-accordion" id="account-accordion">
                    <NuxtLink @click="setActive('/admin/institutions')" to="/admin/institutions"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/institutions' }"
                        class="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide size-4 lucide-building-2">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                            <path d="M10 6h4" />
                            <path d="M10 10h4" />
                            <path d="M10 14h4" />
                            <path d="M10 18h4" />
                        </svg>
                        Institutions

                        <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>

                    </NuxtLink>


                </li>


                <li class="hs-accordion" id="account-accordion">
                    <NuxtLink @click="setActive('/admin/documents')" to="/admin/documents"
                        :class="{ 'bg-blue-600 text-sm font-semibold': store.active === '/admin/documents' }"
                        class="hs-accordion-toggle w-full text-start flex items-center  gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide size-4 lucide-file-check">
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="m9 15 2 2 4-4" />
                        </svg>

                        Documents
                        <svg class="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m18 15-6-6-6 6" />
                        </svg>

                    </NuxtLink>


                </li>



                <li><button @click="logout"
                        class="w-full flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm text-white hover:text-white rounded-lg hover:bg-blue-600-300"
                        href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide size-4 lucide-log-out">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" x2="9" y1="12" y2="12" />
                        </svg>
                        Logout
                    </button></li>
            </ul>
        </nav>

        <nav v-else lass="hs-accordion-group px-6 pt-4 mt-6 w-full flex flex-col flex-wrap" >
            <ul class="space-y-1.5 mt-4">
                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>
                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>
                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-3 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>
                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] duration-500 rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] rounded duration-500 bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>
                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] duration-300 rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] duration-300 rounded bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>

                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] duration-200 rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] duration-200 rounded bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>

                <li>
                    <p
                        :class="{ 'bg-blue-600 text-sm font-semibold': true}"
                        class="flex animate-pulse items-center gap-x-3 py-2 px-2.5  hover:text-white hover:bg-transparent text-white rounded-lg"
                        >
                        <span class="w-[18px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        <span class="w-[130px] h-[15px] rounded bg-blue-500 animate-pulse " ></span>
                        
                    </p>
                </li>
            </ul>
        </nav>
    </div>
    <!-- End Sidebar -->
    <!-- Sidebar -->

</template>


<script setup>


import { store, fupper, getBreadcrumb } from "@/store/main";

const user = ref({
  value: {
    name: '',
    headerName:''
  },
  type: ''

})
const pending = ref(true)
const setActive = (e) => {
    store.active = e
}

onMounted(() => {
    setActive('/admin/dashboard');
    const _token = useCookie('_token')
    user.value = _token.value.user
    const route = useRoute()
   // console.log();
    setActive(route.fullPath)
    pending.value = false
    
})

const logout = () => {
    //  api call

    const _token = useCookie('_token')
    _token.value = null
    navigateTo('/login')
}

</script>