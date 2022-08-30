<template>
    <div class="about-area pb-75">
        <div 
            class="container"
            v-if="about !== null"
        >
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-wrap-image" data-tilt>
                        <img 
                            :src="about.image.data.attributes.url" 
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
                        class="about-wrap-content" 
                        data-aos="fade-up" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
                        <div class="about-bg-text">{{about.bgText}}</div>
                        <span>{{about.subtitle}}</span>
                        <h3>{{about.heading}}</h3>
                        <p>{{about.desc}}</p>
                    </div>
                </div>
            </div>

            <div class="about-inner-box">
                <div class="row justify-content-center">
                    <div 
                        class="col-lg-4 col-md-6"
                        v-for="card in about.aboutCard"
                        :key="card.id"
                    >
                        <div 
                            class="single-about-card" 
                            data-aos="fade-up" 
                            data-aos-delay="80" 
                            data-aos-duration="800" 
                            data-aos-once="true"
                        >
                            <h3>{{card.title}}</h3>
                            <p>{{card.desc}}</p>
                        </div>
                    </div>
                    
                    <div class="about-btn">
                        <router-link :to="about.btnLink" class="default-btn">
                            {{about.btnText}}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-circle-shape">
            <img src="../../assets/images/about/about-circle.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'About',
    data (){
        return {
            about: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/abouthomethree?populate=*')
        const { data: {attributes} } = response.data
        this.about = attributes
    },
}
</script>