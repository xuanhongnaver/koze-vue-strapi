<template>
    <div class="courses-area ptb-100">
        <div class="container">
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
                <div class="col-lg-4 col-md-6">
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
                                <router-link to="/courses-details">
                                    Introduction to Quantitative Methods
                                </router-link>
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

                <div class="col-lg-4 col-md-6">
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
                                <router-link to="/courses-details">
                                    Java Programming Masterclass for Software Developers
                                </router-link>
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

                <div class="col-lg-4 col-md-6">
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
                                <router-link to="/courses-details">
                                    Deep Learning A-Z™: Hands-On Artificial Neural Networks
                                </router-link>
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

                <div class="col-lg-4 col-md-6">
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
                                <router-link to="/courses-details">
                                    Python for Finance: Investment Fundamentals & Data Analytics
                                </router-link>
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

                <div class="col-lg-4 col-md-6">
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
                                <router-link to="/courses-details">
                                    Machine Learning A-Z™: Hands-On Python & R In Data Science
                                </router-link>
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

                <div class="col-lg-4 col-md-6">
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
                                <router-link to="/courses-details">
                                    R Programming A-Z™: R For Data Science With Real Exercises!
                                </router-link>
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
                        <router-link to="/courses" class="prev page-numbers"><i class="ri-arrow-left-s-line"></i></router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/courses" class="page-numbers">2</router-link>
                        <router-link to="/courses" class="page-numbers">3</router-link>
                        <router-link to="/courses" class="next page-numbers"><i class="ri-arrow-right-s-line"></i></router-link>
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