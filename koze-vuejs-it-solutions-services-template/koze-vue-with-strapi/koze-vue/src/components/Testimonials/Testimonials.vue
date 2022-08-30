<template>
    <div class="testimonials-area ptb-100">
        <div 
            class="container"
            v-if="testimonials !== null"
        >
            <div class="section-title">
                <span>{{testimonials.subtitle}}</span>
                <h2>{{testimonials.heading}}</h2>
            </div>
            <div class="row justify-content-center">
                <div 
                    class="col-lg-4 col-md-6"
                    v-for="testimonial in testimonials.testimonialsCard"
                    :key="testimonial.id"
                >
                    <div 
                        class="single-testimonials-card" 
                        data-aos="fade-up" 
                        data-aos-delay="50" 
                        data-aos-duration="500" 
                        data-aos-once="true"
                    >
                        <p>{{testimonial.desc}}</p>

                        <div class="info-item-box">
                            <img :src="testimonial.image.data.attributes.url" class="rounded-circle" alt="image">
                            <h4>{{testimonial.name}}, <span>{{testimonial.position}}</span></h4>
                            <ul class="rating-list">
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-fill"></i></li>
                                <li><i class="ri-star-line"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/testimonials" class="prev page-numbers"><i class="ri-arrow-left-s-line"></i></router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/testimonials" class="page-numbers">2</router-link>
                        <router-link to="/testimonials" class="page-numbers">3</router-link>
                        <router-link to="/testimonials" class="next page-numbers"><i class="ri-arrow-right-s-line"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Testimonials',
    data (){
        return {
            testimonials: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/testimonialshomethree?populate=testimonialsCard.image')
        const { data: {attributes} } = response.data
        this.testimonials = attributes
    },
}
</script>