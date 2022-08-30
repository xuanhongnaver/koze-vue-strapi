<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="About Style Three" className="page-banner-area bg-3" />
        <About />
        <ChooseUs />
        <Video />
        <Feedback />
        <Pricing />
        <Team />
        <Talk />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import About from '../AboutThree/About'
import ChooseUs from '../AboutThree/ChooseUs'
import Video from '../Common/Video'
import Feedback from '../AboutThree/Feedback'
import Pricing from '../Common/Pricing'
import Team from '../AboutThree/Team'
import Talk from '../Common/Talk'
import Footer from '../Layouts/Footer'

export default {
    name: 'AboutPageThree',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        About,
        ChooseUs,
        Video,
        Feedback,
        Pricing,
        Team,
        Talk,
        Footer,
    }
}
</script>