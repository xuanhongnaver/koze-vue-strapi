<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Terms of Service" className="page-banner-area bg-3" />
        <TermsService />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import TermsService from '../TermsService/TermsService'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'TermsServicePage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        TermsService,
        Overview,
        Footer,
    }
}
</script>