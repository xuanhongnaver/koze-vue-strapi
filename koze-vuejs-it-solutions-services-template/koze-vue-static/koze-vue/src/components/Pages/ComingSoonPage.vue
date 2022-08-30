<template>
    <div class="coming-soon-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="coming-soon-content">
                        <router-link to="/" class="logo">
                            <img src="../../assets/images/black-logo.svg" alt="Oleev">
                        </router-link>
                        <h2>We Are Launching Soon</h2>
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
                        <form class="newsletter-form" data-bs-toggle="validator">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter your email" name="EMAIL">
                            </div>
                            <button type="submit" class="default-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComingSoonPage',
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