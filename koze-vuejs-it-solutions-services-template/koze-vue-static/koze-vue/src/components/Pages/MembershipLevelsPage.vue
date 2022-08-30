<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Membership Levels" className="page-banner-area bg-5" />
        <Membership />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Membership from '../Membership/Membership'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'MembershipLevelsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Membership,
        Overview,
        Footer,
    }
}
</script>