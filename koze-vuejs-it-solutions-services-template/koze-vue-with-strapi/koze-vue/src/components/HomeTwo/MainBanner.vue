<template>
    <div class="main-hero-area">
        <div class="hero-slides">
            <carousel
                :autoplay="5000"
                :wrap-around="true"
                v-if="banner !== null"
            >
                <Slide 
                    v-for="slide in banner.heroSlides" 
                    :key="slide.id"
                >
                    <div :class="slide.className">
                        <div class="container-fluid">
                            <div class="main-hero-content">
                                <span>{{slide.subtitle}}</span>
                                <h1>{{slide.heading}}</h1>
                                <p>{{slide.desc}}</p>
                                
                                <div class="slides-btn">
                                    <router-link :to="slide.btnLink" class="default-btn">
                                        {{slide.btnText}}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <template #addons>
                    <Pagination />
                </template>
            </carousel>
        </div>

        <div class="hero-shape-1">
            <img src="../../assets/images/main-hero/slides-shape-1.png" alt="image">
        </div>
        <div class="hero-shape-2">
            <img src="../../assets/images/main-hero/slides-shape-2.png" alt="image">
        </div>
        <div class="hero-shape-3">
            <img src="../../assets/images/main-hero/slides-shape-3.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'MainBanner',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        banner: null,
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/bannerhometwo?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
})
</script>