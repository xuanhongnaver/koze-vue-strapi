<template>
    <div class="overview-area pt-100 pb-75">
        <div class="container">
            <div 
                class="row justify-content-center"
                v-if="overviews !== null"
            >
                <div 
                    class="col-lg-3 col-md-6"
                    v-for="overview in overviews.overviewCard"
                    :key="overview.id"
                >
                    <div class="overview-card">
                        <h3>{{overview.title}}</h3>
                        <span>
                            <a :href="overview.link">{{overview.text}}</a>
                        </span>
                        <span>{{overview.visit}}</span>

                        <div class="overview-shape">
                            <img src="../../assets/images/overview/overview-shape.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Overview',
    data (){
        return {
            overviews: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/overview?populate=*')
        const { data: {attributes} } = response.data
        this.overviews = attributes
    },
}
</script>