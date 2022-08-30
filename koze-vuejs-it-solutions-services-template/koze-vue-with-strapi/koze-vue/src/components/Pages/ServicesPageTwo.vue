<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Services Style Two" className="page-banner-area bg-3" />
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
import Services from '../ServicesTwo/Services'
import Talk from '../Common/Talk'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ServicesPageTwo',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Services,
        Talk,
        Overview,
        Footer,
    }
}
</script>