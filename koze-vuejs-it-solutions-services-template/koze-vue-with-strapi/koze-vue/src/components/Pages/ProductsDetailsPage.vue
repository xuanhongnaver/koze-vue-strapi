<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Products Details" className="page-banner-area bg-5" />
        <ProductsDetails />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import ProductsDetails from '../ProductsDetails/ProductsDetails'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ProductsDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        ProductsDetails,
        Overview,
        Footer,
    }
}
</script>