<template>
    <div>
        <div class="single-products-card">
            <div class="products-image">
                <router-link to="/products-details">
                    <img :src="item.image" alt="image">
                </router-link>

                <div class="add-to-cart-btn">
                    <a
                        href="javascript:void(0)" 
                        class="default-btn"
                        @click="addToCart(item)"
                    >
                        Add To Cart
                    </a>
                </div>
                <div v-if="item.sale" class="sale">Sale</div>
                <div v-if="item.new" class="new">New</div>
            </div>
            <div class="products-content">
                <h3>
                    <router-link to="/products-details">
                        {{item.name}}
                    </router-link>
                </h3>
                <span>${{item.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsItem',
    props: ['item'],
    methods: {
        addToCart(item) {
            this.$toast.success('Added to cart', {
                icons: 'shopping_cart',
                position: "bottom-left", 
                duration : 3000
            });
            if(this.size !== '') {
                this.$store.commit({
                    type: 'addToCart',
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    image: item.image,
                    productQuantity: this,
                    totalPrice: item.price,
                })
            }
        }
    }
}
</script>