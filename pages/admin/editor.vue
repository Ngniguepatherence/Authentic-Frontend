<template>


    <!-- ========== MAIN CONTENT ========== -->

    <!-- Content -->
    <div class="w-full min-h-screen h-full p-4 lg:ps-64">
        <div class="sm:px-8 px-0    space-y-4 sm:space-y-6">
            <!-- your content goes here ... -->

            <my-breadcrumb-lg />

            <div class="w-full text-gray-700 px-6 h-full">
                <h2 class="text-neutral-900">New document</h2>

               <section class="flex flex-wrap gap-x-8">
                <div class="">
                    <div class="mt-4">

                        <div class="shadow cursor-pointer hover:shadow-md hover:sc border w-[170px] h-[200px]">
                            <p class=""></p>
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>Empty file</p>
                    </div>
                </div>

                <div class="">
                    <div class="mt-4">

                        <div class="shadow cursor-pointer hover:shadow-lg brightness-105  border w-[170px] h-[200px]">
                            <img src="/templates/fecafoot2.png" alt="" srcset="">
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>FECAFOOT</p>
                    </div>
                </div>

                <div class="">
                    <div class="mt-4">

                        <div class="shadow cursor-pointer hover:shadow-md hover:sc border w-[170px] h-[200px]">
                            <img src="/templates/minisep.png" alt="" srcset="">
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>MINSEP</p>
                    </div>
                </div>

                

                <div class="">
                    <div class="mt-4">

                        <div class="shadow cursor-pointer hover:shadow-md hover:sc border w-[170px] h-[200px]">
                            <img src="/templates/camerco.jpeg" class=" h-[190px] w-full " alt="" srcset="">
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>CAMAIR-CO</p>
                    </div>
                </div>

               

                <div class="">
                    <div class="mt-4  ">

                        <div class="shadow cursor-pointer hover:shadow-md hover:sc bg-gray-50 animate-pulse flex justify-center items-center border w-[170px] h-[200px]">
                            <div class="flex justify-center items-center gap-x-1">
                                <p class="text-sm " >More</p>
                               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </div>
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>UNIBA</p>
                    </div>
                </div>
               </section>

            </div>

            <div class="w-full text-gray-700 px-6 h-full">
                <h2 class="text-neutral-900">Save</h2>

               <section class="flex flex-wrap gap-x-8">
               
                <div class="">
                    <div class="mt-4">

                        <div class=" cursor-pointer brightness-105   w-[170px] h-[150px]">
                            <img src="/pdf.png" class=" hover:shadow-lg  w-[135px] h-[150px]" alt="" srcset="">
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>Note de service</p>
                    </div>
                </div>

                <div class="">
                    <div class="mt-4">

                        <div class=" cursor-pointer brightness-105   w-[170px] h-[150px]">
                            <img src="/pdf.png" class=" hover:shadow-lg  w-[135px] h-[150px]" alt="" srcset="">
                        </div>

                    </div>

                    <div class="mt-2 text-xs">
                        <p>Note de service</p>
                    </div>
                </div>
               
               </section>

            </div>

        </div>

    </div>
    <!-- End Content -->
    <!-- ========== END MAIN CONTENT ========== -->

</template>

<script setup>

definePageMeta({
    layout: 'admin'
})


</script>