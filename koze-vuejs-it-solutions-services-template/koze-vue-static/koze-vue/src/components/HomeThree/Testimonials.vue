<template>
    <div class="testimonials-area ptb-100">
        <div class="container-fluid">
            <div class="section-title section-style-two">
                <div class="section-bg-text">FEEDBACK</div>
                <span>TESTIMONIALS</span>
                <h2>Some <b>Sweet Talk</b> Of Our Happy Clients</h2>
            </div>
            
            <div class="testimonials-slides">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                    :settings='settings' 
                    :breakpoints='breakpoints'
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="single-testimonials-card">
                            <p>{{slide.desc}}</p>

                            <div class="info-item-box">
                                <img :src="slide.image" class="rounded-circle" alt="image">
                                <h4>{{slide.name}}, <span>{{slide.position}}</span></h4>
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
            snapAlign: 'left',
        },
        carouselItems: [
            {
                id: 1,
                desc: 'We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.',
                image: require('../../assets/images/testimonials/testimonials-4.jpg'),
                name: 'Bradly Doe',
                position: 'Founder of Medizo',
            },
            {
                id: 2,
                desc: 'The professionalism, collaboration and the design they come up with is pheno-menal. Thanks a lot the Koze Team.',
                image: require('../../assets/images/testimonials/testimonials-5.jpg'),
                name: 'Daniel John',
                position: 'Solit Team',
            },
            {
                id: 3,
                desc: 'We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.',
                image: require('../../assets/images/testimonials/testimonials-6.jpg'),
                name: 'Jennifer Smith',
                position: 'Spix Team',
            },
            {
                id: 4,
                desc: 'The professionalism, collaboration and the design they come up with is pheno-menal. Thanks a lot the Koze Team.',
                image: require('../../assets/images/testimonials/testimonials-7.jpg'),
                name: 'Sarp Karahan',
                position: 'Benzo Team',
            },
            {
                id: 5,
                desc: 'We look and sound so good! I am still in shock at how smooth this process was. The professionalism, collaboration and the design they come up is great.',
                image: require('../../assets/images/testimonials/testimonials-8.jpg'),
                name: 'Jane Ronan',
                position: 'Lebu Team',
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
            1024: {
                itemsToShow: 3.1,
                snapAlign: 'left',
            },
            1200: {
                itemsToShow: 4.1,
                snapAlign: 'left',
            },
        },
    }),
})
</script>