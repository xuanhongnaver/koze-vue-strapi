<template>
    <div class="wishlist-area ptb-100">
        <div class="container">
            <div class="wishlist-table table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Stock Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="product-thumbnail">
                                <router-link to="/products-details">
                                    <img src="../../assets/images/products/products-1.jpg" alt="item">
                                </router-link>
                            </td>
                            <td class="product-name">
                                <router-link to="/products-details">Technology Book</router-link>
                            </td>
                            <td class="product-price">
                                <span class="unit-amount">$250.00</span>
                            </td>
                            <td class="instock">Instock</td>
                            <td>
                                <router-link to="/cart" class="default-btn">Add To Cart</router-link>
                            </td>
                            <td class="remove">
                                <a href="#"><i class="ri-close-circle-line"></i></a>
                            </td>
                        </tr>

                        <tr>
                            <td class="product-thumbnail">
                                <router-link to="/products-details">
                                    <img src="../../assets/images/products/products-2.jpg" alt="item">
                                </router-link>
                            </td>
                            <td class="product-name">
                                <router-link to="/products-details">Think Outside the Box</router-link>
                            </td>
                            <td class="product-price">
                                <span class="unit-amount">$250.00</span>
                            </td>
                            <td class="instock">Instock</td>
                            <td>
                                <router-link to="/cart" class="default-btn">Add To Cart</router-link>
                            </td>
                            <td class="remove">
                                <a href="#"><i class="ri-close-circle-line"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Wishlist'
}
</script>