<template>
    <div>
        <div class="main-header-area">
            <div :class="['navbar-area navbar-style-two-with-color', { 'is-sticky': isSticky }]">
                <div class="main-navbar">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <router-link class="navbar-brand" to="/">
                                <img src="../../assets/images/black-logo.svg" alt="image">
                            </router-link>

                            <div
                                class="navbar-toggler"
                                @click="active = !active"
                                :aria-pressed="active ? 'true' : 'false'"
                                v-bind:class="{ active: button_active_state }"
                                v-on:click="button_active_state = !button_active_state"
                            >
                                <i class="ri-menu-line"></i>
                                <i class="ri-close-line"></i>
                            </div>

                            <div class="collapse navbar-collapse" :class="{ toggler: active }">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Home 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/" class="nav-link">
                                                    Home Demo - 1
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/home-two" class="nav-link">
                                                    Home Demo - 2
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/home-three" class="nav-link">
                                                    Home Demo - 3
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            About 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/about-style-1" class="nav-link">
                                                    About Style One
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/about-style-2" class="nav-link">
                                                    About Style Two
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/about-style-3" class="nav-link">
                                                    About Style Three
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/gallery" class="nav-link">
                                                    Gallery
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/testimonials" class="nav-link">
                                                    Testimonials
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Services 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/services-style-1" class="nav-link">
                                                    Services Style One
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/services-style-2" class="nav-link">
                                                    Services Style Two
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/services-details" class="nav-link">
                                                    Services Details
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Pages 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/pricing" class="nav-link">
                                                    Pricing
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/team" class="nav-link">
                                                    Team
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/faq" class="nav-link">
                                                    FAQ
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    Events
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <router-link to="/events" class="nav-link">
                                                            Events
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/events-details" class="nav-link">
                                                            Events Details
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    Career
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <router-link to="/career" class="nav-link">
                                                            Career
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/career-details" class="nav-link">
                                                            Career Details
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    Courses
                                                    <i class="ri-arrow-right-s-line"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <router-link to="/courses" class="nav-link">
                                                            Courses Grid
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/courses-right-sidebar" class="nav-link">
                                                            Courses Right Sidebar
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/courses-details" class="nav-link">
                                                            Courses Details
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/profile-authentication" class="nav-link">
                                                    Profile Authentication
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/membership-levels" class="nav-link">
                                                    Membership Levels
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/purchase-guide" class="nav-link">
                                                    Purchase Guide
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/terms-of-service" class="nav-link">
                                                    Terms of Service
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/privacy-policy" class="nav-link">
                                                    Privacy Policy
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/error" class="nav-link">
                                                    404 Error
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/coming-soon" class="nav-link">
                                                    Coming Soon
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Projects 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/projects" class="nav-link">
                                                    Projects
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/projects-details" class="nav-link">
                                                    Projects Details
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Shop 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/products" class="nav-link">
                                                    Products
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/cart" class="nav-link">
                                                    Cart
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/wishlist" class="nav-link">
                                                    Wishlist
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/checkout" class="nav-link">
                                                    Checkout
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/profile-authentication" class="nav-link">
                                                    My Account
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/products-details" class="nav-link">
                                                    Products Details
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Blog 
                                            <i class="ri-arrow-down-s-line"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <router-link to="/blog-style-1" class="nav-link">
                                                    Blog Style One
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/blog-style-2" class="nav-link">
                                                    Blog Style Two
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/blog-right-sidebar" class="nav-link">
                                                    Blog Right Sidebar
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/author" class="nav-link">
                                                    Author
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/categories" class="nav-link">
                                                    Categories
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/tags" class="nav-link">
                                                    Tags
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link to="/search-page" class="nav-link">
                                                    Search Page
                                                </router-link>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    Single Post 
                                                    <i class="ri-arrow-down-s-line"></i>
                                                </a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <router-link to="/single-blog-1" class="nav-link">
                                                            Default
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/single-blog-2" class="nav-link">
                                                            With Video
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link to="/single-blog-3" class="nav-link">
                                                            With Image Slider
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/contact" class="nav-link">
                                            Contact
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
                                    <div class="cart-btn">
                                        <router-link to="/cart">
                                            <i class="ri-shopping-cart-line"></i>
                                            <span>{{ shoppingCart.length }}</span>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="option-item">
                                    <div
                                        @click="search = !search"
                                        :aria-pressed="search ? 'true' : 'false'"
                                        v-bind:class="{ search: button_search_state }"
                                        v-on:click="button_search_state = !button_search_state"
                                    >
                                        <i class="search-btn ri-search-line"></i>
                                        <i class="close-btn ri-close-line"></i>
                                    </div>
                                    <div 
                                        class="search-overlay" 
                                        :class="{ show: search }"
                                    >
                                        <div class='search-box'>
                                            <form class="search-form">
                                                <input class="search-input" placeholder="Search..." type="text">

                                                <button class="search-button" type="submit">
                                                    <i class="ri-search-line"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="option-item">
                                    <div 
                                        class="side-menu-btn"
                                        v-on:click="isSideMenuMethod(isSideMenu)"
                                    >
                                        <i class="ri-bar-chart-horizontal-line"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div 
            class="sidebarModal modal right"
            v-if="isSideMenu"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <button 
                        type="button" 
                        class="close" 
                        v-on:click="isSideMenuMethod(isSideMenu)"
                    >
                        <i class="ri-close-line"></i>
                    </button>

                    <div class="modal-body">
                        <router-link to="/">
                            <img src="../../assets/images/black-logo.svg" alt="logo">
                        </router-link>
                        <div class="sidebar-content">
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <div class="sidebar-btn">
                                <router-link to="/contact" class="default-btn">Let’s Talk</router-link>
                            </div>
                        </div>
                        <div class="sidebar-contact-info">
                            <h3>Contact Information</h3>

                            <ul class="info-list">
                                <li><i class="ri-phone-fill"></i> <a href="tel:9901234567">+990-123-4567</a></li>
                                
                                <li><i class="ri-mail-line"></i> <a href="mailto:koze@gmail.com">koze@gmail.com</a></li>

                                <li><i class="ri-map-pin-line"></i> 413 North Las Vegas, NV 89032</li>
                            </ul>
                        </div>
                        <ul class="sidebar-social-list">
                            <li><a href="https://facebook.com/" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                            <li><a href="https://linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                            <li><a href="https://instagram.com/" target="_blank"><i class="ri-instagram-fill"></i></a></li>
                        </ul>
                        <div class="contact-form">
                            <h3>Ready to Get Started?</h3>

                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" class="form-control" placeholder="Your name">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Your email address">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" class="form-control" placeholder="Your phone number">
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
    </div>
</template>

<script>
export default {
    name: "NavbarStyleTwo",
    data() {
        return {
            isSticky: false,
            search: false,
            button_search_state: false,
            active: false,
            button_active_state: false,
            isSideMenu: false,
        };
    },
    mounted() {
        const that = this;
        window.addEventListener("scroll", () => {
            let scrollPos = window.scrollY;
            if (scrollPos >= 100) {
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        });
    },
    methods: {
        isSideMenuMethod(isSideMenu){
            return this.isSideMenu = !isSideMenu
        },
    },
    computed: {
        shoppingCart() {
        return this.$store.state.cart;
        },
    },
};
</script>
