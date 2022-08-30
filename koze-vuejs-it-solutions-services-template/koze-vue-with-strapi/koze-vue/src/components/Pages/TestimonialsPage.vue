<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Testimonials" className="page-banner-area bg-5" />
        <Testimonials />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Layouts/Footer'

export default {
    name: 'TestimonialsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Testimonials,
        Footer,
    }
}
</script>