<template>
    <div 
        class="row justify-content-center"
        v-if="services !== null"
    >
        <div 
            class="col-lg-3 col-md-6"
            v-for="service in services.slice(0, 4)" 
            :key="service.id"
        >
            <div class="services-item">
                <div class="services-image">
                    <router-link :to="'/services-details/' + service.attributes.slug">
                        <img :src="service.attributes.image.data.attributes.url" alt="image">
                    </router-link>
                </div>
                <div class="services-content">
                    <h3>
                        <router-link :to="'/services-details/' + service.attributes.slug">
                            {{service.attributes.title}}
                        </router-link>
                    </h3>
                    <p>{{service.attributes.desc}}</p>
                    <router-link :to="'/services-details/' + service.attributes.slug" class="services-btn">
                        {{service.attributes.btnText}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ServicesItem',
    data (){
        return {
            services: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/servicesdetails?populate=*',)
        this.services = response.data.data
    },
}
</script>