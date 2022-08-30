<template>
    <div class="blog-area pt-100 pb-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog-1">
                                <img src="../../assets/images/blog/blog-1.jpg" alt="image">
                            </router-link>

                            <div class="date">9th July, 2022</div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/single-blog-1">
                                    How Technology Dominate In The new World In 2022
                                </router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog-1">
                                <img src="../../assets/images/blog/blog-2.jpg" alt="image">
                            </router-link>

                            <div class="date">9th July, 2022</div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/single-blog-1">
                                    Top 10 Most Famous Technology Trend In 2022
                                </router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog-1">
                                <img src="../../assets/images/blog/blog-3.jpg" alt="image">
                            </router-link>

                            <div class="date">9th July, 2022</div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/single-blog-1">
                                    Open Source Job Report Show More Openings Fewer
                                </router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog-1">
                                <img src="../../assets/images/blog/blog-4.jpg" alt="image">
                            </router-link>

                            <div class="date">9th July, 2022</div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/single-blog-1">
                                    Tech Products That Makes Its Easier To Stay At Home
                                </router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog-1">
                                <img src="../../assets/images/blog/blog-5.jpg" alt="image">
                            </router-link>

                            <div class="date">9th July, 2022</div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/single-blog-1">
                                    Necessity May Give Us Your Best Virtual Court System
                                </router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-card">
                        <div class="blog-image">
                            <router-link to="/single-blog-1">
                                <img src="../../assets/images/blog/blog-6.jpg" alt="image">
                            </router-link>

                            <div class="date">9th July, 2022</div>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <router-link to="/single-blog-1">
                                    How Technology Helps In The Education System In The World
                                </router-link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                            <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/tags" class="prev page-numbers">
                            <i class="ri-arrow-left-s-line"></i>
                        </router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/tags" class="page-numbers">2</router-link>
                        <router-link to="/tags" class="page-numbers">3</router-link>
                        <router-link to="/tags" class="next page-numbers">
                            <i class="ri-arrow-right-s-line"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>