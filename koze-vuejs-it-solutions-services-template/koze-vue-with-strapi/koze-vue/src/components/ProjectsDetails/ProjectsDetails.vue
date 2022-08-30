<template>
    <div class="projects-details-area ptb-100">
        <div class="container">
            <div class="projects-details-desc">
                <div class="article-projects-with-info">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-md-6">
                            <div class="projects-info-image">
                                <img :src="details[0].attributes.image.data.attributes.url" alt="image">

                                <div class="info-shape">
                                    <img src="../../assets/images/projects-details/circle-shape.png" alt="image">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-md-6">
                            <div class="projects-info-content">
                                <span>PROJECT DETAILS</span>
                                <h3>{{details[0].attributes.title}}</h3>

                               <p>{{details[0].attributes.desc}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <span v-html="details[0].attributes.longDesc"></span>
            </div>
        </div>

        <div class="projects-details-shape">
            <img src="../../assets/images/projects-details/line-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>