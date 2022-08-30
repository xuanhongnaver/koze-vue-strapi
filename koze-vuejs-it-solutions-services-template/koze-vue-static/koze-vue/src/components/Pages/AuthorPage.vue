<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Author" className="page-banner-area bg-3" />
        <Blog />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Blog from '../Author/Blog'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'AuthorPage',
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