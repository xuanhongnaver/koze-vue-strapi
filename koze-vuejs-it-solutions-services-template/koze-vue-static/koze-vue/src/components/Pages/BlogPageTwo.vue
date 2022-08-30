<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Blog Style Two" className="page-banner-area" />
        <Blog />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Blog from '../BlogTwo/Blog'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogPageTwo',
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