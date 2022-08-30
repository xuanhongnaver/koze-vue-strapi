<template>
    <div class="events-area pt-100 pb-100">
        <div class="container">
            <div class="koze-grid-sorting row align-items-center">
                <div class="col-lg-6 col-md-6 result-count">
                    <p>We found <span class="count">10</span> products available for you</p>
                </div>

                <div class="col-lg-6 col-md-6 ordering">
                    <div class="select-box">
                        <label>Event Type:</label>
                        <select>
                            <option>All</option>
                            <option>Happening</option>
                            <option>Upcoming</option>
                            <option>Expired</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-1.jpg" alt="image">
                            </router-link>
                            <span class="date">Wed, 20 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    Global Conference on Business Management
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Vancover, Canada</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="60" data-aos-duration="600" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-2.jpg" alt="image">
                            </router-link>
                            <span class="date">Tue, 19 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    International Conference on Teacher Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Sydney, Australia</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="70" data-aos-duration="700" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-3.jpg" alt="image">
                            </router-link>
                            <span class="date">Mon, 18 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    International Conference on Special Needs Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Istanbul, Turkey</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-4.jpg" alt="image">
                            </router-link>
                            <span class="date">Sun, 17 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    International Conference on Literacy Teaching
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Athens, Greece</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-5.jpg" alt="image">
                            </router-link>
                            <span class="date">Sat, 16 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    International Conference on Educational Administration
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Rome, Italy</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="20" data-aos-duration="200" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-6.jpg" alt="image">
                            </router-link>
                            <span class="date">Fri, 15 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    International Conference on Education and Pedagogy
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Athens, Greece</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-7.jpg" alt="image">
                            </router-link>
                            <span class="date">Thu, 14 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    Research Conference Aims and Objectives
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Tokyo, Japan</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-8.jpg" alt="image">
                            </router-link>
                            <span class="date">Wed, 13 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    Conference on Gender Discrimination in Education
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Oslo, Norway</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-events-box" data-aos="fade-up" data-aos-delay="30" data-aos-duration="300" data-aos-once="true">
                        <div class="image">
                            <router-link to="/events-details">
                                <img src="../../assets/images/events/events-9.jpg" alt="image">
                            </router-link>
                            <span class="date">Tue, 12 May 2022</span>
                        </div>

                        <div class="content">
                            <h3>
                                <router-link to="/events-details">
                                    Quality and Improvement in Education Conference
                                </router-link>
                            </h3>
                            <span class="location"><i class="ri-map-pin-line"></i>Tokyo, Japan</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/events" class="prev page-numbers"><i class="ri-arrow-left-s-line"></i></router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/events" class="page-numbers">2</router-link>
                        <router-link to="/events" class="page-numbers">3</router-link>
                        <router-link to="/events" class="next page-numbers"><i class="ri-arrow-right-s-line"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events'
}
</script>