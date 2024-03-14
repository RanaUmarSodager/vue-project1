<template>
<div class="main-container">
    <div class="sub-container-one">
        <img src="../assets/logo_2.png" alt="Snow">
    </div>
    <div class="sub-container-two">
        <div class="register">
            <input type="text" placeholder="Enter Name" /><br>
            <input type="text" placeholder="Enter Email" /><br>
            <input type="password" placeholder="Enter password" /><br>
            <button class="signin-btn">Sign In</button><br>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    size: 100%;
    height: 100%;
    width: 100%;
    background-color: rgb(250, 150, 56);
}

.sub-container-one {
    width: 100%;
    height: 400px;

}

.sub-container-two {
    width: 100%;
    background-color: rgb(250, 150, 56);
}

.sub-container-two {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
}

.register input {
    margin-top: 5px;
    width: 300px;
    height: 40px;
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 20px;
    border-block-color: rgb(0, 0, 0);

}

.signin-btn {
    width: 300px;
    height: 40px;
    padding: 20px;
    margin-bottom: 25px;
    background-color: rgb(253, 252, 252);
    border-radius: 20px;
    text-align: center;
    border-block-color: rgb(2, 2, 2);

    animation: border-blink 2s infinite linear alternate;
}

.signin-btn:hover {
    background-color: rgb(58, 59, 50);
    /* Change to the desired color on hover */
}

@keyframes border-blink {
    100% {
        box-shadow: 0 0 0 0 rgba(5, 5, 5, 0.5);
    }

    100% {
        box-shadow: 0 0 0 10px rgba(74, 74, 74, 0.8);
    }
}

.container {
    box-sizing: border-box;
    size-adjust: 100px;
}

.sub-container-one img {
    width: 100%;
    height: auto;
}
</style>
