<template>
    <div class="choose-area bg-with-F5F5F5-color pt-100 pb-75">
        <div 
            class="container"
            v-if="chooses !== null"
        >
            <div class="section-title">
                <span>{{chooses.subtitle}}</span>
                <h2>{{chooses.heading}}</h2>
                <p>{{chooses.desc}}</p>
            </div>

            <div class="row justify-content-center">
                <div 
                    class="col-lg-3 col-sm-6"
                    v-for="choose in chooses.chooseCard"
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
                            <router-link :to="choose.link">
                                <img :src="choose.image.data.attributes.url" alt="image">
                            </router-link>
                        </div>
                        <div class="choose-content">
                            <h3>
                                <router-link :to="choose.link">
                                    {{choose.title}}
                                </router-link>
                            </h3>
                            <p>{{choose.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="choose-shape-1">
            <img src="../../assets/images/choose/choose-shape.png" alt="image">
        </div>
        <div class="choose-shape-2">
            <img src="../../assets/images/choose/choose-shape-2.png" alt="image">
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
        const response = await axios.get('http://localhost:1337/api/chooseushomeone?populate=chooseCard.image')
        const { data: {attributes} } = response.data
        this.chooses = attributes
    },
}
</script>