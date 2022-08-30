<template>
    <div class="main-banner-area">
        <div class="container-fluid">
            <div 
                class="row align-items-center"
                v-if="banner !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="main-banner-content">
                        <span 
                            data-aos="fade-right" 
                            data-aos-delay="70" 
                            data-aos-duration="700" 
                            data-aos-once="true"
                        >
                            {{banner.subtitle}}
                        </span>
                        <h1 
                            data-aos="fade-right" 
                            data-aos-delay="70" 
                            data-aos-duration="700" 
                            data-aos-once="true"
                        >
                            {{banner.heading}}
                        </h1>
                        <p 
                            data-aos="fade-right" 
                            data-aos-delay="70" 
                            data-aos-duration="700" 
                            data-aos-once="true"
                        >
                            {{banner.desc}}
                        </p>
                        
                        <div 
                            class="banner-btn" 
                            data-aos="fade-right" 
                            data-aos-delay="70" 
                            data-aos-duration="700" 
                            data-aos-once="true"
                        >
                            <router-link :to="banner.btnLink" class="default-btn">
                                {{banner.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="main-banner-image">
                        <img 
                            :src="banner.image.data.attributes.url" 
                            alt="image" 
                            data-aos="fade-down" 
                            data-aos-delay="70" 
                            data-aos-duration="700" 
                            data-aos-once="true"
                        >

                        <div class="banner-circle">
                            <img 
                                src="../../assets/images/main-banner/banner-circle.png" 
                                alt="image" data-aos="fade-down" 
                                data-aos-delay="100" 
                                data-aos-duration="1000" 
                                data-aos-once="true"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="banner-shape-1">
            <img src="../../assets/images/main-banner/banner-shape-1.png" alt="image">
        </div>
        <div class="banner-shape-2">
            <img src="../../assets/images/main-banner/banner-shape-2.png" alt="image">
        </div>
        <div class="banner-dot-shape-1">
            <img src="../../assets/images/main-banner/dot-1.png" alt="image">
        </div>
        <div class="banner-dot-shape-2">
            <img src="../../assets/images/main-banner/dot-2.png" alt="image">
        </div>
        <div class="banner-dot-shape-3">
            <img src="../../assets/images/main-banner/dot-3.png" alt="image">
        </div>
        <div class="banner-dot-shape-4">
            <img src="../../assets/images/main-banner/dot-4.png" alt="image">
        </div>
        <div class="banner-dot-shape-5">
            <img src="../../assets/images/main-banner/dot-5.png" alt="image">
        </div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MainBanner',
    data (){
        return {
            banner: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/bannerhomethree?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
}
</script>