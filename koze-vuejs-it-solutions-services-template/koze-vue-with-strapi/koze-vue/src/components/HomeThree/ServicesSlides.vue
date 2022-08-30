<template>
    <div class="services-slides">
        <carousel
            :autoplay="5000"
            :wrap-around="true"
            :settings='settings' 
            :breakpoints='breakpoints'
            v-if="services !== []"
        >
            <Slide 
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
                        <router-link 
                            :to="'/services-details/' + service.attributes.slug" 
                            class="services-btn"
                        >
                            {{service.attributes.btnText}}
                        </router-link>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </carousel>
    </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'ServicesSlides',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        services: [],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/servicesdetails?populate=*')
        this.services = response.data.data
    },
})
</script>