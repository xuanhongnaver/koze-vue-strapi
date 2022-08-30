<template>
    <div class="blog-area pt-100 pb-100">
        <div class="container">
            <div class="section-title">
                <span>ARTICLE</span>
                <h2>Read Our Blog To Get All Recent Tech <b>News</b></h2>
            </div>

            <div class="blog-grid-sorting row align-items-center">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <form class="search-form">
                            <input type="search" class="search-field" placeholder="Search your products">
                            <button type="submit"><i class="ri-search-line"></i></button>
                        </form>
                    </div>

                    <div class="col-lg-6 col-md-6">
                        <div class="select-box">
                            <select>
                                <option>Sort By Date</option>
                                <option>Popularity</option>
                                <option>Latest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
            <div 
                class="row justify-content-center"
                v-if="blogs !== []"
            >
                <div 
                    class="col-lg-6 col-md-12"
                    v-for="blog in blogs"
                    :key="blog.id"
                >
                    <div 
                        class="blog-card" 
                        data-aos="fade-up" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
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
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/blog-style-1" class="prev page-numbers">
                            <i class="ri-arrow-left-s-line"></i>
                        </router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/blog-style-1" class="page-numbers">2</router-link>
                        <router-link to="/blog-style-1" class="page-numbers">3</router-link>
                        <router-link to="/blog-style-1" class="next page-numbers">
                            <i class="ri-arrow-right-s-line"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog-shape-1">
            <img src="../../assets/images/blog/blog-shape-1.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blog',
    data (){
        return{
            blogs: []
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/blogs?populate=*', {params: {_limit: 4}})
        this.blogs = response.data.data
    },
}
</script>