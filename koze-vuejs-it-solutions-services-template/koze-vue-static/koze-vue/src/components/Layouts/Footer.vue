<template>
    <footer class="footer-area with-black-background pt-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="single-footer-widget" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <div class="widget-logo">
                            <router-link to="/">
                                <img src="../../assets/images/logo.svg" alt="image">
                            </router-link>
                        </div>
                        <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy.</p>

                        <ul class="widget-social">
                            <li>
                                <a href="https://www.facebook.com/EnvyTheme" target="_blank">
                                    <i class="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/?lang=en" target="_blank">
                                    <i class="ri-twitter-fill"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <i class="ri-youtube-fill"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://vimeo.com/" target="_blank">
                                    <i class="ri-vimeo-fill"></i>
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-footer-widget ps-5" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                        <h3>Links</h3>

                        <ul class="quick-links">
                            <li><router-link to="/about-style-1">About Us</router-link></li>
                            <li><router-link to="/services-style-2">Services</router-link></li>
                            <li><router-link to="/blog-style-1">News</router-link></li>
                            <li><router-link to="/pricing">Pricing</router-link></li>
                            <li><router-link to="/projects">Projects</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-footer-widget ps-5" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                        <h3>Pages</h3>

                        <ul class="quick-links">
                            <li><router-link to="/contact">Contact Us</router-link></li>
                            <li><router-link to="/purchase-guide">Purchase Guide</router-link></li>
                            <li><router-link to="/faq">FAQ's</router-link></li>
                            <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
                            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-footer-widget" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <h3>Subscribe Newsletter</h3>

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
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>