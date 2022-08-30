<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner 
            v-if="details !== null"
            :pageTitle="details[0].attributes.title"
            className="page-banner-area bg-3" 
        />
        <div v-if="details !== null">
            <ProjectsDetails 
                v-bind:detailsContent="details"
            />
        </div>
        <Talk />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import ProjectsDetails from '../ProjectsDetails/ProjectsDetails'
import Talk from '../Common/Talk'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'
import axios from 'axios'

export default {
    name: 'ProjectsDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        ProjectsDetails,
        Talk,
        Overview,
        Footer
    },
    data (){
        return {
            details: null
        }
    },
    created: async function (){
        const { slug } = this.$route.params
        const reaponse = await axios.get(`http://localhost:1337/api/projects?filters[slug][$eq]=${slug}&populate=*`, { params: { slug }})
        this.details = reaponse.data.data
    }
}
</script>