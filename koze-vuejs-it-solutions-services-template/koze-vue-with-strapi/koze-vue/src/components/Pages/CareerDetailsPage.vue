<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Career Details" className="page-banner-area bg-5" />
        <CareerDetails />
        <ApplyForm />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import CareerDetails from '../CareerDetails/CareerDetails'
import ApplyForm from '../CareerDetails/ApplyForm'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CareerDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        CareerDetails,
        ApplyForm,
        Overview,
        Footer,
    }
}
</script>