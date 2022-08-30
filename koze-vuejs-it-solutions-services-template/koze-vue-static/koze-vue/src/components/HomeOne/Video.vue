<template>
    <div>
        <div class="video-area">
            <div class="container">
                <div class="video-view-content" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                    <div class="video-image">
                        <img src="../../assets/images/video/video.jpg" alt="image">
                    </div>

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
    name: 'Video',
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