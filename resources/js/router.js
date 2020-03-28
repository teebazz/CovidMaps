import VueRouter from 'vue-router';
// Vue.component('botman-tinker', TinkerComponent);

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('./components/ExampleComponent.vue'),
        
      },
    ]
});
export default router;
