import Vue from 'vue';
import Router from 'vue-router';

/* 1. 定义路由组件 Layout */
import Layout from '@/layout/default';

Vue.use(Router);

/* 2. 定义路由 */
const routes = [
    {
        path: '/',
        redirect: 'editorModel',
        component: Layout,
        children: [
            {
                path: 'editorModel',
                component: () => import('@/views/editorModel'),
                name: 'editorModelPage',
            },
        ]
    },
];

// const createRouter = () => new Router({
//     // mode: 'history', // require service support
//     scrollBehavior: () => ({ y: 0 }),
//     routes: constantRoutes
// });
// const router = createRouter();
// export function resetRouter() {
//     const newRouter = createRouter();
//     router.matcher = newRouter.matcher; // reset router
// }

/* 3. 创建 router 实例 */
const router = new Router({
    /* 4. 传 `routes` 配置，这里是缩写，相当于 routes: routes */
    routes 
});

/* 5. 暴露出该文件 */
export default router;