<template>
    <div class="courses-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="koze-grid-sorting row align-items-center">
                        <div class="col-lg-6 col-md-6 result-count">
                            <p>We found <span class="count">9</span> courses available for you</p>
                        </div>
    
                        <div class="col-lg-6 col-md-6 ordering">
                            <div class="select-box">
                                <label>Sort By:</label>
                                <select>
                                    <option>Default</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: Low To High</option>
                                    <option>Price: High To Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <router-link to="/courses-details">
                                        <img src="../../assets/images/courses/courses-1.jpg" alt="image">
                                    </router-link>
                                    <div class="price">$39</div>
                                </div>
                                <div class="courses-content">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="../../assets/images/courses/image-1.jpg" class="rounded-circle" alt="image">
                                        <span>Alex Morgan</span>
                                    </div>
                                    <h3>
                                        <router-link to="/courses-details">Introduction to Quantitative Methods</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i class='ri-book-line'></i> 8 Weeks Long
                                        </li>
                                        <li>
                                            <i class='ri-group-line'></i> Available Now
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <router-link to="/courses-details">
                                        <img src="../../assets/images/courses/courses-2.jpg" alt="image">
                                    </router-link>
                                    <div class="price">$49</div>
                                </div>
                                <div class="courses-content">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="../../assets/images/courses/image-2.jpg" class="rounded-circle" alt="image">
                                        <span>Sarah Taylor</span>
                                    </div>
                                    <h3>
                                        <router-link to="/courses-details">Java Programming Masterclass for Software Developers</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i class='ri-book-line'></i> 7 Weeks Long
                                        </li>
                                        <li>
                                            <i class='ri-group-line'></i> Available Now
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <router-link to="/courses-details">
                                        <img src="../../assets/images/courses/courses-3.jpg" alt="image">
                                    </router-link>
                                    <div class="price">$59</div>
                                </div>
                                <div class="courses-content">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="../../assets/images/courses/image-3.jpg" class="rounded-circle" alt="image">
                                        <span>David Warner</span>
                                    </div>
                                    <h3>
                                        <router-link to="/courses-details">Deep Learning A-Z™: Hands-On Artificial Neural Networks</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i class='ri-book-line'></i> 2 Weeks Long
                                        </li>
                                        <li>
                                            <i class='ri-group-line'></i> Available Now
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <router-link to="/courses-details">
                                        <img src="../../assets/images/courses/courses-4.jpg" alt="image">
                                    </router-link>
                                    <div class="price">$75</div>
                                </div>
                                <div class="courses-content">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="../../assets/images/courses/image-4.jpg" class="rounded-circle" alt="image">
                                        <span>Merv Adrian</span>
                                    </div>
                                    <h3>
                                        <router-link to="/courses-details">Python for Finance: Investment Fundamentals & Data Analytics</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i class='ri-book-line'></i> 10 Weeks Long
                                        </li>
                                        <li>
                                            <i class='ri-group-line'></i> Available Now
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <router-link to="/courses-details">
                                        <img src="../../assets/images/courses/courses-5.jpg" alt="image">
                                    </router-link>
                                    <div class="price">$87</div>
                                </div>
                                <div class="courses-content">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="../../assets/images/courses/image-5.jpg" class="rounded-circle" alt="image">
                                        <span>Elijah William</span>
                                    </div>
                                    <h3>
                                        <router-link to="/courses-details">Machine Learning A-Z™: Hands-On Python & R In Data Science</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i class='ri-book-line'></i> 3 Weeks Long
                                        </li>
                                        <li>
                                            <i class='ri-group-line'></i> Available Now
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="single-courses-box">
                                <div class="courses-image">
                                    <router-link to="/courses-details">
                                        <img src="../../assets/images/courses/courses-6.jpg" alt="image">
                                    </router-link>
                                    <div class="price">$89</div>
                                </div>
                                <div class="courses-content">
                                    <div class="course-author d-flex align-items-center">
                                        <img src="../../assets/images/courses/image-6.jpg" class="rounded-circle" alt="image">
                                        <span>Liam Oliver</span>
                                    </div>
                                    <h3>
                                        <router-link to="/courses-details">R Programming A-Z™: R For Data Science With Real Exercises!</router-link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                    <ul class="courses-box-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <i class='ri-book-line'></i> 2 Weeks Long
                                        </li>
                                        <li>
                                            <i class='ri-group-line'></i> Available Now
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-12 col-md-12">
                            <div class="pagination-area">
                                <router-link to="/courses-right-sidebar" class="prev page-numbers"><i class="ri-arrow-left-s-line"></i></router-link>
                                <span class="page-numbers current" aria-current="page">1</span>
                                <router-link to="/courses-right-sidebar" class="page-numbers">2</router-link>
                                <router-link to="/courses-right-sidebar" class="page-numbers">3</router-link>
                                <router-link to="/courses-right-sidebar" class="next page-numbers"><i class="ri-arrow-right-s-line"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="widget-area">
                        <div class="widget widget_search">
                            <form class="search-form">
                                <input type="search" class="search-field" placeholder="Search your article">
                                <button type="submit"><i class="ri-search-line"></i></button>
                            </form>
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

                        <div class="widget widget_recent_courses">
                            <h3 class="widget-title">Recent Courses</h3>

                            <div class="item">
                                <router-link to="/courses-details" class="thumb">
                                    <span class="fullimage cover bg1" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>$49.00</span>
                                    <h4 class="title usmall">
                                        <router-link to="/courses-details">
                                            The Data Science Course 2020: Complete Data Science
                                        </router-link>
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <router-link to="/courses-details" class="thumb">
                                    <span class="fullimage cover bg2" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>$59.00</span>
                                    <h4 class="title usmall">
                                        <router-link to="/courses-details">
                                            Java Programming Masterclass for Software Developers
                                        </router-link>
                                    </h4>
                                </div>
                            </div>

                            <div class="item">
                                <router-link to="/courses-details" class="thumb">
                                    <span class="fullimage cover bg3" role="img"></span>
                                </router-link>
                                <div class="info">
                                    <span>$69.00</span>
                                    <h4 class="title usmall">
                                        <router-link to="/courses-details">
                                            Deep Learning A-Z™: Hands-On Artificial Neural Networks
                                        </router-link>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div class="widget widget_tag_cloud">
                            <h3 class="widget-title">Popular Tags</h3>

                            <div class="tagcloud">
                                <router-link to="/tags">Agency</router-link>
                                <router-link to="/tags">Branding</router-link>
                                <router-link to="/tags">Marketing</router-link>
                                <router-link to="/tags">Design</router-link>
                                <router-link to="/tags">Development</router-link>
                                <router-link to="/tags">Consulting</router-link>
                                <router-link to="/tags">Startup</router-link>
                                <router-link to="/tags">Popular</router-link>
                                <router-link to="/tags">WordPress</router-link>
                                <router-link to="/tags">Financial</router-link>
                                <router-link to="/tags">Branding</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Courses'
}
</script>