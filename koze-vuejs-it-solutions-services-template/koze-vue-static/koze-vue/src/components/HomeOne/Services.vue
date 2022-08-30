<template>
    <div class="services-area with-radius ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="services-section-content" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <span>SERVICES</span>
                        <h3>We Provide the Best Quality <b>Services</b></h3>
                        <p>We are technology solutions providing company all over the world doing over 40 years.</p>
                        <div class="services-section-btn">
                            <router-link to="/services-style-1" class="default-btn">
                                Explore All Services
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 col-md-12">
                    <div class="services-slides">
                        <carousel
                            :autoplay="5000"
                            :wrap-around="true"
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in carouselItems" :key="slide.id">
                                <div class="services-item">
                                    <div class="services-image">
                                        <router-link :to="slide.link">
                                            <img :src="slide.image" alt="image">
                                        </router-link>
                                    </div>
                                    <div class="services-content">
                                        <h3>
                                            <router-link :to="slide.link">{{slide.title}}</router-link>
                                        </h3>
                                        <p>{{slide.desc}}</p>
                                        <router-link :to="slide.link" class="services-btn">
                                            View More
                                        </router-link>
                                    </div>
                                </div>
                            </Slide>

                            <template #addons>
                                <Pagination />
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
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Services',
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
        carouselItems: [
            {
                id: 1,
                image: require('../../assets/images/services/services-1.jpg'),
                title: 'Software Development',
                desc: 'Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…',
                link: '/services-details',
                btnText: 'View More',
            },
            {
                id: 2,
                image: require('../../assets/images/services/services-2.jpg'),
                title: 'App Development',
                desc: 'Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…',
                link: '/services-details',
                btnText: 'View More',
            },
            {
                id: 3,
                image: require('../../assets/images/services/services-3.jpg'),
                title: 'Web Development',
                desc: 'Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…',
                link: '/services-details',
                btnText: 'View More',
            },
            {
                id: 4,
                image: require('../../assets/images/services/services-4.jpg'),
                title: 'Analytic Solutions',
                desc: 'Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…',
                link: '/services-details',
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
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>