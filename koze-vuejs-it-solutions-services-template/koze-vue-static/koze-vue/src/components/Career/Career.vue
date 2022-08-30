<template>
    <div class="career-area pt-100 pb-100">
        <div class="container">
            <div class="section-title">
                <span>Career</span>
                <h2>When You Have Jobs In Multiple <b>Locations</b></h2>
            </div>
            
            <div class="career-item">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-9">
                        <div class="career-content">
                            <h3>
                                <router-link to="/career-details">Team Lead - Digital Marketing</router-link>
                            </h3>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                            <ul class="list">
                                <li><span>Location:</span> New York, USA</li>
                                <li><span>Type:</span> Full Time</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="career-btn text-end">
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="career-item">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-9">
                        <div class="career-content">
                            <h3>
                                <router-link to="/career-details">Senior ASP.Net Core Developer</router-link>
                            </h3>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                            <ul class="list">
                                <li><span>Location:</span> New York, USA</li>
                                <li><span>Type:</span> Half Time</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="career-btn text-end">
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="career-item">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-9">
                        <div class="career-content">
                            <h3>
                                <router-link to="/career-details">Android Developer</router-link>
                            </h3>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                            <ul class="list">
                                <li><span>Location:</span> New York, USA</li>
                                <li><span>Type:</span> Half Time</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="career-btn text-end">
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="career-item">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-9">
                        <div class="career-content">
                            <h3>
                                <router-link to="/career-details">Graphic Designer</router-link>
                            </h3>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                            <ul class="list">
                                <li><span>Location:</span> New York, USA</li>
                                <li><span>Type:</span> Full Time</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="career-btn text-end">
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="career-item">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-9">
                        <div class="career-content">
                            <h3>
                                <router-link to="/career-details">Digital Marketing Executive</router-link>
                            </h3>
                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
                            <ul class="list">
                                <li><span>Location:</span> New York, USA</li>
                                <li><span>Type:</span> Full Time</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3">
                        <div class="career-btn text-end">
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagination-area">
                <router-link to="/career" class="prev page-numbers"><i class="ri-arrow-left-s-line"></i></router-link>
                <span class="page-numbers current" aria-current="page">1</span>
                <router-link to="/career" class="page-numbers">2</router-link>
                <router-link to="/career" class="page-numbers">3</router-link>
                <router-link to="/career" class="next page-numbers"><i class="ri-arrow-right-s-line"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Career'
}
</script>