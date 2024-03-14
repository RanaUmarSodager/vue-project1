<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/MyProfile">About Me</router-link>
    <router-link to="/signup">Sign In</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'HeaderOne',
}
</script>

<style scoped>
.nav {
    background-color: #333;
    overflow: hidden;
    z-index: 9999;
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}

.nav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>
