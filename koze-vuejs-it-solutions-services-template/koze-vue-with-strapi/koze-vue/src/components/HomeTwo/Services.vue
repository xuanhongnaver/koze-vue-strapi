<template>
    <div class="services-area bg-with-14042C-color ptb-100">
        <div 
            class="container"
            v-if="services !== null"
        >
            <div class="section-title">
                <span>{{services.subtitle}}</span>
                <h2>{{services.title}}</h2>
                <p>{{services.desc}}</p>
            </div>

            <ServicesItem />

            <div class="services-all-btn">
                <router-link :to="services.btnLink" class="default-btn">
                    {{services.btnText}}
                </router-link>
            </div>
        </div>

        <div class="services-shape-1">
            <img src="../../assets/images/services/services-shape-1.png" alt="image">
        </div>
        <div class="services-shape-2">
            <img src="../../assets/images/services/services-shape-2.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ServicesItem from './ServicesItem'

export default {
    name: 'Services',
    components: {
        ServicesItem
    },
    data (){
        return {
            services: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/serviceshomeone?populate=servicesSlides.image')
        const { data: {attributes} } = response.data
        this.services = attributes
    },
}
</script>