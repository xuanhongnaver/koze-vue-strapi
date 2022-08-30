<template>
    <div class="partner-area ptb-100">
        <div class="container">
            <div class="partner-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                    v-if="partner !== null"
                >
                    <Slide 
                        v-for="slide in partner.imageList" 
                        :key="slide.id"
                    >
                        <div 
                            class="partner-card" 
                            data-aos="fade-up" 
                            data-aos-delay="80" 
                            data-aos-duration="800" 
                            data-aos-once="true"
                        >
                            <div class="image-list">
                                <img :src="slide.image.data.attributes.url" alt="partner">
                                <img :src="slide.image.data.attributes.url" alt="partner">
                                <!-- <img :src="slide.imageHoverpartnerImg" alt="partner"> -->
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Partner',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        partner: null,
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 6,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/partner?populate=imageList.image')
        const { data: {attributes} } = response.data
        this.partner = attributes
    },
})
</script>