<template>
    <div class="services-details-area ptb-100">
        <div class="container">
            <div class="services-details-desc">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="article-services-image">
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h3>{{details[0].attributes.title}}</h3>
                        <p>{{details[0].attributes.desc}}</p>
                    </div>
                </div>
                <span v-html="details[0].attributes.longDesc"></span>
            </div>
        </div>

        <div class="services-details-shape">
            <img src="../../assets/images/services-details/line-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>