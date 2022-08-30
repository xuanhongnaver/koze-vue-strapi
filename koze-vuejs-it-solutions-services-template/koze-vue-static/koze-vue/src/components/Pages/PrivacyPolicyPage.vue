<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Privacy Policy" className="page-banner-area bg-5" />
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
    name: 'PrivacyPolicyPage',
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