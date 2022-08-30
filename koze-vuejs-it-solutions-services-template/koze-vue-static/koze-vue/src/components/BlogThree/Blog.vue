<template>
    <div class="blog-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-card">
                                <div class="blog-image">
                                    <router-link to="/single-blog-1"><img src="../../assets/images/blog/blog-1.jpg" alt="image"></router-link>
    
                                    <div class="date">9th July, 2022</div>
                                </div>
                                <div class="blog-content">
                                    <h3>
                                        <router-link to="/single-blog-1">How Technology Dominate In The new World In 2022</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-card">
                                <div class="blog-image">
                                    <router-link to="/single-blog-1"><img src="../../assets/images/blog/blog-2.jpg" alt="image"></router-link>
    
                                    <div class="date">9th July, 2022</div>
                                </div>
                                <div class="blog-content">
                                    <h3>
                                        <router-link to="/single-blog-1">Top 10 Most Famous Technology Trend In 2022</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-card">
                                <div class="blog-image">
                                    <router-link to="/single-blog-1"><img src="../../assets/images/blog/blog-3.jpg" alt="image"></router-link>
    
                                    <div class="date">9th July, 2022</div>
                                </div>
                                <div class="blog-content">
                                    <h3>
                                        <router-link to="/single-blog-1">Open Source Job Report Show More Openings Fewer</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-card">
                                <div class="blog-image">
                                    <router-link to="/single-blog-1"><img src="../../assets/images/blog/blog-4.jpg" alt="image"></router-link>
    
                                    <div class="date">9th July, 2022</div>
                                </div>
                                <div class="blog-content">
                                    <h3>
                                        <router-link to="/single-blog-1">Tech Products That Makes Its Easier To Stay At Home</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-card">
                                <div class="blog-image">
                                    <router-link to="/single-blog-1"><img src="../../assets/images/blog/blog-5.jpg" alt="image"></router-link>
    
                                    <div class="date">9th July, 2022</div>
                                </div>
                                <div class="blog-content">
                                    <h3>
                                        <router-link to="/single-blog-1">Necessity May Give Us Your Best Virtual Court System</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-blog-card">
                                <div class="blog-image">
                                    <router-link to="/single-blog-1"><img src="../../assets/images/blog/blog-6.jpg" alt="image"></router-link>
    
                                    <div class="date">9th July, 2022</div>
                                </div>
                                <div class="blog-content">
                                    <h3>
                                        <router-link to="/single-blog-1">How Technology Helps In The Education System In The World</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eir m od tempor invidunt ut labore.</p>
                                    <router-link to="/single-blog-1" class="blog-btn">View More</router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-12 col-md-12">
                            <div class="pagination-area">
                                <router-link to="/blog-right-sidebar" class="prev page-numbers">
                                    <i class="ri-arrow-left-s-line"></i>
                                </router-link>
                                <span class="page-numbers current" aria-current="page">1</span>
                                <router-link to="/blog-right-sidebar" class="page-numbers">2</router-link>
                                <router-link to="/blog-right-sidebar" class="page-numbers">3</router-link>
                                <router-link to="/blog-right-sidebar" class="next page-numbers">
                                    <i class="ri-arrow-right-s-line"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <input type="search" class="search-field" placeholder="Search your article">
                                <button type="submit"><i class="ri-search-line"></i></button>
                            </form>
                        </div>

                        <div class="widget widget_recent_post">
                            <h3 class="widget-title">Recent Post</h3>

                            <article class="item">
                                <router-link to="/single-blog-1" class="thumb">
                                    <span class="fullimage bg1" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>09th July 2022</span>
                                    <h4 class="title usmall">
                                        <router-link to="/single-blog-1">
                                            How Technology Dominate In The new World In 2022
                                        </router-link>
                                    </h4>
                                </div>
                            </article>

                            <article class="item">
                                <router-link to="/single-blog-1" class="thumb">
                                    <span class="fullimage bg2" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>09th July 2022</span>
                                    <h4 class="title usmall">
                                        <router-link to="/single-blog-1">
                                            Top 10 Most Famous Technology Trend In 2022
                                        </router-link>
                                    </h4>
                                </div>
                            </article>

                            <article class="item">
                                <router-link to="/single-blog-1" class="thumb">
                                    <span class="fullimage bg3" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>09th July 2022</span>
                                    <h4 class="title usmall">
                                        <router-link to="/single-blog-1">
                                            Open Source Job Report Show More Openings Fewer
                                        </router-link>
                                    </h4>
                                </div>
                            </article>
                        </div>
                        
                        <div class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>

                            <ul class="list">
                                <li>
                                    <router-link to="/categories" class=" d-flex justify-content-between align-items-center">Technology <span>(11)</span></router-link>
                                </li>
                                <li>
                                    <router-link to="/categories" class=" d-flex justify-content-between align-items-center">Information <span>(09)</span></router-link>
                                </li>
                                <li>
                                    <router-link to="/categories" class=" d-flex justify-content-between align-items-center">Business <span>(29)</span></router-link>
                                </li>
                                <li>
                                    <router-link to="/categories" class=" d-flex justify-content-between align-items-center">Development <span>(31)</span></router-link>
                                </li>
                                <li>
                                    <router-link to="/categories" class=" d-flex justify-content-between align-items-center">IT Services <span>(25)</span></router-link>
                                </li>
                            </ul>
                        </div>
                    </aside>
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