<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Blog Details" className="page-banner-area bg-2" />
        <BlogDetails />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import BlogDetails from '../BlogDetailsOne/BlogDetails'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogDetailsPageOne',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        BlogDetails,
        Overview,
        Footer,
    }
}
</script>