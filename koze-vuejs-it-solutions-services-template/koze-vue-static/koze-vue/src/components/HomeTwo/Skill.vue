<template>
    <div class="skill-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="skill-content">
                        <span>SKILLSET</span>
                        <h3>We Have A Set Of Skill With High Quality</h3>
                    </div>

                    <div class="skill-bar" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <p class="progress-title-holder">
                            <span class="progress-title">Software Development</span>
                            <span class="progress-number-wrapper">
                                <span class="progress-number-mark" style="left: 92%;">
                                    <span class="percent">92</span>
                                    <span class="down-arrow">%</span>
                                </span>
                            </span>
                        </p>
                        <div class="progress-content-outter">
                            <div class="progress progress-content">
                                <div class="progress-bar" role="progressbar" style="width: 92%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-bar" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                        <p class="progress-title-holder">
                            <span class="progress-title">App Development</span>
                            <span class="progress-number-wrapper">
                                <span class="progress-number-mark" style="left: 80%;">
                                    <span class="percent">80</span>
                                    <span class="down-arrow">%</span>
                                </span>
                            </span>
                        </p>
                        <div class="progress-content-outter">
                            <div class="progress progress-content bg-D5158F">
                                <div class="progress-bar" role="progressbar" style="width:80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-bar" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                        <p class="progress-title-holder">
                            <span class="progress-title">Artificial Intelligence</span>
                            <span class="progress-number-wrapper">
                                <span class="progress-number-mark" style="left: 70%;">
                                    <span class="percent">70</span>
                                    <span class="down-arrow">%</span>
                                </span>
                            </span>
                        </p>
                        <div class="progress-content-outter">
                            <div class="progress progress-content bg-FEB302">
                                <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-bar" data-percentage="45%" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <p class="progress-title-holder">
                            <span class="progress-title">Cyber Security</span>
                            <span class="progress-number-wrapper">
                                <span class="progress-number-mark" style="left: 45%;">
                                    <span class="percent">45</span>
                                    <span class="down-arrow">%</span>
                                </span>
                            </span>
                        </p>
                        <div class="progress-content-outter">
                            <div class="progress progress-content bg-A66BFF">
                                <div class="progress-bar" role="progressbar" style="width: 45%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                    <div class="skill-bar-btn" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                        <router-link to="/about-style-1" class="default-btn">Explore More</router-link>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="skill-image" data-aos="fade-left" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <img src="../../assets/images/skill/skill-1.png" alt="image" data-tilt>

                        <div class="skill-shape-1">
                            <img src="../../assets/images/skill/skill-shape-1.png" alt="image">
                        </div>
                        <div class="skill-shape-2">
                            <img src="../../assets/images/skill/skill-shape-2.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="skill-bg-shape">
            <img src="../../assets/images/skill/skill-bg-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Skill'
}
</script>