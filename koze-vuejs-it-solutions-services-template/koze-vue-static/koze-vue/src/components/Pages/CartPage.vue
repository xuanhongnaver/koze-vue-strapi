<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Cart" className="page-banner-area bg-5" />
        <Cart />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Cart from '../Cart/Cart'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CartPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Cart,
        Overview,
        Footer,
    }
}
</script>