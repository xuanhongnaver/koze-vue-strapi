<template>
    <div class="main-slides-area">
        <div class="home-slides">
            <carousel
            >
                <Slide v-for="slide in carouselItems" :key="slide.id">
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
                                        <img src="../../assets/images/home-slides/slides-1.png" alt="image">
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
        carouselItems: [
            {
                id: 1,
                subtitle: 'WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY',
                heading: 'We Make The Best IT Solutions',
                description: 'We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
                image: require('../../assets/images/home-slides/slides-1.png'),
                btnLink: '/contact',
                btnText: 'Get Started'
            },
            {
                id: 1,
                subtitle: 'WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY',
                heading: 'Best IT Services For Your Business',
                description: 'We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
                image: require('../../assets/images/home-slides/slides-2.png'),
                btnLink: '/contact',
                btnText: 'Get Started'
            },
        ],
    }),
})
</script>