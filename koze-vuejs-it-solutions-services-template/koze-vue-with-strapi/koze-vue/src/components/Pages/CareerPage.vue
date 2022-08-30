<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner pageTitle="Career" className="page-banner-area bg-3" />
        <Career />
        <ApplyForm />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import Career from '../Career/Career'
import ApplyForm from '../Career/ApplyForm'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'

export default {
    name: 'CareerPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        Career,
        ApplyForm,
        Overview,
        Footer,
    }
}
</script>