<template>
    <div class="choose-area pt-100 pb-75">
        <div 
            class="container"
            v-if="chooses !== null"
        >
            <div class="section-title section-style-two">
                <div class="section-bg-text">{{chooses.bgText}}</div>
                <span>{{chooses.subtitle}}</span>
                <h2>{{chooses.heading}}</h2>
                <p>{{chooses.desc}}</p>
            </div>

            <div class="row justify-content-center">
                <div 
                    class="col-lg-3 col-sm-6"
                    v-for="choose in chooses.ChooseCard"
                    :key="choose.id"
                >
                    <div 
                        class="single-choose-card" 
                        data-aos="fade-up" 
                        data-aos-delay="50" 
                        data-aos-duration="500" 
                        data-aos-once="true"
                    >
                        <div class="choose-image" data-tilt>
                            <router-link to="/services-details">
                                <img :src="choose.image.data.attributes.url" alt="image">
                            </router-link>

                            <div class="number">{{choose.number}}</div>
                        </div>
                        <div class="choose-content">
                            <h3>
                                <router-link to="/services-details">
                                    {{choose.title}}
                                </router-link>
                            </h3>
                            <p>{{choose.desc}}</p>
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
    name: 'ChooseUs',
    data (){
        return {
            chooses: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/choosehomethree?populate=ChooseCard.image')
        const { data: {attributes} } = response.data
        this.chooses = attributes
    },
}
</script>