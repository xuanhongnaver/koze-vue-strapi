<template>
    <div class="team-area pt-100 pb-75">
        <div 
            class="container"
            v-if="teams !== null"
        >
            <div class="section-title section-style-two">
                <div class="section-bg-text">{{teams.bgText}}</div>
                <span>{{teams.subtitle}}</span>
                <h2>{{teams.heading}}</h2>
                <p>{{teams.desc}}</p>
            </div>

            <div class="row justify-content-center">
                <div 
                    class="col-lg-3 col-sm-6"
                    v-for="team in teams.singleTeam"
                    :key="team.id"
                >
                    <div class="single-team-card">
                        <div class="team-image" data-tilt>
                            <img :src="team.image.data.attributes.url" alt="image">

                            <ul class="team-social">
                                <li>
                                    <a href="https://www.facebook.com/EnvyTheme" target="_blank">
                                        <i class="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/?lang=en" target="_blank">
                                        <i class="ri-twitter-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i class="ri-instagram-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="team-content">
                            <h3>{{team.name}}</h3>
                            <span>{{team.position}}</span>
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
    name: 'Team',
    data (){
        return {
            teams: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/team?populate=singleTeam.image')
        const { data: {attributes} } = response.data
        this.teams = attributes
    },
}
</script>