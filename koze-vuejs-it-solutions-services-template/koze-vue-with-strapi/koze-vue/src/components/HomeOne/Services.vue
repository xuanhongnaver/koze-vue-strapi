<template>
    <div class="services-area with-radius ptb-100">
        <div class="container-fluid">
            <div 
                class="row align-items-center"
                v-if="service !== null"
            >
                <div class="col-lg-4 col-md-12">
                    <div 
                        class="services-section-content" 
                        data-aos="fade-down" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
                        <span>{{service.subtitle}}</span>
                        <h3>{{service.title}}</h3>
                        <p>{{service.desc}}</p>
                        <div class="services-section-btn">
                            <router-link :to="service.btnLink" class="default-btn">
                                {{service.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 col-md-12">
                    <ServicesSlides />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ServicesSlides from './ServicesSlides'

export default {
    name: 'Services',
    components: {
       ServicesSlides
    },
    data (){
        return {
            service: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/serviceshomeone?populate=servicesSlides.image')
        const { data: {attributes} } = response.data
        this.service = attributes
    },
}
</script>