<template>
    <div class="pricing-area with-black-background pt-100 pb-75">
        <div 
            class="container"
            v-if="pricings !== null"
        >
            <div class="section-title">
                <span>{{pricings.subtitle}}</span>
                <h2>{{pricings.heading}}</h2>
                <p>{{pricings.desc}}</p>
            </div>

            <div class="row justify-content-center">
                <div 
                    class="col-lg-4 col-md-6"
                    v-for="pricing in pricings.pricingCard"
                    :key="pricing.id"
                >
                    <div 
                        class="single-pricing-card" 
                        data-aos="fade-up" 
                        data-aos-delay="70" 
                        data-aos-duration="700" 
                        data-aos-once="true"
                    >
                        <h3>{{pricing.title}}</h3>
                        <div class="price">${{pricing.price}} <span>/ {{pricing.month}}</span></div>
                        <p>{{pricing.desc}}</p>

                        <ul class="pricing-list">
                            <li
                                v-for="list in pricing.lists"
                                :key="list.id"
                            >
                                <i :class="list.icon"></i> 
                                {{list.list}}
                            </li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link :to="pricing.btnLink" class="default-btn">
                                {{pricing.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pricing-bg-shape-1">
            <img src="../../assets/images/pricing/pricing-bg-shape.png" alt="image">
        </div>
        <div class="pricing-shape-1">
            <img src="../../assets/images/pricing/pricing-shape-1.png" alt="image">
        </div>
        <div class="pricing-shape-2">
            <img src="../../assets/images/pricing/pricing-shape-2.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Pricing',
    data (){
        return {
            pricings: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/pricing?populate=pricingCard.lists')
        const { data: {attributes} } = response.data
        this.pricings = attributes
    },
}
</script>