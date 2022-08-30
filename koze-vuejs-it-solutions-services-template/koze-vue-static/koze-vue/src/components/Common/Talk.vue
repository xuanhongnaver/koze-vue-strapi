<template>
    <div class="talk-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="talk-image" data-tilt>
                        <img src="../../assets/images/talk/talk-2.png" alt="image">

                        <div class="talk-circle">
                            <img src="../../assets/images/talk/talk-circle.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="talk-content">
                        <span>LET'S TALK</span>
                        <h3>We Would Like To Hear From You Any Question</h3>
                        <p>Lorem ipsum dolor sit amet consetetur sadipscing elitre sed diam non umy eirmod tempor invidunt ut labore.</p>

                        <form id="contactFormTwo">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" placeholder="Your name">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" placeholder="Your email address">
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" cols="30" rows="6" placeholder="Write your message..."></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn">Send Message<span></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Talk'
}
</script>