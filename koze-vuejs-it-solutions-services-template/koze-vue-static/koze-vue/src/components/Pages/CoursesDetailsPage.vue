<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Courses Details" className="page-banner-area bg-3" />
        <CoursesDetails />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import CoursesDetails from '../CoursesDetails/CoursesDetails'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CoursesDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        CoursesDetails,
        Overview,
        Footer,
    }
}
</script>