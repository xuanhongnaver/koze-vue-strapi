<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="about !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="about-image" data-tilt>
                        <img 
                            :src="aboutImg" 
                            alt="image" 
                            data-aos="fade-down" 
                            data-aos-delay="80" 
                            data-aos-duration="800" 
                            data-aos-once="true"
                        >
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div 
                        class="about-content" 
                        data-aos="fade-up" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
                        <span>{{ about.subtitle }}</span>
                        <h3>{{ about.heading }}</h3>
                        <p>{{ about.desc }}</p>
                        <p>{{ about.subDesc }}</p>
                        <div class="about-btn">
                            <router-link :to="about.btnLink" class="default-btn">
                                {{ about.btnText }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-shape-1">
            <img src="../../assets/images/about/about-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'About',
    data (){
        return {
            about: null,
            aboutImg: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/homeoneabout?populate=*')
        const { data: {attributes} } = response.data
        const {image: {data: { attributes: {url} }}} = attributes
        this.about = attributes
        this.aboutImg = url
    },
}
</script>