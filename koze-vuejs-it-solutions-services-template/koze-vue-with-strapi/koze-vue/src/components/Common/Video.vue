<template>
    <div
        v-if="video !== null"
    >
        <div class="video-area-box">
            <div class="container">
                <div 
                    class="video-view-content" 
                    data-aos="fade-up" 
                    data-aos-delay="80" 
                    data-aos-duration="800" 
                    data-aos-once="true"
                >
                    <div class="video-image">
                        <img :src="video.image.data.attributes.url" alt="image">
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
                        <iframe :src="video.videoLink"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Video',
    data (){
        return {
            isPopup: false,
            video: null
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/videohomeone?populate=*')
        const { data: {attributes} } = response.data
        this.video = attributes
    },
}
</script>