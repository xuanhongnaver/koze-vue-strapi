<template>
    <div class="services-area-style-two ptb-100">
        <div class="container-fluid">
            <div class="section-title">
                <span>SERVICES</span>
                <h2>We Provide the Best Quality <b>Services</b></h2>
                <p>We are technology solutions providing company all over the world doing over 40 years. lorem ipsum dolor sit amet.</p>
            </div>

            <div class="services-slides-two">
                <carousel
                    :autoplay="5000"
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
            {
                id: 5,
                image: require('../../assets/images/services/services-1.jpg'),
                title: 'Software Development',
                desc: 'Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…',
                link: '/services-details',
                btnText: 'View More',
            },
            {
                id: 6,
                image: require('../../assets/images/services/services-2.jpg'),
                title: 'App Development',
                desc: 'Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…',
                link: '/services-details',
                btnText: 'View More',
            },
            {
                id: 7,
                image: require('../../assets/images/services/services-3.jpg'),
                title: 'Web Development',
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