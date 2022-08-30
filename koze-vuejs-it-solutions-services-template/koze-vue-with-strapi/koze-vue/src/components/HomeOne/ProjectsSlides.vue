<template>
    <div class="projects-slides">
        <carousel
            :autoplay="5000"
            :wrap-around="true"
            :settings='settings' 
            :breakpoints='breakpoints'
        >
            <Slide 
                v-for="project in projects" 
                :key="project.id"
            >
                <div class="projects-item">
                    <div class="projects-image">
                        <router-link :to="'/projects-details/' + project.attributes.slug">
                            <img :src="project.attributes.image.data.attributes.url" alt="image">
                        </router-link>
                    </div>
                    <div class="projects-content">
                        <h3>
                            <router-link :to="'/projects-details/' + project.attributes.slug">
                                {{project.attributes.title}}
                            </router-link>
                        </h3>
                        <router-link 
                            :to="'/projects-details/' + project.attributes.slug" 
                            class="projects-btn"
                        >
                            {{project.attributes.btnText}}
                        </router-link>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </carousel>
    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'ProjectsSlides',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        projects: null,
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
                itemsToShow: 3.1,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4.1,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/projects?populate=*')
        this.projects = response.data.data
    },
})
</script>