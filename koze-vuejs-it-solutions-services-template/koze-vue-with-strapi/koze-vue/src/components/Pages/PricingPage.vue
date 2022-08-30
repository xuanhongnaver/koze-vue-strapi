<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Pricing" className="page-banner-area" />
        <Pricing class="margin-zero" />
        <Talk />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Pricing from '../Common/Pricing'
import Talk from '../Common/Talk'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'PricingPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Pricing,
        Talk,
        Overview,
        Footer,
    }
}
</script>