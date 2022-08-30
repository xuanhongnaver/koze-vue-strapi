<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Profile Authentication" className="page-banner-area bg-4" />
        <Authentication />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Authentication from '../Authentication/Authentication'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'AuthenticationPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Authentication,
        Overview,
        Footer,
    }
}
</script>