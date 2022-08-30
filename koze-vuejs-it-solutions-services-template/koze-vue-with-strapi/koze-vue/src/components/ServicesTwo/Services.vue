<template>
    <div class="services-area ptb-100">
        <div 
            class="container"
        >
            <div class="section-title">
                <span>SERVICES</span>
                <h3>We Provide the Best Quality Services</h3>
                <p>We are technology solutions providing company all over the world doing over 40 years.</p>
            </div>

            <div 
                class="row justify-content-center"
                v-if="services !== []"
            >
                <div
                    class="col-lg-4 col-md-6"
                    v-for="service in services" 
                    :key="service.id"
                >
                    <div class="services-item">
                        <div class="services-image">
                            <router-link :to="'/services-details/' + service.attributes.slug">
                                <img :src="service.attributes.image.data.attributes.url" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link :to="'/services-details/' + service.attributes.slug">
                                    {{service.attributes.title}}
                                </router-link>
                            </h3>
                            <p>{{service.attributes.desc}}</p>
                            <router-link 
                                :to="'/services-details/' + service.attributes.slug" 
                                class="services-btn"
                            >
                                {{service.attributes.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/services-style-2" class="prev page-numbers">
                            <i class="ri-arrow-left-s-line"></i>
                        </router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/services-style-2" class="page-numbers">2</router-link>
                        <router-link to="/services-style-2" class="page-numbers">3</router-link>
                        <router-link to="/services-style-2" class="next page-numbers">
                            <i class="ri-arrow-right-s-line"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="services-shape-1">
            <img src="../../assets/images/services/services-shape-1.png" alt="image">
        </div>
        <div class="services-shape-2">
            <img src="../../assets/images/services/services-shape-2.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Services',
    data (){
        return {
            services: [],
            error: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/servicesdetails?populate=*')
        this.services = response.data.data
    },
}
</script>