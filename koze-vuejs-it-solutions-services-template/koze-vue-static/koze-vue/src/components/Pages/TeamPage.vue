<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Team" className="page-banner-area bg-5" />
        <Team />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Team from '../Team/Team'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'TeamPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Team,
        Overview,
        Footer,
    }
}
</script>