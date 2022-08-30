<template>
    <div :class="className">
        <div class="container">
            <div class="page-banner-content" data-aos="fade-right" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                <h2>{{pageTitle}}</h2>

                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>{{pageTitle}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageBanner',
    props: ['pageTitle', 'className']
}
</script>