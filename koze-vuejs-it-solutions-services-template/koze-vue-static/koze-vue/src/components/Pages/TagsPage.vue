<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Tags" className="page-banner-area bg-5" />
        <Blog />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Blog from '../Tags/Blog'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'TagsPage',
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