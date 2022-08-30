<template>
    <div class="testimonials-area ptb-100">
        <div 
            class="container-fluid"
            v-if="testimonials!== null"
        >
            <div class="section-title section-style-two">
                <div class="section-bg-text">{{testimonials.bgText}}</div>
                <span>{{testimonials.subtitle}}</span>
                <h2>{{testimonials.heading}}</h2>
            </div>

            <div class="testimonials-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide 
                        v-for="testimonial in testimonials.testimonialsCard" 
                        :key="testimonial.id"
                    >
                        <div class="single-testimonials-card">
                            <p>{{testimonial.desc}}</p>

                            <div class="info-item-box">
                                <img :src="testimonial.image.data.attributes.url" class="rounded-circle" alt="image">
                                <h4>
                                    {{testimonial.name}}, 
                                    <span>{{testimonial.position}}</span>
                                </h4>
                                <ul class="rating-list">
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-fill"></i></li>
                                    <li><i class="ri-star-line"></i></li>
                                </ul>
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
import axios from 'axios';
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
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
        testimonials: null,
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
        const response = await axios.get('http://localhost:1337/api/testimonialshomethree?populate=testimonialsCard.image')
        const { data: {attributes} } = response.data
        this.testimonials = attributes
    },
})
</script>