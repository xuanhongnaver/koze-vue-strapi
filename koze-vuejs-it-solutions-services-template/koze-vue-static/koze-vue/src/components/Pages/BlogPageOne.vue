<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Blog Style One" className="page-banner-area bg-4" />
        <Blog />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Blog from '../BlogOne/Blog'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogPageOne',
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