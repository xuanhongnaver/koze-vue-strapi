<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner 
            v-if="details !== null"
            :pageTitle="details[0].attributes.title"
            className="page-banner-area bg-2" 
        />
        <div v-if="details !== null">
            <BlogDetails 
                v-bind:detailsContent="details"
            />
        </div>
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
import axios from 'axios'

export default {
    name: 'BlogDetailsPageOne',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        BlogDetails,
        Overview,
        Footer,
    },
    data (){
        return {
            details: null
        }
    },
    created: async function (){
        const { slug } = this.$route.params
        const reaponse = await axios.get(`http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug }})
        this.details = reaponse.data.data
    }
}
</script>