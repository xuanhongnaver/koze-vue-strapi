<template>
    <div class="blog-area pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span>ARTICLE</span>
                <h2>Read Our Blog To Get All Recent Tech <b>News</b></h2>
            </div>

            <div class="blog-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :wrap-around="true"
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="blog-card">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="blog-image">
                                        <router-link :to="slide.btnLink">
                                            <img :src="slide.image" alt="image">
                                        </router-link>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="blog-content">
                                        <div class="date">{{slide.date}}</div>
                                        <h3>
                                            <router-link :to="slide.btnLink">
                                                {{slide.title}}
                                            </router-link>
                                        </h3>
                                        <p>{{slide.desc}}</p>
                                        <router-link :to="slide.btnLink" class="blog-btn">
                                            {{slide.btnText}}
                                        </router-link>
                                    </div>
                                </div>
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
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Blog',
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
                image: require('../../assets/images/blog/blog-1.jpg'),
                date: '9th July, 2022',
                title: 'How Technology Dominate In The new World In 2022',
                desc: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
                btnLink: '/single-blog-1',
                btnText: 'View More',
            },
            {
                id: 2,
                image: require('../../assets/images/blog/blog-2.jpg'),
                date: '9th July, 2022',
                title: 'Top 10 Most Famous Technology Trend In 2022',
                desc: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
                btnLink: '/single-blog-1',
                btnText: 'View More',
            },
            {
                id: 3,
                image: require('../../assets/images/blog/blog-3.jpg'),
                date: '9th July, 2022',
                title: 'How Technology Dominate In The new World In 2022',
                desc: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
                btnLink: '/single-blog-1',
                btnText: 'View More',
            },
            {
                id: 4,
                image: require('../../assets/images/blog/blog-4.jpg'),
                date: '9th July, 2022',
                title: 'Top 10 Most Famous Technology Trend In 2022',
                desc: 'Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.',
                btnLink: '/single-blog-1',
                btnText: 'View More',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'left',
			},
            768: {
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