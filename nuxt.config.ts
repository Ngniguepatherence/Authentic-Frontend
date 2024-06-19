// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primevue/resources/themes/lara-light-green/theme.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  }, modules: [
    'nuxt-primevue',  
        
],
primevue: {
  //importPT: { from: path.resolve(__dirname, './presets/lara/') }      //import and apply preset   
},
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      backendUrl: 'http://localhost:5000'
    },
    firebaseConfig: {

      apiKey: "AIzaSyDh7H7SJ8zLtKJGSAMUZlpx26JBmKeeOH0",
    
      authDomain: "authentic-14af8.firebaseapp.com",
    
      projectId: "authentic-14af8",
    
      storageBucket: "authentic-14af8.appspot.com",
    
      messagingSenderId: "353000367108",
    
      appId: "1:353000367108:web:b225bbeccc48e65707c151",
    
      measurementId: "G-22DSM6FVMM"
    
    }
    
  },

  plugins: ["~/plugins/preline.client.ts"],
  
})
