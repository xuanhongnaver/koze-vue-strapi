<template>
    <div>
        <div class="courses-details-area pb-100">
            <div class="container-fluid">
                <div class="courses-details-image">
                    <img src="../../assets/images/courses-details.jpg" alt="image">

                    <a 
                        href="javascript:void(0)" 
                        v-on:click="isPopupMethod(isPopup)" 
                        class="video-btn popup-youtube"
                    >
                        <i class="ri-play-fill"></i>
                    </a>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12">
                        <div class="courses-details-desc">
                            <div class="courses overview">
                                <h1>Overview</h1>
                                <h3>Course Description</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>

                                <h3>Certification</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                
                                <h3>Who This Course Is For</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div class="courses">
                                <h1>Curriculum</h1>
                                <div class="curriculum">
                                    <h3>Python Introduction</h3>
                                    <ul>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">Python Introduction</span>
                                            <div class="courses-meta">
                                                <span class="questions">5 Questions</span>
                                                <span class="duration">01 Hour</span>
                                                <span class="status">Preview</span>
                                            </div>
                                        </a></li>
                                    </ul>
                                    <h3>Stepping into the World of Python</h3>
                                    <ul>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">NumPy Introduction</span>
                                            <div class="courses-meta">
                                                <span class="duration">15 Min</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">NumPy Getting Started</span>
                                            <div class="courses-meta">
                                                <span class="duration">30 Min</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">NumPy Creating Arrays</span>
                                            <div class="courses-meta">
                                                <span class="duration">45 Min</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">NumPy Array Indexing</span>
                                            <div class="courses-meta">
                                                <span class="questions">4 Questions</span>
                                                <span class="duration">1 Hour</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">NumPy Array Slicing</span>
                                            <div class="courses-meta">
                                                <span class="duration">1.5 Hour</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                    </ul>
                                    <h3>Python MySQL</h3>
                                    <ul>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">Python MySQL</span>
                                            <div class="courses-meta">
                                                <span class="duration">01 Hour</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">Python MySQL Create Database</span>
                                            <div class="courses-meta">
                                                <span class="questions">3 Questions</span>
                                                <span class="duration">1.1 Hour</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                        <li><a href="#" class="d-flex justify-content-between align-items-center">
                                            <span class="courses-name">Python MySQL Create Table</span>
                                            <div class="courses-meta">
                                                <span class="duration">1.5 Hour</span>
                                                <span class="status locked"><i class='ri-lock-line'></i></span>
                                            </div>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="courses instructor">
                                <h1>Instructor</h1>
                                <div class="row align-items-center">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="instructor-image" data-tilt>
                                            <img src="../../assets/images/team/team-2.png" alt="image">
                                        </div>
                                    </div>
                
                                    <div class="col-lg-8 col-md-8">
                                        <div class="instructor-content">
                                            <h3>James Anderson</h3>
                                            <span>General Director</span>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                            <ul class="social-link">
                                                <li><a href="#" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                                                <li><a href="#" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                                                <li><a href="#" target="_blank"><i class="ri-instagram-fill"></i></a></li>
                                                <li><a href="#" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="courses reviews">
                                <h1>Reviews</h1>
                                <h3>Course Rating</h3>
                                <div class="rating">
                                    <span class="ri-star-fill checked"></span>
                                    <span class="ri-star-fill checked"></span>
                                    <span class="ri-star-fill checked"></span>
                                    <span class="ri-star-fill checked"></span>
                                    <span class="ri-star-fill"></span>
                                </div>
                                <div class="rating-count">
                                    <span>4.1 average based on 4 reviews.</span>
                                </div>
                                <div class="row">
                                    <div class="side">
                                        <div>5 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-5"></div>
                                        </div>
                                    </div>
                                    <div class="side right">
                                        <div>02</div>
                                    </div>
                                    <div class="side">
                                        <div>4 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-4"></div>
                                        </div>
                                    </div>
                                    <div class="side right">
                                        <div>03</div>
                                    </div>
                                    <div class="side">
                                        <div>3 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-3"></div>
                                        </div>
                                    </div>
                                    <div class="side right">
                                        <div>04</div>
                                    </div>
                                    <div class="side">
                                        <div>2 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-2"></div>
                                        </div>
                                    </div>
                                    <div class="side right">
                                        <div>05</div>
                                    </div>
                                    <div class="side">
                                        <div>1 Star</div>
                                    </div>
                                    <div class="middle">
                                        <div class="bar-container">
                                            <div class="bar-1"></div>
                                        </div>
                                    </div>
                                    <div class="side right">
                                        <div>00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="courses review-comments">
                                <h3>3 Reviews</h3>
                                <div class="user-review">
                                    <img src="../../assets/images/courses/image-1.jpg" alt="image">
                                    
                                    <div class="review-rating">
                                        <div class="review-stars">
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                        </div>

                                        <span class="d-inline-block">James Anderson</span>
                                    </div>

                                    <span class="d-block sub-comment">Excellent</span>
                                    <p>Very well built theme, couldn't be happier it. Can't wait for future updates to see what else they add.</p>
                                </div>

                                <div class="user-review">
                                    <img src="../../assets/images/courses/image-2.jpg" alt="image">
                                    
                                    <div class="review-rating">
                                        <div class="review-stars">
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill'></i>
                                            <i class='ri-star-fill'></i>
                                        </div>

                                        <span class="d-inline-block">Sarah Taylor</span>
                                    </div>

                                    <span class="d-block sub-comment">Video Quality!</span>
                                    <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                </div>

                                <div class="user-review">
                                    <img src="../../assets/images/courses/image-3.jpg" alt="image">
                                    
                                    <div class="review-rating">
                                        <div class="review-stars">
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                            <i class='ri-star-fill checked'></i>
                                        </div>

                                        <span class="d-inline-block">David Warner</span>
                                    </div>

                                    <span class="d-block sub-comment">Perfect Coding!</span>
                                    <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12">
                        <div class="courses-details-info">
                            <div class="image">
                                <img src="../../assets/images/courses/courses-1.jpg" alt="image">

                                <a href="https://www.youtube.com/watch?v=ODfy2YIKS1M" class="video-btn popup-youtube">
                                    <i class="ri-play-fill"></i>
                                </a>
                            </div>

                            <ul class="info">
                                <li class="price">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Price</span>
                                        $49
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Instructor</span>
                                        Sarah Taylor
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Duration</span>
                                        7 weeks
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Lessons</span>
                                        25
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Enrolled</span>
                                        255 Students
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span>Access</span>
                                        Lifetime
                                    </div>
                                </li>
                            </ul>

                            <div class="courses-btn-box">
                                <router-link to="/contact" class="default-btn">Buy Now</router-link>
                            </div>

                            <div class="courses-share">
                                <div class="share-info">
                                    <span>Share This Course</span>

                                    <ul class="social-link">
                                        <li><a href="#" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                                        <li><a href="#" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                                        <li><a href="#" target="_blank"><i class="ri-instagram-fill"></i></a></li>
                                        <li><a href="#" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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
    name: 'CoursesDetails',
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