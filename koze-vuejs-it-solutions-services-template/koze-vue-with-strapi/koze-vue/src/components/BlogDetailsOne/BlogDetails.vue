<template>
    <div class="blog-details-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>

                        <div class="article-content">
                            <ul class="entry-list">
                                <li>By <a href="#">Admin</a></li>
                                Date
                                <li>{{details[0].attributes.date}}</li>
                            </ul>
                            <h3>{{details[0].attributes.title}}</h3>
                            <p>{{details[0].attributes.desc}}</p>
                            <span v-html="details[0].attributes.longDesc"></span>
                        </div>

                        <div class="article-share">
                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6">
                                    <div class="share-content">
                                        <h4>Share The Article:</h4>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <ul class="share-social text-end">
                                        <li>
                                            <a href="https://www.facebook.com/EnvyTheme" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/?lang=en" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank">
                                                <i class="ri-youtube-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://vimeo.com/" target="_blank">
                                                <i class="ri-vimeo-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="article-comments">
                            <h3>03 Comments:</h3>
                            
                            <div class="comments-list">
                                <img src="../../assets/images/blog-details/image-1.jpg" alt="image">
                                <h5>Daniel John, <span>2 months ago</span></h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <a href="#" class="reply-btn">Reply</a>
                            </div>
                            <div class="comments-list children">
                                <img src="../../assets/images/blog-details/image-2.jpg" alt="image">
                                <h5>Suzana Zamal, <span>2 months ago</span></h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <a href="#" class="reply-btn">Reply</a>
                            </div>
                            <div class="comments-list">
                                <img src="../../assets/images/blog-details/image-3.jpg" alt="image">
                                <h5>Victor James, <span>2 months ago</span></h5>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <a href="#" class="reply-btn">Reply</a>
                            </div>
                        </div>

                        <div class="article-leave-comment">
                            <h3>Leave a reply</h3>
                            
                            <form>
                                <div class="row justify-content-center">
                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Enter name">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email address">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Website">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" placeholder="Your message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <p class="form-cookies-consent">
                                            <input type="checkbox" id="test1">
                                            <label for="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn">Post A Comment</button>
                                    </div>
                                </div>
                            </form>
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
                                        <router-link to="/single-blog-1">How Technology Dominate In The new World In 2022</router-link>
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
                                        <router-link to="/single-blog-1">Top 10 Most Famous Technology Trend In 2022</router-link>
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
                                        <router-link to="/single-blog-1">Open Source Job Report Show More Openings Fewer</router-link>
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
    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>