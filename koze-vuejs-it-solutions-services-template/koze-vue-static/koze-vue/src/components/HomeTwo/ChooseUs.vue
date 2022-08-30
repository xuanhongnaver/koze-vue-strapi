<template>
    <div class="choose-area bg-with-F5F5F5-color pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span>WHY CHOOSE US</span>
                <h2>We Help You To <b>Increase</b> Your Sale Through Solutions</h2>
                <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                    <div class="single-choose-card" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <div class="choose-image" data-tilt>
                            <router-link to="/services-details">
                                <img src="../../assets/images/choose/choose-1.png" alt="image">
                            </router-link>
                        </div>
                        <div class="choose-content">
                            <h3>
                                <router-link to="/services-details">Mobile Apps</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-choose-card" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                        <div class="choose-image" data-tilt>
                            <router-link to="/services-details">
                                <img src="../../assets/images/choose/choose-2.png" alt="image">
                            </router-link>
                        </div>
                        <div class="choose-content">
                            <h3>
                                <router-link to="/services-details">Branding Strategy</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-choose-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                        <div class="choose-image" data-tilt>
                            <router-link to="/services-details">
                                <img src="../../assets/images/choose/choose-3.png" alt="image">
                            </router-link>
                        </div>
                        <div class="choose-content">
                            <h3>
                                <router-link to="/services-details">Graphic Design</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="single-choose-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <div class="choose-image" data-tilt>
                            <router-link to="/services-details">
                                <img src="../../assets/images/choose/choose-4.png" alt="image">
                            </router-link>
                        </div>
                        <div class="choose-content">
                            <h3>
                                <router-link to="/services-details">Search Optimization</router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.</p>
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
export default {
    name: 'ChooseUs'
}
</script>