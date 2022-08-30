<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Courses Grid" className="page-banner-area bg-5" />
        <Courses />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Courses from '../Courses/Courses'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CoursesGridPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Courses,
        Overview,
        Footer,
    }
}
</script>