<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Events Details" className="page-banner-area bg-2" />
        <EventsDetails />
        <Team />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import EventsDetails from '../EventsDetails/EventsDetails'
import Team from '../EventsDetails/Team'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'EventsDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        EventsDetails,
        Team,
        Overview,
        Footer,
    }
}
</script>