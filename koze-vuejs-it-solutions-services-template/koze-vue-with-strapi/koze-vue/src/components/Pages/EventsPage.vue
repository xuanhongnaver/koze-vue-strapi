<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Events" className="page-banner-area bg-2" />
        <Events />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Events from '../Events/Events'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'EventsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Events,
        Overview,
        Footer,
    }
}
</script>