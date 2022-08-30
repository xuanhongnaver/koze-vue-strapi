<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Services Style One" className="page-banner-area bg-2" />
        <ChooseUs />
        <Services />
        <Talk />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import ChooseUs from '../ServicesOne/ChooseUs'
import Services from '../ServicesOne/Services'
import Talk from '../Common/Talk'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ServicesPageOne',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        ChooseUs,
        Services,
        Talk,
        Overview,
        Footer,
    }
}
</script>