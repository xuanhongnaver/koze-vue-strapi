<template>
    <div class="features-area pb-75">
        <div class="container">
            <div class="features-inner-box">
                <div 
                    class="row justify-content-center"
                    v-if="features !== null"
                >
                    <div 
                        class="col-lg-4 col-md-6" 
                        data-aos="fade-down" 
                        data-aos-delay="100" 
                        data-aos-duration="1000" 
                        data-aos-once="true"
                        v-for="feature in features.featuresCard"
                        :key="feature.id"
                    >
                        <div class="single-features-card" data-tilt>
                            <div class="features-image" data-tilt>
                                <router-link :to="feature.btnLink">
                                    <img :src="feature.image.data.attributes.url" alt="image">
                                </router-link>
                            </div>
                            <div class="content">
                                <h3>
                                    <router-link :to="feature.btnLink">
                                        {{feature.title}}
                                    </router-link>
                                </h3>
                                <p>{{feature.desc}}</p>
                            </div>
                            <div class="hover-content">
                                <h3>
                                    <router-link :to="feature.btnLink">
                                        {{feature.title}}
                                    </router-link>
                                </h3>
                                <router-link :to="feature.btnLink" class="features-btn">
                                    {{feature.btnText}}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Features',
    data (){
        return {
            features: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/feature?populate=featuresCard.image')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>