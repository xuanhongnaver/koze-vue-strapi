<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="About Style Two" className="page-banner-area bg-2" />
        <About />
        <ChooseUs />
        <Video />
        <Skill />
        <Pricing />
        <Testimonials />
        <Talk />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import About from '../AboutTwo/About'
import ChooseUs from '../AboutTwo/ChooseUs'
import Video from '../Common/Video'
import Skill from '../AboutTwo/Skill'
import Pricing from '../Common/Pricing'
import Testimonials from '../AboutTwo/Testimonials'
import Talk from '../Common/Talk'
import Footer from '../Layouts/Footer'

export default {
    name: 'AboutPageTwo',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        About,
        ChooseUs,
        Video,
        Skill,
        Pricing,
        Testimonials,
        Talk,
        Footer,
    }
}
</script>