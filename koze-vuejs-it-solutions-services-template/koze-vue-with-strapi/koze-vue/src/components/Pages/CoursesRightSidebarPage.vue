<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Courses Right Sidebar" className="page-banner-area bg-3" />
        <Courses />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Courses from '../CoursesRightSidebar/Courses'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CoursesRightSidebarPage',
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