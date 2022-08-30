<template>
    <div class="projects-area with-black-background pb-100">
        <div class="container-fluid">
            <div class="section-title">
                <span>PROJECTS</span>
                <h2>Our Latest <b>Incredible</b> Client's Projects</h2>
                <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
            </div>

            <div class="projects-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="projects-item">
                            <div class="projects-image">
                                <router-link :to="slide.btnLink">
                                    <img :src="slide.image" alt="image">
                                </router-link>
                            </div>
                            <div class="projects-content">
                                <h3>
                                    <router-link :to="slide.btnLink">{{slide.title}}</router-link>
                                </h3>
                                <router-link :to="slide.btnLink" class="projects-btn">
                                    {{slide.btnText}}
                                </router-link>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
            </div>
        </div>

        <div class="projects-bg-shape-1">
            <img src="../../assets/images/projects/projects-bg-shape.png" alt="image">
        </div>
        <div class="projects-shape-1">
            <img src="../../assets/images/projects/projects-shape-1.png" alt="image">
        </div>
        <div class="projects-shape-2">
            <img src="../../assets/images/projects/projects-shape-2.png" alt="image">
        </div>
        <div class="projects-shape-3">
            <img src="../../assets/images/projects/projects-shape-3.png" alt="image">
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Projects',
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
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/projects/projects-1.jpg'),
                title: '3D Animation',
                btnLink: '/projects-details',
                btnText: 'View More',
            },
            {
                id: 2,
                image: require('../../assets/images/projects/projects-2.jpg'),
                title: 'Online Banking Software',
                btnLink: '/projects-details',
                btnText: 'View More',
            },
            {
                id: 3,
                image: require('../../assets/images/projects/projects-3.jpg'),
                title: 'Cashier Software',
                btnLink: '/projects-details',
                btnText: 'View More',
            },
            {
                id: 4,
                image: require('../../assets/images/projects/projects-4.jpg'),
                title: 'Analytics Software',
                btnLink: '/projects-details',
                btnText: 'View More',
            },
            {
                id: 5,
                image: require('../../assets/images/projects/projects-5.jpg'),
                title: 'Messaging App',
                btnLink: '/projects-details',
                btnText: 'View More',
            },
            {
                id: 6,
                image: require('../../assets/images/projects/projects-1.jpg'),
                title: '3D Animation',
                btnLink: '/projects-details',
                btnText: 'View More',
            },
        ],
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
})
</script>