<template>
    <footer class="footer-area with-black-background pt-100">
        <div class="container">
            <div 
                class="row justify-content-center"
                v-if="footer !== null"
            >
                <div class="col-lg-3 col-md-6">
                    <div 
                        class="single-footer-widget" 
                        data-aos="fade-up" 
                        data-aos-delay="50" 
                        data-aos-duration="500" 
                        data-aos-once="true"
                    >
                        <div class="widget-logo">
                            <router-link to="/">
                                <img :src="footer.image.data.attributes.url" alt="image">
                            </router-link>
                        </div>
                        <p>{{footer.desc}}</p>

                        <ul class="widget-social">
                            <li
                                v-for="social in footer.socials"
                                :key="social.id"
                            >
                                <a :href="social.link" target="_blank">
                                    <i :class="social.icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div 
                        class="single-footer-widget ps-5" 
                        data-aos="fade-up" 
                        data-aos-delay="60" 
                        data-aos-duration="600" 
                        data-aos-once="true"
                    >
                        <h3>{{footer.titleOne}}</h3>

                        <ul class="quick-links">
                            <li
                                v-for="link in footer.links"
                                :key="link.id"
                            >
                                <router-link :to="link.link">
                                    {{link.text}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div 
                        class="single-footer-widget ps-5" 
                        data-aos="fade-up" 
                        data-aos-delay="70" 
                        data-aos-duration="700" 
                        data-aos-once="true"
                    >
                        <h3>{{footer.titleTwo}}</h3>

                        <ul class="quick-links">
                            <li
                                v-for="link in footer.pages"
                                :key="link.id"
                            >
                                <router-link :to="link.link">
                                    {{link.text}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div 
                        class="single-footer-widget" 
                        data-aos="fade-up" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
                        <h3>{{footer.titleThree}}</h3>

                        <form class="newsletter-form" data-bs-toggle="validator">
                            <input type="email" class="input-newsletter" placeholder="Enter your email" name="EMAIL">
    
                            <button type="submit" class="default-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="copyright-area">
            <div class="container">
                <div class="copyright-area-content">
                    <p>
                        &copy; {{currentYear}} Koze All Rights Reserved by
                        <a href="https://envytheme.com/" target="_blank"> EnvyTheme</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-shape-1">
            <img src="../../assets/images/footer/footer-shape-1.png" alt="image">
        </div>
        <div class="footer-shape-2">
            <img src="../../assets/images/footer/footer-shape-2.png" alt="image">
        </div>
        <div class="footer-shape-3">
            <img src="../../assets/images/footer/footer-shape-3.png" alt="image">
        </div>
    </footer>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
            footer: null
        };
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/footer?populate=*')
        const { data: {attributes} } = response.data
        this.footer = attributes
    },
}
</script>