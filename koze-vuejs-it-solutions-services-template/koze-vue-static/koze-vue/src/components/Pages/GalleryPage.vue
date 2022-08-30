<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Gallery" className="page-banner-area bg-4" />
        <Gallery />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Gallery from '../Gallery/Gallery'
import Footer from '../Layouts/Footer'

export default {
    name: 'GalleryPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Gallery,
        Footer,
    }
}
</script>