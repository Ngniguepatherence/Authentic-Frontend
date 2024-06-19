export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === '1') {
        return abortNavigation()
    }
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
   
    const _token = useCookie('_token')


    // When accessing /posts/1, route.params.id will be 1
    if(to.fullPath.includes('admin') ){
      
        if(_token.value == null ){
            return navigateTo('/login')
        }
    }
        
   
})
