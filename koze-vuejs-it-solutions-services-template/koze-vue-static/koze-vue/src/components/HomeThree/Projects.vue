<template>
    <div class="projects-area style-two-area ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="projects-section-content" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <div class="projects-bg-text">WORK</div>
                        <span>PROJECTS</span>
                        <h3>Our Latest Incredible Client's Projects</h3>
                        <p>We are technology solutions providing company all over the world doing over 40 years.</p>
                        <div class="projects-section-btn">
                            <router-link to="/projects" class="default-btn">
                                Explore All Projects
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 col-md-12">
                    <div class="projects-slides-two">
                        <carousel
                            :autoplay="5000"
                            :wrap-around="true"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide 
                                v-for="slide in carouselItems" 
                                :key="slide.id"
                            >
                                <div class="projects-item bg-F2F1F3">
                                    <div class="projects-image">
                                        <router-link :to="slide.btnLink">
                                            <img :src="slide.image" alt="image">
                                        </router-link>
                                    </div>
                                    <div class="projects-content">
                                        <h3>
                                            <router-link :to="slide.btnLink">
                                                {{slide.title}}
                                            </router-link>
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
            </div>
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
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            1024: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            1200: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
        },
    }),
})
</script>