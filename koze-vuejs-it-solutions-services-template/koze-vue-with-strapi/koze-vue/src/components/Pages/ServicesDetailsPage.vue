<template>
    <div>
        <Topbar />
        <Navbar />
        <PageBanner 
            v-if="details !== null"
            :pageTitle="details[0].attributes.title"
            className="page-banner-area bg-4" 
        />
        <div v-if="details !== null">
            <ServicesDetails 
                v-bind:detailsContent="details"
            />
        </div>
        <Talk />
        <Services />
        <Overview />
        <Footer class="margin-zero" />
    </div>
</template>

<script>
import Topbar from '../Layouts/Topbar'
import Navbar from '../Layouts/Navbar'
import PageBanner from '../Common/PageBanner'
import ServicesDetails from '../ServicesDetails/ServicesDetails'
import Talk from '../Common/Talk'
import Services from '../ServicesDetails/Services'
import Overview from '../Common/Overview'
import Footer from '../Layouts/Footer'
import axios from 'axios'

export default {
    name: 'ServicesDetailsPage',
    components: {
        Topbar,
        Navbar,
        PageBanner,
        ServicesDetails,
        Talk,
        Services,
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
        const reaponse = await axios.get(`http://localhost:1337/api/servicesdetails?filters[slug][$eq]=${slug}&populate=*`, { params: { slug }})
        this.details = reaponse.data.data
    }
}
</script>