<template>
    <div class="events-details-area pb-100">
        <div class="container-fluid">
            <div class="events-details-image">
                <img src="../../assets/images/events-details.jpg" alt="image">

                <div id="timer" class="flex-wrap d-flex justify-content-center">
                    <div 
                        id="days" 
                        class="align-items-center flex-column d-flex justify-content-center"
                    >
                        <h3>{{days}}</h3>
                        <span>Days</span>
                    </div>
                    <div 
                        id="hours" 
                        class="align-items-center flex-column d-flex justify-content-center"
                    >
                        <h3>{{hours}}</h3>
                        <span>Hours</span>
                    </div>
                    <div 
                        id="minutes" 
                        class="align-items-center flex-column d-flex justify-content-center"
                    >
                        <h3>{{minutes}}</h3>
                        <span>Minutes</span>
                    </div>
                    <div 
                        id="seconds" 
                        class="align-items-center flex-column d-flex justify-content-center"
                    >
                        <h3>{{seconds}}</h3>
                        <span>Seconds</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="events-details-header">
                        <ul class="events-list">
                            <li><i class="ri-calendar-line"></i>Wed, 20 May 2022</li>
                            <li><i class="ri-map-pin-line"></i>Victoria Road, New York, USA</li>
                            <li><i class="ri-time-line"></i>12.00PM</li>
                        </ul>
                    </div>

                    <div class="events-details-location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102948.35266648312!2d-115.15540073403864!3d36.26047650441708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c2b00ad43d33%3A0x22c7fa13f5acf526!2sNorth%20Las%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1639919075838!5m2!1sen!2sbd"></iframe>
                    </div>

                    <div class="events-details-desc">
                        <h3>About The Event</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>

                        <h3>Where The Event?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>
                        
                        <h3>Who This Event Is For?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="events-details-info">
                        <ul class="info">
                            <li class="price">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>Cost</span>
                                    $149
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>Total Slot</span>
                                    1500
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>Booked Slot</span>
                                    350
                                </div>
                            </li>
                            <li>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>Pay With</span>
                                    <div class="payment-method">
                                        <img src="../../assets/images/payment/img1.png" class="shadow" alt="image">
                                        <img src="../../assets/images/payment/img2.png" class="shadow" alt="image">
                                        <img src="../../assets/images/payment/img3.png" class="shadow" alt="image">
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div class="events-btn-box">
                            <router-link to="/contact" class="default-btn">Book Now</router-link>
                            <p>You must <router-link to="/my-account">login</router-link> before register event.</p>
                        </div>

                        <div class="events-share">
                            <div class="share-info">
                                <span>Share This Course</span>

                                <ul class="social-link">
                                    <li><a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                                    <li><a href="https://instagram.com/" target="_blank"><i class="ri-instagram-fill"></i></a></li>
                                    <li><a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                                </ul>
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
    name: 'EventsDetails',
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    created() { // Turn data into viewable values
        setInterval(() => {
            this.commingSoonTime();
        }, 1000);
    },
    methods: {
        commingSoonTime() {
            let endTime = new Date("December 5, 2025 17:00:00 PDT");			
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400); 
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>