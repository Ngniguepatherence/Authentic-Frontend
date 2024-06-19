<template>
    <div>
      
    </div>
  </template>
  
  <script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import CKEditor from "@ckeditor/ckeditor5-vue";
  
  export default {
    components: {
      ckeditor: CKEditor.component
    },
    data() {
      return {
        editor: ClassicEditor,
        content: '<p>Hello from CKEditor 5 in Nuxt.js!</p>' // Initial content
      };
    },
    methods: {
      onReady(editor) {
        console.log('CKEditor5 Vue Component is ready!', editor);
      },
      onChange(data) {
        console.log('Editor content changed:', data);
        // Handle content changes here if needed (e.g., update your Nuxt.js data)
      }
    }
  };
  </script>
  