<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Privacy Policy" className="page-banner-area bg-5" />
        <PrivacyPolicy />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'PrivacyPolicyPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        PrivacyPolicy,
        Overview,
        Footer,
    }
}
</script>