<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Contact" className="page-banner-area bg-5" />
        <Overview />
        <Talk />
        <Map />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Overview from '../Common/Overview'
import Talk from '../Common/Talk'
import Map from '../Contact/Map'
import Footer from '../Layouts/Footer'

export default {
    name: 'ContactPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Overview,
        Talk,
        Map,
        Footer,
    }
}
</script>