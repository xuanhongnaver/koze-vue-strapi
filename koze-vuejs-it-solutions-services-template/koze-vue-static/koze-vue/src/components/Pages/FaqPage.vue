<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="FAQ" className="page-banner-area bg-4" />
        <Faq />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Faq from '../Faq/Faq'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'FaqPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Faq,
        Overview,
        Footer,
    }
}
</script>