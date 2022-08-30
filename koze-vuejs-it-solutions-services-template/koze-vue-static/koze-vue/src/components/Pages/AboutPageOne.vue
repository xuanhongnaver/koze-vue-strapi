<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="About Style One" className="page-banner-area" />
        <About />
        <Partner />
        <AboutTwo />
        <ChooseUs />
        <Skill />
        <Pricing />
        <Talk />
        <Blog />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import About from '../AboutOne/About'
import Partner from '../Common/Partner'
import AboutTwo from '../AboutOne/AboutTwo'
import ChooseUs from '../AboutOne/ChooseUs'
import Skill from '../AboutOne/Skill'
import Pricing from '../Common/Pricing'
import Talk from '../Common/Talk'
import Blog from '../Common/Blog'
import Footer from '../Layouts/Footer'

export default {
    name: 'AboutPageOne',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        About,
        Partner,
        AboutTwo,
        ChooseUs,
        Skill,
        Pricing,
        Talk,
        Blog,
        Footer,
    }
}
</script>