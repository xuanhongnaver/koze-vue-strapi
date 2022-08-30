<template>
    <div class="pricing-area with-black-background pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span>PRICING</span>
                <h2>Our <b>Pricing</b> For All Type Of Technology Services</h2>
                <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-pricing-card" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                        <h3>Startup</h3>
                        <div class="price">$19 <span>/ month</span></div>
                        <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.</p>

                        <ul class="pricing-list">
                            <li><i class="ri-check-fill"></i> Lorem ipsum dolor.</li>
                            <li><i class="ri-check-fill"></i> Sit amet consetetur set a ledip.</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/pricing" class="default-btn">Choose Plan</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-pricing-card" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <h3>Basic</h3>
                        <div class="price">$49 <span>/ month</span></div>
                        <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.</p>

                        <ul class="pricing-list">
                            <li><i class="ri-check-fill"></i> Lorem ipsum dolor.</li>
                            <li><i class="ri-check-fill"></i> Sit amet consetetur set a ledip.</li>
                            <li><i class="ri-check-fill"></i> Lorems Sit ledip ipsum dolor.</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/pricing" class="default-btn">Choose Plan</router-link>
                        </div>
                        <div class="most-popular">
                            <span>Most Popular</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-pricing-card" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                        <h3>Advanced</h3>
                        <div class="price">$79 <span>/ month</span></div>
                        <p>Lorem ipsum dolor sit amet consetetur sadi scing elitr sed diam nonumy eirmod.</p>

                        <ul class="pricing-list">
                            <li><i class="ri-check-fill"></i> Lorem ipsum dolor.</li>
                            <li><i class="ri-check-fill"></i> Sit amet consetetur set a ledip.</li>
                            <li><i class="ri-check-fill"></i> Lorems Sit ledip ipsum dolor.</li>
                            <li><i class="ri-check-fill"></i> Lorem ipsum dolor.</li>
                        </ul>
                        <div class="pricing-btn">
                            <router-link to="/pricing" class="default-btn">Choose Plan</router-link>
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
export default {
    name: 'Pricing'
}
</script>