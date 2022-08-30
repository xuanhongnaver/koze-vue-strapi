<template>
    <div class="features-area pb-75">
        <div class="container">
            <div class="features-inner-box">
                <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
                        <div class="single-features-card" data-tilt>
                            <div class="features-image" data-tilt>
                                <router-link to="/services-details">
                                    <img src="../../assets/images/features/features-1.png" alt="image">
                                </router-link>
                            </div>
                            <div class="content">
                                <h3>
                                    <router-link to="/services-details">Product Design</router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                            </div>
                            <div class="hover-content">
                                <h3>
                                    <router-link to="/services-details">Product Design</router-link>
                                </h3>
                                <router-link to="/services-details" class="features-btn">View More</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
                        <div class="single-features-card" data-tilt>
                            <div class="features-image" data-tilt>
                                <router-link to="/services-details">
                                    <img src="../../assets/images/features/features-2.png" alt="image">
                                </router-link>
                            </div>
                            <div class="content">
                                <h3>
                                    <router-link to="/services-details">Development</router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                            </div>
                            <div class="hover-content">
                                <h3>
                                    <router-link to="/services-details">Development</router-link>
                                </h3>
                                <router-link to="/services-details" class="features-btn">View More</router-link>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
                        <div class="single-features-card" data-tilt>
                            <div class="features-image" data-tilt>
                                <router-link to="/services-details">
                                    <img src="../../assets/images/features/features-3.png" alt="image">
                                </router-link>
                            </div>
                            <div class="content">
                                <h3>
                                    <router-link to="/services-details">Data Analysis</router-link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr</p>
                            </div>
                            <div class="hover-content">
                                <h3>
                                    <router-link to="/services-details">Data Analysis</router-link>
                                </h3>
                                <router-link to="/services-details" class="features-btn">View More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>