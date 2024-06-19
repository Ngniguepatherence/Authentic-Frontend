<template>
  <!-- ========== HEADER ========== -->
  <header
    class="sticky mt-4 top-4 mb-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full"
  >
    <nav
      class="relative max-w-[80rem] w-full text-neutral-900 rounded-[28px] py-3 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <nuxt-link
          to="/"
          class="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          aria-label="Preline"
        >
          <img src="/logo-light.png" class="w-[90%]" alt srcset />
        </nuxt-link>
        <!-- End Logo -->

        <div class="md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-neutral-900 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse"
            aria-controls="navbar-collapse"
            aria-label="Toggle navigation"
          >
            <svg
              class="hs-collapse-open:hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block hidden flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Collapse -->
      <div
        id="navbar-collapse"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7"
        >
          <nuxt-link
            class="text-sm font-semibold hover:border-b-2 border-b-2 border-white mt-1 hover:border-blue-700 text-blue-700 md:py-4 focus:outline-none focus:text-blue-700"
            to="/"
            aria-current="page"
          >Home</nuxt-link>
          <nuxt-link
            class="text-sm text-neutral-900 hover:text-blue-700 border-b-2 border-white mt-1 hover:border-blue-700 md:py-4 focus:outline-none focus:text-blue-700"
            href="#"
          >Contact</nuxt-link>
          
          <nuxt-link to="#app"
            class="text-sm text-neutral-900 hover:text-blue-700 border-b-2 border-white mt-1 hover:border-blue-700 md:py-4 focus:outline-none focus:text-blue-700"
            
          >Approach</nuxt-link>

          <div
            class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:py-4"
          >
          
            <button
              type="button"
              class="flex items-center w-full text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 focus:outline-none focus:text-blue-700"
            >
              About
              <svg
                class="flex-shrink-0 ms-1 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg p-2 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5"
            >
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                href="#"
              >About</a>
              <div
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] relative"
              >
                <button
                  type="button"
                  class="w-full flex justify-between items-center py-2 px-3 text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                >
                  Sub Menu
                  <svg
                    class="sm:-rotate-90 flex-shrink-0 ms-2 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-neutral-800 md:shadow-md rounded-lg p-2 before:absolute before:-end-5 before:top-0 before:h-full before:w-5 !mx-[10px] top-0 end-full"
                >
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                    href="#"
                  >About</a>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                    href="#"
                  >Downloads</a>
                  <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                    href="#"
                  >Team Account</a>
                </div>
              </div>

              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                href="#"
              >Downloads</a>
              <a
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-neutral-900 border-b-2 border-white mt-1 hover:border-blue-700 hover:text-blue-700 font-medium focus:outline-none focus:text-blue-700"
                href="#"
              >Team Account</a>
            </div>
          </div>

          <div> 
         
            <nuxt-link to="/login"
              class="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-700 font-medium text-sm text-neutral-100 rounded-full focus:outline-none"
              href="../templates/agency/index.html#contact"
            >Login</nuxt-link>
          </div>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- Hero -->
  <div class="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Grid -->
    <div class="grid md:grid-cols-2 mt-2 md:mt-0 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <div>
        <h1
          class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-gray"
        >
        fight against misinformation with
          <span class="text-blue-600">Authentic</span>
        </h1>
        <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">
          A framework for generating, signing and verifying digital
          documents, designed for any kind of office and entrepreneur.
        </p>

        <!-- Buttons -->
        <div class="mt-7 grid gap-3 w-full sm:inline-flex">
          <NuxtLink
            to="/verify"
            class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Get started
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NuxtLink>
          <nuxtlink
            class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            to='/'
          >Contact developers team</nuxtlink>
        </div>
        <!-- End Buttons -->

        <!-- Review -->
        <div class="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
          <!-- Review -->
          <div class="py-5">
            <div class="flex space-x-1">
              <svg
                class="size-4 text-gray-800 dark:text-neutral-200"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                class="size-4 text-gray-800 dark:text-neutral-200"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                class="size-4 text-gray-800 dark:text-neutral-200"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                class="size-4 text-gray-800 dark:text-neutral-200"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                class="size-4 text-gray-800 dark:text-neutral-200"
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p class="mt-3 text-sm text-gray-800 dark:text-neutral-200">
              <span class="font-bold">4.6</span> /5 - from 12k reviews
            </p>

            <div class="mt-5">
              <!-- Star -->
              <svg
                class="h-auto w-16 text-gray-800 dark:text-white"
                width="80"
                height="27"
                viewBox="0 0 80 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z"
                  fill="currentColor"
                />
                <path
                  d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z"
                  fill="currentColor"
                />
                <path
                  d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z"
                  fill="currentColor"
                />
                <path
                  d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z"
                  fill="currentColor"
                />
                <path
                  d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z"
                  fill="currentColor"
                />
                <path d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z" fill="currentColor" />
              </svg>
              <!-- End Star -->
            </div>
          </div>
          <!-- End Review -->

         
        </div>
        <!-- End Review -->
      </div>
      <!-- End Col -->

      <div class="relative bounceInRight2 ms-4">
        <img class="w-full rounded-md" src="/t4.png" alt="Image Description" />
        <div
          class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"
        ></div>

        <!-- SVG-->
        <div class="absolute bottom-0 start-0">
          <svg
            class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
            width="630"
            height="451"
            viewBox="0 0 630 451"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="531" y="352" width="99" height="99" fill="currentColor" />
            <rect x="140" y="352" width="106" height="99" fill="currentColor" />
            <rect x="482" y="402" width="64" height="49" fill="currentColor" />
            <rect x="433" y="402" width="63" height="49" fill="currentColor" />
            <rect x="384" y="352" width="49" height="50" fill="currentColor" />
            <rect x="531" y="328" width="50" height="50" fill="currentColor" />
            <rect x="99" y="303" width="49" height="58" fill="currentColor" />
            <rect x="99" y="352" width="49" height="50" fill="currentColor" />
            <rect x="99" y="392" width="49" height="59" fill="currentColor" />
            <rect x="44" y="402" width="66" height="49" fill="currentColor" />
            <rect x="234" y="402" width="62" height="49" fill="currentColor" />
            <rect x="334" y="303" width="50" height="49" fill="currentColor" />
            <rect x="581" width="49" height="49" fill="currentColor" />
            <rect x="581" width="49" height="64" fill="currentColor" />
            <rect x="482" y="123" width="49" height="49" fill="currentColor" />
            <rect x="507" y="124" width="49" height="24" fill="currentColor" />
            <rect x="531" y="49" width="99" height="99" fill="currentColor" />
          </svg>
        </div>
        <!-- End SVG-->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Hero -->

  <div class="relative mb-4 overflow-hidden pt-4 mt-10 0">
    <svg
      class="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
      width="2745"
      height="488"
      viewBox="0 0 2745 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487"
        class="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009"
        class="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018"
        class="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027"
        class="stroke-neutral-700/50"
        stroke="currentColor"
      />
      <path
        d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036"
        class="stroke-neutral-700/50"
        stroke="currentColor"
      />
    </svg>

    <div class="relative md:mb-0 mb-10 animatable fadeInDown z-10">
      <div class="max-w-5xl px-4 xl:px-0 mx-auto">
        <div class="mb-4">
          <h2
            class="text-neutral-600 font-semibold"
          >Trusted by Open Source, Enterprises, and Universities</h2>
        </div>

        <div class="flex justify-between gap-6">
          <img src="/uniba.jpeg" class="md:w-[100px] w-[80px] rounded-full" alt srcset />

          <img src="/endgame3.png" class="md:w-[100px] w-[70px] rounded-full" alt srcset />

          <img src="/westtech.jpeg" class="md:w-[100px] w-[80px] rounded-full" alt srcset />

          <svg
            class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 127 33"
          >
            <path
              d="M9.3 16.5C9.3 9 14.3 2.7 21.2.7a16.5 16.5 0 1 0 0 31.6c-6.9-2-11.9-8.3-11.9-15.8Z"
              fill="currentColor"
            />
            <path
              d="M21.7 10c4 0 7.4 2.8 8.5 6.4a8.9 8.9 0 1 0-17 0c1-3.6 4.4-6.3 8.5-6.3Z"
              fill="currentColor"
            />
            <path
              d="M24.8 19.4c0 3-2 5.5-4.8 6.3A6.6 6.6 0 1 0 20 13c2.8.8 4.8 3.4 4.8 6.4Z"
              fill="currentColor"
            />
            <path
              d="M39.6 13.5A4.4 4.4 0 0 1 44 9.1h1.3v2.7l-1 .2-1 .6-.2.4-.1.5h2.3v3H43v9.2h-3.4v-9.3h-1.3v-2.9h1.3ZM55.7 13.5h3.4v6.1a6.9 6.9 0 0 1-1.7 4.6 6 6 0 0 1-4.5 1.8c-1 0-1.8-.1-2.5-.5a6 6 0 0 1-3.2-3.4c-.3-.8-.4-1.6-.4-2.5v-6H50v6c0 .5 0 1 .2 1.3l.5 1c.2.4.5.6.9.8.3.2.8.3 1.2.3a2.6 2.6 0 0 0 2.1-1c.3-.3.4-.7.5-1l.2-1.4v-6ZM61.2 25.7V9.5h3.4v16.2h-3.4ZM66.9 25.7V9.5h3.3v16.2H67ZM78.5 21.2l3.3-7.7h3.7l-5.7 12.2h-2.7l-5.6-12.2H75l3.4 7.7ZM87 13.5h3.3v12.2H87V13.5Zm1.6-5 .8.1.6.4.4.7.2.7a1.9 1.9 0 0 1-.6 1.4l-.6.4a2 2 0 0 1-.8.1c-.5 0-1-.2-1.3-.5a2 2 0 0 1-.4-2.1c0-.3.2-.5.4-.7l.6-.4.7-.1ZM98.8 13.2a6.7 6.7 0 0 1 4.8 1.9 6.3 6.3 0 0 1 1.9 5.7h-9.8a3.3 3.3 0 0 0 3.2 2.2c.5 0 1-.1 1.4-.4.5-.2.9-.5 1.2-1h3.7c-.2.7-.5 1.3-1 1.8a6.1 6.1 0 0 1-3.3 2.3 7 7 0 0 1-6.9-1.6 6.1 6.1 0 0 1-2-4.5 6.1 6.1 0 0 1 2-4.5c.7-.6 1.4-1 2.2-1.4.8-.3 1.7-.5 2.6-.5Zm3.2 5.2c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.3-.7-2-.7s-1.4.3-2 .7c-.5.4-.9.9-1.1 1.5h6.3ZM123 13.5h3.6l-5 12.2H119l-2.5-6.5-2.5 6.5h-2.7l-5-12.2h3.6l2.7 7 2.8-7h2.2l2.8 7 2.7-7Z"
              fill="currentColor"
            />
          </svg>

          <svg
            class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 88 22"
            xml:space="preserve"
            enable-background="new 0 0 88 22"
          >
            <path
              d="M36.3 14.6a7.3 7.3 0 0 1-5.6 2.8c-3.8 0-6.8-2.7-6.8-6.2a6 6 0 0 1 2-4.5A6 6 0 0 1 30.5 5c2.2 0 4.3 1 5.6 2.8l-2.5 1.8a3.7 3.7 0 0 0-3.1-1.8 3.5 3.5 0 0 0-3.5 3.5c.1 2 1.7 3.5 3.6 3.5 1.3 0 2.5-.6 3.2-1.7l2.5 1.5z"
              fill="currentColor"
            />
            <path d="M37.7 0H40.8V17.1H37.7z" fill="currentColor" />
            <path
              d="M49.1 14.7c2 0 3.7-1.6 3.8-3.6-.1-2-1.8-3.6-3.8-3.6s-3.7 1.6-3.8 3.6c.1 2 1.7 3.6 3.8 3.6m0-9.8c1.7-.1 3.4.5 4.7 1.7 1.3 1.2 2 2.8 2.1 4.5a6.4 6.4 0 0 1-2.1 4.5 6.4 6.4 0 0 1-4.7 1.7c-3.8 0-6.8-2.7-6.8-6.2s3-6.2 6.8-6.2"
              fill="currentColor"
            />
            <path d="M55.3 5.1 59 5.1 62 11.5 65.2 5.1 68.6 5.1 62 17.8z" fill="currentColor" />
            <path
              d="M77.5 9.4a3 3 0 0 0-2.9-1.9c-1.3 0-2.5.7-3.1 1.9h6zm2 6.3a7 7 0 0 1-4.6 1.6c-3.8 0-6.8-2.7-6.8-6.2 0-1.7.7-3.3 1.9-4.5a6 6 0 0 1 4.6-1.7c1.7-.1 3.3.6 4.5 1.8s1.8 2.8 1.7 4.5v.8h-9.6a3.9 3.9 0 0 0 6.5 1.5l1.8 2.2zm2.8-5.3c0-2.9 2.2-5.2 5.7-5.2V8c-.7 0-1.5.3-2 .8s-.7 1.3-.6 2v6.3h-3.1v-6.7z"
              fill="currentColor"
            />
            <path
              d="M9.7 5.6a5 5 0 0 0-8.3-3.5C0 3.5-.4 5.6.3 7.4s2.5 3 4.5 3h4.9V5.6zm1.4 0a5 5 0 0 1 8.3-3.5c1.4 1.4 1.8 3.5 1.1 5.3s-2.5 3-4.5 3h-4.9V5.6zm0 11a5 5 0 0 0 8.3 3.5c1.4-1.4 1.8-3.5 1.1-5.3s-2.5-3-4.5-3h-4.9v4.8zm-6.3 3.5c1.9 0 3.5-1.5 3.5-3.5v-3.5H4.8c-1.9 0-3.5 1.5-3.5 3.5s1.6 3.5 3.5 3.5zm4.9-3.5a5 5 0 0 1-8.3 3.5C0 18.7-.4 16.6.3 14.8s2.5-3 4.5-3h4.9v4.8z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-screen -mt-4 h-[350px] md:block hidden bg-no-repeat"
    style="background-image: url('/wave.svg');background-position: 0 0;"
  ></div>

  <div class="w-full h-full mb-4 md:-mt-24 mt-2 bg-no-repeat bg-gray-200">
    <!-- Approach -->
    <div class="max-w-[80rem] px-2 xl:px-0 py-10 lg:pt-20 mt-4 lg:pb-20 mx-auto">
      <!-- Title -->
      <div class="max-w-3xl mb-10 lg:mb-14">
        <h2 id="app"
          class="text-neutral-900 font-semibold text-2xl md:text-6xl md:leading-tight"
        >How it works?</h2>
        <p class="mt-1 text-neutral-800">
          By leverating cryptographic techniques and QRcodes, the system aims to
          prevent document forgery, ensuring tracebility and endhancing the trustworthiness
          of official communications.
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
        <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
          <div class="p-4 bg-gray-50 md:scale-125 scale-105 rounded-lg">
            <img
              src="/public/dg-explanation2.png"
              class="animatable h-[400px] bounceInLeft p-2 rounded-xl"
              alt
              srcset
            />
          </div>
        </div>
        <!-- End Col -->

        <!-- Timeline -->
        <div>
          <!-- Heading -->
          <div class="mb-4">
            <h3 class="text-blue-600 text-xs font-medium uppercase">Steps</h3>
          </div>
          <!-- End Heading -->

          <!-- Item -->
          <div class="flex md:ml-1 ml-0 gap-x-5 ms-1">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800"
            >
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full"
                >1</span>
              </div>
            </div>
            <!-- End Icon -->

            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm lg:text-base text-neutral-800">
                <span class="text-neutral-900">Generating Key:</span>
                Use a secure algorithm to generate an ECC key pair such, that the private key remains confidential and the public key is shared appropriately
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800"
            >
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full"
                >2</span>
              </div>
            </div>
            <!-- End Icon -->

            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm lg:text-base text-neutral-800">
                <span class="text-neutral-800">Signing The Document:</span>
                Compute the cryptographic hash of the document, then sign the hash with the owner's private key to produce a digital signature
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800"
            >
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full"
                >3</span>
              </div>
            </div>
            <!-- End Icon -->

            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm md:text-base text-neutral-800">
                <span class="text-neutral-800">Creating QR Code:</span>
                Encode the document's hash, digital signature and public key referenced into a QR Code and attaching it to the document
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->

          <!-- Item -->
          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800"
            >
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full"
                >4</span>
              </div>
            </div>
            <!-- End Icon -->

            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm md:text-base text-neutral-800">
                <span class="text-neutral-800">Storing Keys Securely:</span>
                Implement secure storage solutions for private keys, such as hardware security modules or encrypted databases
              </p>
            </div>
            <!-- End Right Content -->
          </div>
          <!-- End Item -->

          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800"
            >
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full"
                >5</span>
              </div>
            </div>
            <!-- End Icon -->

            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm md:text-base text-neutral-800">
                <span class="text-neutral-800">Recording on Blockchain:</span>
                Record the digital signature and document hash on a blockchain to ensure immutability. this is for an additional layer of security
              </p>
            </div>
            <!-- End Right Content -->
          </div>

          <div class="flex gap-x-5 ms-1">
            <!-- Icon -->
            <div
              class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800"
            >
              <div class="relative z-10 size-8 flex justify-center items-center">
                <span
                  class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full"
                >6</span>
              </div>
            </div>
            <!-- End Icon -->

            <!-- Right Content -->
            <div class="grow pt-0.5 pb-8 sm:pb-12">
              <p class="text-sm md:text-base text-neutral-800">
                <span class="text-neutral-800">Verifying the Document:</span>
                Scan the QR code to retrieve the document hash, digital signature, and public key reference. The public key is used to verify the digital signature. Recompute the document hash and compare it with the hash obtained from the
                QR code to ensure document integrity
              </p>
            </div>
            <!-- End Right Content -->
          </div>

          <a
            class="group inline-flex items-center gap-x-2 py-2 px-3 font-medium text-sm bg-gradient-to-tl from-red-600 to-blue-700 hover:from-red-600 hover:to-blue-900 border border-transparent text-white rounded-full focus:outline-none"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-youtube"
            >
              <path
                d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
              />
              <path d="m10 15 5-3-5-3z" />
            </svg>
            Watch video
          </a>
        </div>
        <!-- End Timeline -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Approach -->

  <div
    class="flex md:flex-row-reverse flex-col-reverse px-16 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
  >
    <div class="lg:w-[25%] w-full">
      <img src="/t3.jpg" class="h-fit rounded-md" alt srcset />
    </div>

    <div class="lg:w-[75%] w-full">
      <!-- Icon Blocks -->
      <div class="max-w-[80rem] w-full px-0 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="10" height="14" x="3" y="8" rx="2" />
                <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                <path d="M8 18h.01" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
              <p
                class="mt-1 text-gray-600 dark:text-neutral-400"
              >Responsive, and mobile-first project on the web</p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide text-blue-600 lucide-shield-check"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Secure</h3>
              <p
                class="mt-1 text-gray-600 dark:text-neutral-400"
              >Components are easily customized and extendable</p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide text-blue-600 lucide-ticket-check"
              >
                <path
                  d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Trust</h3>
              <p
                class="mt-1 text-gray-600 dark:text-neutral-400"
              >Every component and plugin is well documented</p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div>
            <div
              class="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-neutral-900"
            >
              <svg
                class="flex-shrink-0 size-6 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
              <p
                class="mt-1 text-gray-600 dark:text-neutral-400"
              >Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <!-- End Icon Block -->
        </div>
      </div>
      <!-- End Icon Blocks -->

      <!-- hero start ------------>
    </div>
  </div>

  <!--hero end-->

  <div
    class="overflow-hidden md:px-24 bak mt-10 mb-2 p-2 rounded-tr-[90px] bg-gray-100 dark:bg-neutral-950"
  >
    <div class="relative max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <div class="max-w-2xl w-3/4 lg:w-1/2 mb-2 sm:mb-10 md:mb-16">
        <h2
          class="text-2xl sm:text-3xl lg:text-4xl text-neutral-800 pl-6 font-semibold"
        >Loved by cameroonian</h2>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 md:-mt-6 lg:grid-cols-3 gap-6">
        <!-- Card -->
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
            <div class="flex-auto p-4 md:p-6">
              <p
                class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200"
              >" With Authentic, we are able to digitally sign our documents making it very dificult for any one to forge the document hence increasing trust amongst authorities and subordinates."</p>
            </div>

            <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div>

                <div class="grow ms-3">
                  <p
                    class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200"
                  >Josh Tyson</p>
                  <p
                    class="text-xs text-gray-500 dark:text-neutral-400"
                  >University head of department | Satisfied Costomer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
            <div class="flex-auto p-4 md:p-6">
              <p
                class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200"
              >" Authentic provides a user friendly plateform making it very easy to understand and easy to use by everyone."</p>
            </div>

            <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div>

                <div class="grow ms-3">
                  <p
                    class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200"
                  >Luisa</p>
                  <p
                    class="text-xs text-gray-500 dark:text-neutral-400"
                  >Senior Director of Operations | Satisfied costumer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
            <div class="flex-auto p-4 md:p-6">
              <p
                class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200"
              >"In a world where document forgery has become a habit, Authentic comes at a right time with a trusted means to ensure a very secure way to authenticate documents while ensuring the integrety of the document. This is a good solution and recommend others to use this plateform."</p>
            </div>

            <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                    src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                    alt="Image Description"
                  />
                </div>

                <div class="grow ms-3">
                  <p
                    class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200"
                  >Pr Fouatsa Emmanuel</p>
                  <p
                    class="text-xs text-gray-500 dark:text-neutral-400"
                  >Product Manager | Cybersecurity expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Grid -->

      <!-- Grid -->

      <!-- End Grid -->
    </div>
  </div>
  <!-- End Testimonials -->

  <my-footer />
</template>


<script setup>


onMounted(() => {

  const doAnimations = () => {
    const offset = window.scrollY + window.innerHeight;
    const animatables = document.querySelectorAll('.animatable');

    if (!animatables.length) {
      window.removeEventListener('scroll', doAnimations);
      return;
    }

    animatables.forEach((animatable) => {
      if (animatable.getBoundingClientRect().top + animatable.offsetHeight - 50 < offset) {
        animatable.classList.remove('animatable');
        animatable.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', doAnimations);
  doAnimations(); // Trigger initial animation check

})
</script>

<style scoped>
.bounceInRight2 {
  animation: bounceInRightDirect 4s ease-out 0.3s 1 forwards;
}

@keyframes bounceInRightDirect {
  0% {
    opacity: 0;
    -webkit-transform: translateX(2000px);
  }

  60% {
    -webkit-transform: translateX(-20px);
  }

  80% {
    -webkit-transform: translateX(5px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}

.bak {
  background: rgb(235, 235, 235);
  background: linear-gradient(
    129deg,
    rgba(235, 235, 235, 1) 86%,
    rgba(37, 99, 235, 1) 94%,
    rgba(5, 240, 38, 0.9009803750601804) 97%
  );
}
</style>