<template>
    <div class="main-slides-area">
        <div class="home-slides">
            <carousel
                :autoplay="5000"
                :wrap-around="true"
                v-if="banner !== null"
            >
                <Slide 
                    v-for="slide in banner.slidesItem" 
                    :key="slide.id"
                >
                    <div class="main-slides-item">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="main-slides-content">
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

                                <div class="col-lg-5 col-md-12">
                                    <div class="main-slides-image">
                                        <img :src="slide.image.data.attributes.url" alt="image">
                                    </div>
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

        <div class="main-slides-shape-1">
            <img src="../../assets/images/home-slides/slides-shape-1.png" alt="image">
        </div>
        <div class="main-slides-shape-2">
            <img src="../../assets/images/home-slides/slides-shape-2.png" alt="image">
        </div>
        <div class="main-slides-shape-3">
            <img src="../../assets/images/home-slides/slides-shape-3.png" alt="image">
        </div>
        <div class="main-slides-shape-4">
            <img src="../../assets/images/home-slides/slides-shape-4.png" alt="image">
        </div>
        <div class="main-slides-shape-5">
            <img src="../../assets/images/home-slides/slides-shape-5.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
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
        const response = await axios.get('http://localhost:1337/api/bannerhomeone?populate=slidesItem.image')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
})
</script>