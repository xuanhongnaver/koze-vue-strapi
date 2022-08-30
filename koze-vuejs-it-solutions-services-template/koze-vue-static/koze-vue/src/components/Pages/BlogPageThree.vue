<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Blog Right Sidebar" className="page-banner-area bg-2" />
        <Blog />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Blog from '../BlogThree/Blog'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogPageThree',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Blog,
        Overview,
        Footer,
    }
}
</script>