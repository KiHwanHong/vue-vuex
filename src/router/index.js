import Vue from "vue";
import Router from "vue-router";

//페이지를 등록하여 사용할 수 있습니다. by 기환.
import Layout from '@/pages/Layout.vue'

import Main from '@/views/Main.vue'
import SubMain from '@/views/SubMain.vue'

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name:"Layout",
      component: Layout,
      children: [
        {
          path: "main",
          component: Main,
        },
        {
          path: "subMain",
          component: SubMain,
        },
      ],
    },
  ],
});

export default router;