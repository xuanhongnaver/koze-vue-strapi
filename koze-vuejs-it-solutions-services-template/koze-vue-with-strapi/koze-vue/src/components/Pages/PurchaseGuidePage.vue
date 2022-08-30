<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Purchase Guide" className="page-banner-area bg-2" />
        <PurchaseGuide />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import PurchaseGuide from '../Purchase/PurchaseGuide'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'PurchaseGuidePage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        PurchaseGuide,
        Overview,
        Footer,
    }
}
</script>