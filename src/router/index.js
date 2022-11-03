import { createRouter, createWebHistory } from 'vue-router'
import Esports from '../components/esports.vue'
import Mangas from '../components/mangas.vue'
import Ptcg from '../components/ptcg.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Ptcg,
            name: "Ptcg",
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight"
            }
        },
        {
            path: '/mangas',
            component: Mangas,
            name: "Mangas",
            meta: {
                enterClass: "animate__animated animate__fadeInLeft",
                leaveClass: "animate__animated animate__fadeOutRight"
            }
        },
        {
            path: '/esports',
            component: Esports,
            name: "Esports",
            meta: {
                enterClass: "animate__animated animate__fadeInRight",
                leaveClass: "animate__animated animate__fadeOutLeft"
            }
        }
    ]
})

export default router