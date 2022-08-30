<template>
    <div class="blog-area pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span>ARTICLE</span>
                <h2>Read Our Blog To Get All Recent Tech <b>News</b></h2>
            </div>

            <div class="blog-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings' 
                    :wrap-around="true"
                    :breakpoints='breakpoints'
                    v-if="blogs !== []"
                >
                    <Slide 
                        v-for="blog in blogs" 
                        :key="blog.id"
                    >
                        <div class="blog-card">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="blog-image">
                                        <router-link :to="'/single-blog-1/' + blog.attributes.slug">
                                            <img :src="blog.attributes.image.data.attributes.url" alt="image">
                                        </router-link>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="blog-content">
                                        <div class="date">{{blog.attributes.date}}</div>
                                        <h3>
                                            <router-link :to="'/single-blog-1/' + blog.attributes.slug">
                                                {{blog.attributes.title}}
                                            </router-link>
                                        </h3>
                                        <p>{{blog.attributes.desc}}</p>
                                        <router-link 
                                            :to="'/single-blog-1/' + blog.attributes.slug" 
                                            class="blog-btn"
                                        >
                                            {{blog.attributes.btnText}}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Blog',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        blogs: [],
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'left',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
            1200: {
                itemsToShow: 2,
                snapAlign: 'left',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/blogs?populate=*')
        this.blogs = response.data.data
    },
})
</script>