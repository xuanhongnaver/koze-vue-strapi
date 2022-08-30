<template>
    <div class="projects-area pt-100 pb-75">
        <div class="container">
            <div class="section-title">
                <span>PROJECTS</span>
                <h2>Our Latest <b>Incredible</b> Client's Projects</h2>
            </div>

            <ul class="projects-filter-menu"> 
                <li 
                    class="filter" 
                    :class="{active:itemFilterKey == 'all'}" 
                    v-on:click="itemFilterKey = 'all'" 
                >
                    All
                </li>
                <li 
                    class="filter" 
                    :class="{active:itemFilterKey == 'mobile'}"
                    v-on:click="itemFilterKey = 'mobile'"
                >
                    Mobile App
                </li>
                <li 
                    class="filter" 
                    :class="{active:itemFilterKey == 'development'}"
                    v-on:click="itemFilterKey = 'development'"
                >
                    Development
                </li>
                <li 
                    class="filter" 
                    :class="{active:itemFilterKey == 'web'}"
                    v-on:click="itemFilterKey = 'web'"
                >
                    Web Design
                </li>
                <li 
                    class="filter" 
                    :class="{active:itemFilterKey == 'product'}"
                    v-on:click="itemFilterKey = 'product'"
                >
                    Product Design
                </li>
            </ul>  
            <div class="row justify-content-center">
                <div 
                    class="col-lg-4 col-md-6"
                    v-for="item in itemFilter"
                    :key="item.id"
                >
                    <div class="single-projects-item" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500" data-aos-once="true">
                        <div class="projects-image">
                            <router-link :to="item.btnLink">
                                <img :src="item.image" alt="image">
                            </router-link>
                        </div>
                        <div class="projects-content">
                            <h3>
                                <router-link :to="item.btnLink">
                                    {{item.title}}
                                </router-link>
                            </h3>
                            <router-link :to="item.btnLink" class="projects-btn">
                                {{item.btnText}}
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
export default {
    name: 'Projects',
    data: function (){
        return {
            itemFilterKey: 'all',
            items: [
                {
                    id: 1,
                    image: require('../../assets/images/projects/projects-1.jpg'),
                    title: '3D Animation',
                    btnLink: '/projects-details',
                    btnText: 'View More',
                    key: 'mobile',
                },
                {
                    id: 2,
                    image: require('../../assets/images/projects/projects-2.jpg'),
                    title: 'Online Banking Software',
                    btnLink: '/projects-details',
                    btnText: 'View More',
                    key: 'development',
                },
                {
                    id: 3,
                    image: require('../../assets/images/projects/projects-3.jpg'),
                    title: 'Cashier Software',
                    btnLink: '/projects-details',
                    btnText: 'View More',
                    key: 'product',
                },
                {
                    id: 4,
                    image: require('../../assets/images/projects/projects-4.jpg'),
                    title: 'Analytics Software',
                    btnLink: '/projects-details',
                    btnText: 'View More',
                    key: 'development',
                },
                {
                    id: 5,
                    image: require('../../assets/images/projects/projects-5.jpg'),
                    title: 'Messaging App',
                    btnLink: '/projects-details',
                    btnText: 'View More',
                    key: 'web',
                },
                {
                    id: 6,
                    image: require('../../assets/images/projects/projects-6.jpg'),
                    title: 'Banking Software',
                    btnLink: '/projects-details',
                    btnText: 'View More',
                    key: 'mobile',
                },
            ],
        }
    },
    computed: {
        itemFilter(){
            return this[this.itemFilterKey]
        },
        all(){
            return this.items
        },
        mobile(){
            return this.items.filter((item) => item.key == 'mobile')
        },
        development(){
            return this.items.filter((item) => item.key == 'development')
        },
        web(){
            return this.items.filter((item) => item.key == 'web')
        },
        product(){
            return this.items.filter((item) => item.key == 'product')
        },
    }
}
</script>