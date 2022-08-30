<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Shop" className="page-banner-area bg-4" />
        <Products />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Products from '../Shop/Products'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'ShopPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Products,
        Overview,
        Footer,
    }
}
</script>