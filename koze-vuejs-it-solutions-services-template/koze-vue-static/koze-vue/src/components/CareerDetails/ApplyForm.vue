<template>
    <div class="apply-area ptb-100">
        <div class="container">
            <div class="apply-form-wrap">
                <div class="content">
                    <h3>Apply For Job</h3>
                </div>
                
                <form class="apply-form">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email address">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter phone">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Portfolio link">
                    </div>
                    <div class="form-group">
                        <div class="select-box">
                            <select>
                                <option>Job Category</option>
                                <option>Team Lead - Digital Marketing</option>
                                <option>Senior ASP.Net Core Developer</option>
                                <option>Android Developer</option>
                                <option>Graphic Designer</option>
                                <option>Digital Marketing Executive</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea name="message" class="form-control" placeholder="Write message..."></textarea>
                    </div>
                    <button type="submit" class="default-btn">Apply</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApplyForm'
}
</script>