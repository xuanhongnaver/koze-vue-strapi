<template>
    <div>
        <Topbar />
        <Navbar />
        <MainBanner />
        <About />
        <ChooseUs />
        <Skill />
        <Services />
        <Projects />
        <Pricing />
        <Testimonials />
        <Partner />
        <Blog />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeTwo/MainBanner'
import About from '../HomeTwo/About'
import ChooseUs from '../HomeTwo/ChooseUs'
import Skill from '../HomeTwo/Skill'
import Services from '../HomeTwo/Services'
import Projects from '../HomeTwo/Projects'
import Pricing from '../Common/Pricing'
import Testimonials from '../HomeTwo/Testimonials'
import Partner from '../Common/Partner'
import Blog from '../Common/Blog'
import Footer from '../Layouts/Footer'

export default {
    name: 'HomePageTwo',
    components: {
        Topbar,
        Navbar,
        MainBanner,
        About,
        ChooseUs,
        Skill,
        Services,
        Projects,
        Pricing,
        Testimonials,
        Partner,
        Blog,
        Footer,
    }
}
</script>