<template>
    <div class="privacy-policy-area ptb-100">
        <div class="container">
            <div 
                class="row"
                v-if="privacy !== null"
            >
                <div class="col-lg-8 col-md-12">
                    <div class="privacy-policy-content">
                        <div class="privacy-policy-image">
                            <img :src="privacy.image.data.attributes.url" alt="image">
                        </div>

                        <span v-html="privacy.longDesc"></span>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="widget-area">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <input type="search" class="search-field" placeholder="Search Something">
                                <button type="submit"><i class="ri-search-line"></i></button>
                            </form>
                        </div>
                        
                        <div class="widget widget_insight">
                            <h3 class="widget-title">Popular Link</h3>
                            
                            <ul class="list">
                                <li><router-link to="/about-style-1">About Us</router-link></li>
                                <li><router-link to="/contact">Contact Us</router-link></li>
                                <li><router-link to="/purchase-guide">Purchase Guide</router-link></li>
                                <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                                <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
                            </ul>
                        </div>

                        <div class="widget widget_recent_courses">
                            <h3 class="widget-title">Recent Courses</h3>

                            <div class="item">
                                <router-link to="/courses-details" class="thumb">
                                    <span class="fullimage cover bg1" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>$49.00</span>
                                    <h4 class="title usmall">
                                        <router-link to="/courses-details">
                                            The Data Science Course 2020: Complete Data Science
                                        </router-link>
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <router-link to="/courses-details" class="thumb">
                                    <span class="fullimage cover bg2" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>$59.00</span>
                                    <h4 class="title usmall">
                                        <router-link to="/courses-details">
                                            Java Programming Masterclass for Software Developers
                                        </router-link>
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <router-link to="/courses-details" class="thumb">
                                    <span class="fullimage cover bg3" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>$69.00</span>
                                    <h4 class="title usmall">
                                        <router-link to="/courses-details">Deep Learning A-Z™: Hands-On Artificial Neural Networks</router-link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div class="widget widget_tag_cloud">
                            <h3 class="widget-title">Popular Tags</h3>

                            <div class="tagcloud">
                                <router-link to="/tags">Agency</router-link>
                                <router-link to="/tags">Branding</router-link>
                                <router-link to="/tags">Marketing</router-link>
                                <router-link to="/tags">Design</router-link>
                                <router-link to="/tags">Development</router-link>
                                <router-link to="/tags">Consulting</router-link>
                                <router-link to="/tags">Startup</router-link>
                                <router-link to="/tags">Popular</router-link>
                                <router-link to="/tags">WordPress</router-link>
                                <router-link to="/tags">Financial</router-link>
                                <router-link to="/tags">Branding</router-link>
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
    name: 'PrivacyPolicy',
    data (){
        return {
            privacy: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/privacypolicy?populate=*')
        const { data: {attributes} } = response.data
        this.privacy = attributes
    },
}
</script>