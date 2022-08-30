<template>
    <div class="testimonials-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="testimonials !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="testimonials-section-content" data-aos="fade-right" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <span>{{testimonials.subtitle}}</span>
                        <h3>{{testimonials.heading}}</h3>
                        <p>{{testimonials.desc}}</p>
                        <p>{{testimonials.subDesc}}</p>

                        <div class="testimonials-btn">
                            <router-link :to="testimonials.btnLink" class="default-btn">
                                {{testimonials.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div 
                        class="testimonials-item" 
                        data-aos="fade-left" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                        v-for="testimonial in testimonials.items"
                        :key="testimonial.id"
                    >
                        <div class="item-box" data-tilt>
                            <img :src="testimonial.image.data.attributes.url" class="rounded-circle" alt="image">
                            <p>{{testimonial.desc}}</p>
                            <h4>{{testimonial.name}}, <span>{{testimonial.designation}}</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="testimonialsbg-shape">
            <img src="../../assets/images/testimonials/testimonials-shape.png" alt="image">
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
        const response = await axios.get('http://localhost:1337/api/testimonialshomeone?populate=items.image')
        const { data: {attributes} } = response.data
        this.testimonials = attributes
    },
}
</script>