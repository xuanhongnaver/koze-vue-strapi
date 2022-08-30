<template>
    <div class="projects-area pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span>PROJECTS</span>
                <h2>Our Latest Incredible Client's Projects</h2>
            </div>
            <div 
                class="row justify-content-center"
                v-if="projects !== null"
            >
                <div 
                    class="col-lg-4 col-md-6"
                    v-for="project in projects"
                    :key="project.id"
                >
                    <div 
                        class="single-projects-item" 
                        data-aos="fade-up" 
                        data-aos-delay="50" 
                        data-aos-duration="500" 
                        data-aos-once="true"
                    >
                        <div class="projects-image">
                            <router-link :to="'/projects-details/' + project.attributes.slug">
                                <img :src="project.attributes.image.data.attributes.url" alt="image">
                            </router-link>
                        </div>
                        <div class="projects-content">
                            <h3>
                                <router-link :to="'/projects-details/' + project.attributes.slug">
                                    {{project.attributes.title}}
                                </router-link>
                            </h3>
                            <router-link 
                                :to="'/projects-details/' + project.attributes.slug" 
                                class="projects-btn"
                            >
                                {{project.attributes.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="projects-bg-shape-1">
            <img src="../../assets/images/projects/projects-bg-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Projects',
    data (){
        return {
            projects: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/projects?populate=*')
        this.projects = response.data.data
    },
}
</script>