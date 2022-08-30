<template>
    <div class="projects-area with-black-background pb-100">
        <div 
            class="container-fluid"
            v-if="project !== null"
        >
            <div class="section-title">
                <span>{{project.subtitle}}</span>
                <h2>{{project.heading}}</h2>
                <p>{{project.desc}}</p>
            </div>

            <ProjectsSlides />
        </div>

        <div class="projects-bg-shape-1">
            <img src="../../assets/images/projects/projects-bg-shape.png" alt="image">
        </div>
        <div class="projects-shape-1">
            <img src="../../assets/images/projects/projects-shape-1.png" alt="image">
        </div>
        <div class="projects-shape-2">
            <img src="../../assets/images/projects/projects-shape-2.png" alt="image">
        </div>
        <div class="projects-shape-3">
            <img src="../../assets/images/projects/projects-shape-3.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectsSlides from './ProjectsSlides'

export default {
    name: 'Projects',
    components: {
        ProjectsSlides
    },
    data (){
        return {
            project: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/projectshomeone?populate=projectsSlides.image')
        const { data: {attributes} } = response.data
        this.project = attributes
    },
}
</script>