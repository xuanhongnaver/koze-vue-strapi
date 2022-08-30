<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Projects Details" className="page-banner-area bg-3" />
        <ProjectsDetails />
        <Talk />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import ProjectsDetails from '../ProjectsDetails/ProjectsDetails'
import Talk from '../Common/Talk'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ProjectsDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        ProjectsDetails,
        Talk,
        Overview,
        Footer
    }
}
</script>