<template>
    <div class="gallery-area pt-100 pb-75">
        <div class="container">
            <lightgallery
                :settings="{ speed: 500, plugins: plugins }"
                :onInit="onInit"
                :onBeforeSlide="onBeforeSlide"
                class="row"
            >
                <a
                    v-for="item in items"
                    :key="item.id"
                    :data-lg-size="item.size"
                    className="gallery-item"
                    :data-src="item.src"
                    :class="item.class"
                >
                    <div class="single-gallery-item">
                        <img className="img-responsive" :src="item.thumb" />
                    </div>
                </a>
            </lightgallery>
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery= null;

export default {
    name: 'GalleryTwoColumn',
    components: {
        Lightgallery,
    },
    watch: {
        items() {
            this.$nextTick(() => {
                lightGallery.refresh();
            });
        },
    },
    data: () => ({
        plugins: [lgZoom],
        items: [
            {
                id: '1',
                class: 'col-lg-6 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-1.jpg'),
                thumb: require('../../assets/images/gallery/gallery-1.jpg'),
            },
            {
                id: '2',
                class: 'col-lg-6 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-2.jpg'),
                thumb: require('../../assets/images/gallery/gallery-2.jpg'),
            },
            {
                id: '3',
                class: 'col-lg-4 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-3.jpg'),
                thumb: require('../../assets/images/gallery/gallery-3.jpg'),
            },
            {
                id: '4',
                class: 'col-lg-4 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-4.jpg'),
                thumb: require('../../assets/images/gallery/gallery-4.jpg'),
            },
            {
                id: '5',
                class: 'col-lg-4 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-5.jpg'),
                thumb: require('../../assets/images/gallery/gallery-5.jpg'),
            },
            {
                id: '6',
                class: 'col-lg-4 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-6.jpg'),
                thumb: require('../../assets/images/gallery/gallery-6.jpg'),
            },
            {
                id: '7',
                class: 'col-lg-4 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-7.jpg'),
                thumb: require('../../assets/images/gallery/gallery-7.jpg'),
            },
            {
                id: '8',
                class: 'col-lg-4 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-8.jpg'),
                thumb: require('../../assets/images/gallery/gallery-8.jpg'),
            },
            {
                id: '9',
                class: 'col-lg-6 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-9.jpg'),
                thumb: require('../../assets/images/gallery/gallery-9.jpg'),
            },
            {
                id: '10',
                class: 'col-lg-6 col-md-6 col-sm-6',
                src: require('../../assets/images/gallery/gallery-10.jpg'),
                thumb: require('../../assets/images/gallery/gallery-10.jpg'),
            },
        ],
    }),
    methods: {
        onInit: (detail) => {
            lightGallery = detail.instance;
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
};
</script>

<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>
