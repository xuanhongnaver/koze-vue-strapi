<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Features />
        <About />
        <Services />
        <ChooseUs />
        <Video />
        <Testimonials />
        <Talk />
        <Projects />
        <Partner />
        <Team />
        <Overview />
        <Blog />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import NavbarStyleTwo from '../Layouts/NavbarStyleTwo'
import MainBanner from '../HomeThree/MainBanner'
import Features from '../HomeThree/Features'
import About from '../HomeThree/About'
import Services from '../HomeThree/Services'
import ChooseUs from '../HomeThree/ChooseUs'
import Video from '../Common/Video'
import Testimonials from '../HomeThree/Testimonials'
import Talk from '../HomeThree/Talk'
import Projects from '../HomeThree/Projects'
import Partner from '../Common/Partner'
import Team from '../HomeThree/Team'
import Overview from '../Common/Overview'
import Blog from '../Common/Blog'
import Footer from '../Layouts/Footer'

export default {
    name: 'HomePageThree',
    components: {
        NavbarStyleTwo,
        MainBanner,
        Features,
        About,
        Services,
        ChooseUs,
        Video,
        Testimonials,
        Talk,
        Projects,
        Partner,
        Team,
        Overview,
        Blog,
        Footer,
    }
}
</script>