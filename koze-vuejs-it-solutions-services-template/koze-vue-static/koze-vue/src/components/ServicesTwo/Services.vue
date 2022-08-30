<template>
    <div class="services-area ptb-100">
        <div class="container">
            <div class="section-title">
                <span>SERVICES</span>
                <h2>We Provide the Best Quality <b>Services</b></h2>
                <p>We are technology solutions providing company all over the world doing over 40 years. lorem ipsum dolor sit amet.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="services-item">
                        <div class="services-image">
                            <router-link to="/services-details">
                                <img src="../../assets/images/services/services-1.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link to="/services-details">Software Development</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                            <router-link to="/services-details" class="services-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="services-item">
                        <div class="services-image">
                            <router-link to="/services-details">
                                <img src="../../assets/images/services/services-2.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link to="/services-details">App Development</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                            <router-link to="/services-details" class="services-btn">View More</router-link>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6">
                    <div class="services-item">
                        <div class="services-image">
                            <router-link to="/services-details">
                                <img src="../../assets/images/services/services-3.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link to="/services-details">Web Development</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                            <router-link to="/services-details" class="services-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="services-item">
                        <div class="services-image">
                            <router-link to="/services-details">
                                <img src="../../assets/images/services/services-4.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link to="/services-details">Analytic Solutions</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                            <router-link to="/services-details" class="services-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="services-item">
                        <div class="services-image">
                            <router-link to="/services-details">
                                <img src="../../assets/images/services/services-5.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link to="/services-details">Database Administrator</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                            <router-link to="/services-details" class="services-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="services-item">
                        <div class="services-image">
                            <router-link to="/services-details">
                                <img src="../../assets/images/services/services-6.jpg" alt="image">
                            </router-link>
                        </div>
                        <div class="services-content">
                            <h3>
                                <router-link to="/services-details">Product Design</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…</p>
                            <router-link to="/services-details" class="services-btn">View More</router-link>
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
export default {
    name: 'Services'
}
</script>