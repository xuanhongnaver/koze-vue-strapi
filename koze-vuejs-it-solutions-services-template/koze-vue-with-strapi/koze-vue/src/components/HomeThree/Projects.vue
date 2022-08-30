<template>
    <div class="projects-area style-two-area ptb-100">
        <div class="container-fluid">
            <div 
                class="row align-items-center"
                v-if="projects !== null"
            >
                <div class="col-lg-4 col-md-12">
                    <div 
                        class="projects-section-content" 
                        data-aos="fade-down" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
                        <div class="projects-bg-text">{{projects.bgText}}</div>
                        <span>{{projects.subtitle}}</span>
                        <h3>{{projects.heading}}</h3>
                        <p>{{projects.desc}}</p>
                        <div class="projects-section-btn">
                            <router-link :to="projects.btnLink" class="default-btn">
                                {{projects.btnText}}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="col-lg-8 col-md-12">
                    <ProjectsSlides />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectsSlides from './ProjectsSlides'

export default{
    name: 'Projects',
    components: {
        ProjectsSlides
    },
    data (){
        return {
            projects: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/projectshomethree?populate=projectsSlides.image')
        const { data: {attributes} } = response.data
        this.projects = attributes
    },
}
</script>