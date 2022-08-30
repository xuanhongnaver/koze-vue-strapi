<template>
    <div class="error-area">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="error-content">
                        <img src="../../assets/images/error.png" alt="image">
                        <h3>Error 404 : Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <router-link to="/" class="default-btn">Back to Homepage</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
}
</script>