<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="My Account" className="page-banner-area bg-4" />
        <MyAccount />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import MyAccount from '../MyAccount/MyAccount'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'MyAccountPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        MyAccount,
        Overview,
        Footer,
    }
}
</script>