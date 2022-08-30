<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Projects" className="page-banner-area bg-3" />
        <Projects />
        <Talk />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Projects from '../Projects/Projects'
import Talk from '../Common/Talk'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ProjectsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Projects,
        Talk,
        Overview,
        Footer
    }
}
</script>