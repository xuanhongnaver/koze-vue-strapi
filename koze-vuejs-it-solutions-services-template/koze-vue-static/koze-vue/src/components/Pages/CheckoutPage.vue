<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Checkout" className="page-banner-area bg-2" />
        <Checkout />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Checkout from '../Checkout/Checkout'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CheckoutPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Checkout,
        Overview,
        Footer,
    }
}
</script>