<template>
    <div class="skill-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="skills !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="skill-content">
                        <span>{{skills.subtitle}}</span>
                        <h3>{{skills.heading}}</h3>
                    </div>

                    <div 
                        class="skill-bar" 
                        data-aos="fade-up" 
                        data-aos-delay="50" 
                        data-aos-duration="500" 
                        data-aos-once="true"
                        v-for="skill in skills.skillBar"
                        :key="skill.id"
                    >
                        <p class="progress-title-holder">
                            <span class="progress-title">{{skill.title}}</span>
                            <span class="progress-number-wrapper">
                                <span class="progress-number-mark" :style="skill.style">
                                    <span class="percent">{{skill.percent}}</span>
                                    <span class="down-arrow">%</span>
                                </span>
                            </span>
                        </p>
                        <div class="progress-content-outter">
                            <div :class="skill.class">
                                <div class="progress-bar" role="progressbar" :style="skill.width"></div>
                            </div>
                        </div>
                    </div>

                    <div 
                        class="skill-bar-btn" 
                        data-aos="fade-up" 
                        data-aos-delay="90" 
                        data-aos-duration="900" 
                        data-aos-once="true"
                    >
                        <router-link :to="skills.btnLink" class="default-btn">
                            {{skills.btnText}}
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div 
                        class="skill-image" 
                        data-aos="fade-left" 
                        data-aos-delay="80" 
                        data-aos-duration="800" 
                        data-aos-once="true"
                    >
                        <img :src="skills.image.data.attributes.url" alt="image" data-tilt>

                        <div class="skill-shape-1">
                            <img src="../../assets/images/skill/skill-shape-1.png" alt="image">
                        </div>
                        <div class="skill-shape-2">
                            <img src="../../assets/images/skill/skill-shape-2.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="skill-bg-shape">
            <img src="../../assets/images/skill/skill-bg-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Skill',
    data (){
        return {
            skills: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/skill?populate=*')
        const { data: {attributes} } = response.data
        this.skills = attributes
    },
}
</script>