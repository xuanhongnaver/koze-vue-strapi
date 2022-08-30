<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Wishlist" className="page-banner-area" />
        <Wishlist />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Wishlist from '../Wishlist/Wishlist'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'WishlistPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Wishlist,
        Overview,
        Footer,
    }
}
</script>