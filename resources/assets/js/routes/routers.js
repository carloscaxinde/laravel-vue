import Vue from 'Vue'
import VueRouter from 'vue-router'

import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'

Vue.use(VueRouter)

const routes = [
    {
        path: '/categories',
        component: CategoriesComponent,
        name: 'categories'
    }
]

const router = [
    routes
]

export default router