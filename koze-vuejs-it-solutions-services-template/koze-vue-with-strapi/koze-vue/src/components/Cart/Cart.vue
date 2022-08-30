<template>
    <div class="cart-area ptb-100">
        <div class="container">
            <form v-if="shoppingCart.length !== 0">
                <div class="cart-table table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>

                        <tbody>
                            <CartItem
                                v-for="product in shoppingCart"
                                :item="product"
                                :key="product.name"
                            ></CartItem>
                        </tbody>
                    </table>
                </div>

                <div class="cart-buttons">
                    <div class="row align-items-center">
                        <div class="col-lg-7 col-sm-7 col-md-7">
                            <div class="shopping-coupon-code">
                                <input type="text" class="form-control" placeholder="Enter coupon code" name="coupon-code" id="coupon-code">
                                <button type="submit" class="default-btn">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cart-totals">
                    <h3>Cart Totals</h3>

                    <ul>
                        <li class="d-flex justify-content-between align-items-center">
                            Subtotal 
                            <span>${{totalAmount.toFixed(1)}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                            Total 
                            <span>${{(totalAmount + 0).toFixed(1)}}</span>
                        </li>
                    </ul>
                    <router-link to="/checkout" class="default-btn">Proceed to Checkout</router-link>
                </div>
            </form>
            
            <div v-else>
                <h2>Cart Is Empty!</h2>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    computed: {
        shoppingCart() {
            return this.$store.state.cart
        },
        totalAmount() {
          return this.$store.getters.total
        }
    }
}
</script>

<style scoped>
    .list-item {
    display: inline-block;
    margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    }
    .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    }
</style>