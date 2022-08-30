<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Services Details" className="page-banner-area bg-4" />
        <ServicesDetails />
        <Talk />
        <Services />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import ServicesDetails from '../ServicesDetails/ServicesDetails'
import Talk from '../Common/Talk'
import Services from '../ServicesDetails/Services'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ServicesDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        ServicesDetails,
        Talk,
        Services,
        Overview,
        Footer,
    }
}
</script>