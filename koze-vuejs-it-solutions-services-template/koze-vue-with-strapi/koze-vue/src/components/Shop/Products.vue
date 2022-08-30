<template>
    <div class="products-area pt-100 pb-100">
        <div class="container">
            <div class="products-grid-sorting row align-items-center">
                <div class="col-lg-6 col-md-6 result-count">
                    <p>Showing 1-8 of 12 Results</p>
                </div>

                <div class="col-lg-6 col-md-6 ordering">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <form class="search-form">
                                <input type="search" class="search-field" placeholder="Search your products">
                                <button type="submit"><i class="ri-search-line"></i></button>
                            </form>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="select-box">
                                <select>
                                    <option>Default Sorting</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: Low To High</option>
                                    <option>Price: High To Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <ProductsItem
                    v-for="product in products"
                    :item="product"
                    :key="product.id"
                    @update-cart="updateCart"
                    class="col-lg-3 col-sm-6"
                />
                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <router-link to="/products" class="prev page-numbers">
                            <i class="ri-arrow-left-s-line"></i>
                        </router-link>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <router-link to="/products" class="page-numbers">2</router-link>
                        <router-link to="/products" class="page-numbers">3</router-link>
                        <router-link to="/products" class="next page-numbers">
                            <i class="ri-arrow-right-s-line"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsItem from './ProductsItem'

export default {
    name: 'Products',
    components: {
        ProductsItem
    },
    methods: {
        updateCart(e) {
            this.cart.push(e);
            this.total = this.shoppingCartTotal;
        },
        emptyCart() {
            this.cart = [];
            this.total = 0;
        },
    },
    computed: {
        products() {
            return this.$store.state.items;
        },
    },
}
</script>