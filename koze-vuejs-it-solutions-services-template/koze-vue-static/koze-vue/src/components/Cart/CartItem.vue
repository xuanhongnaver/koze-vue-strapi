<template>
    <tr>
        <td class="product-thumbnail">
            <router-link to="/products-details">
                <img :src="item.image" alt="item">
            </router-link>
        </td>
        <td class="product-name">
            <router-link to="/products-details">
                {{item.name}}
            </router-link>
        </td>
        <td class="product-price">
            <span class="unit-amount">${{item.price}}</span>
        </td>
        <td class="product-quantity">
            <div class="input-counter">
                <!-- <span 
                    @click="decrement"
                    class="minus-btn"
                >
                    <i class='ri-subtract-line'></i>
                </span> -->
                <input type="text" :value="itemNumber">
                <!-- <span 
                    class="plus-btn"
                    @click="increment"
                >
                    <i class='ri-add-line'></i>
                </span> -->
            </div>
        </td>
        <td class="product-subtotal">
            <span class="subtotal-amount">${{item.totalPrice}}</span>
            <a 
                href="javascript:void(0)" 
                @click="removeFromCart(item)" 
                class="remove"
            >
                <i class="ri-close-circle-line"></i>
            </a>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['item'],
    data() {
        return {
            itemNumber: 1,
        }
    },
    methods: {
        removeFromCart(item){
            this.$toast.success('Removed from bag', {
                icons: 'shopping_cart',
                theme: "bubble", 
                position: "bottom-left", 
                duration : 3000
            });
            this.$store.commit('removeFromCart', item);
        },
        increment(){
            if(this.itemNumber < 10){
                this.itemNumber++
            } else {
                this.$toast.success('Can\'t add more than 10 items', {
                    icons: 'shopping_cart',
                    theme: "bubble", 
                    position: "bottom-right", 
                    duration : 3000
                });
            }
        },
        decrement(){
            if(this.itemNumber > 1){
                this.itemNumber--
            } else {
                this.$toast.success('Can\'t add less than 1 item', {
                    icons: 'shopping_cart',
                    theme: "bubble",
                    position: "top-right",
                    duration : 3000
                });
            }
        },
    }
}
</script>