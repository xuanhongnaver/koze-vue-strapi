<template>
    <div>
        <div class="career-details-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12">
                        <div class="career-details-desc">
                            <h3>Team Lead - Digital Marketing</h3>
                            <div class="career-content">
                                <h4>Job Description</h4>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div class="career-content">
                                <h4>Roles & Responsibilities:</h4>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        
                                <ul class="list">
                                    <li>Stet clita kasd gubergren no sea takimata sanctus.</li>
                                    <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</li>
                                    <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor.</li>
                                    <li>Aliquyam erat sed diam voluptua.</li>
                                </ul>
                            </div>
                            <div class="career-content">
                                <h4>Qualifications:</h4>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        
                                <ul class="list">
                                    <li>Stet clita kasd gubergren no sea takimata sanctus.</li>
                                    <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</li>
                                    <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor.</li>
                                    <li>Aliquyam erat sed diam voluptua.</li>
                                </ul>
                            </div>
                            <div class="career-content">
                                <h4>Experience Requirements:</h4>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        
                                <ul class="list">
                                    <li>Stet clita kasd gubergren no sea takimata sanctus.</li>
                                    <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.</li>
                                    <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor.</li>
                                </ul>
                            </div>
                            <div class="career-content">
                                <h4>Benefits</h4>
                                <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        
                                <ul class="list">
                                    <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor</li>
                                    <li>Stet clita kasd gubergren no sea takimata sanctus</li>
                                    <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
                                    <li>Aliquyam erat sed diam voluptua</li>
                                    <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor</li>
                                    <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
                                </ul>
                            </div>
                            <div class="career-details-image">
                                <img src="../../assets/images/career-details.jpg" alt="image">

                                <a 
                                    href="javascript:void(0)" 
                                    v-on:click="isPopupMethod(isPopup)" 
                                    class="video-btn popup-youtube"
                                >
                                    <i class="ri-play-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12">
                        <div class="career-details-info">
                            <h3>Job Overview</h3>

                            <ul class="list">
                                <li>
                                    <span>Location:</span> United Kingdom
                                </li>
                                <li>
                                    <span>Job Title:</span> Project Manager
                                </li>
                                <li>
                                    <span>Hours:</span> 50h / Week
                                </li>
                                <li>
                                    <span>Rate:</span> $15 - $25 / Hour
                                </li>
                                <li>
                                    <span>Salary:</span> $45k - $55k
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CareerDetails',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>