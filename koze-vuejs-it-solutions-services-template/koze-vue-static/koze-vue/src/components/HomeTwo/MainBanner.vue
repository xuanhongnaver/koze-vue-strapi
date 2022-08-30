<template>
    <div class="main-hero-area">
        <div class="hero-slides">
            <carousel
                :autoplay="5000"
                :wrap-around="true"
            >
                <Slide v-for="slide in carouselItems" :key="slide.id">
                    <div :class="slide.class">
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
                heading: 'We Are Digital Agency & Tech Solution',
                description: 'We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
                btnLink: '/contact',
                btnText: 'Get Started',
                class: 'main-hero-item',
            },
            {
                id: 1,
                subtitle: 'WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY',
                heading: 'Excellent IT Services For Your Success',
                description: 'We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
                btnLink: '/contact',
                btnText: 'Get Started',
                class: 'main-hero-item item-bg-2',
            },
            {
                id: 1,
                subtitle: 'WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY',
                heading: 'Get The Best IT Solution From Us',
                description: 'We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.',
                btnLink: '/contact',
                btnText: 'Get Started',
                class: 'main-hero-item item-bg-3',
            },
        ],
    }),
})
</script>