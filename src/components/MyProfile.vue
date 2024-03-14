<template>
<div class="main-container">
    <div class="container-one">
        <div class="profile">
            <img src="../assets/profile.jpeg">
            <h3>MUHAMMAD UMER SODAGER</h3>
            <h3>Web Developer</h3>
        </div>
        <div class="Social-Links">
            <div class="link">
                <img src="../assets/lin.png">
                <h2>Linkdin</h2>
                <a href="https://www.linkedin.com/in/umarsodager?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkdin Link</a>
            </div>
            <div class="link">
                <img src="../assets/inta.png">
                <h2>Instagram</h2>
                <a href="https://www.instagram.com/p/C1SrrLRtx-z/?igsh=a2lnaGt5aTY3ZmJm"> Instgram Link</a>
            </div>
            <div class="link">
                <img src="../assets/facebook.png">
                <h2>Facebook</h2>
                <a href="https://www.facebook.com/rana.sodager?sfnsn=scwspwa&mibextid=RUbZ1f"> Facebook Link</a>
            </div>
        </div>
    </div>
    <div class="container-two">
        <div class="about-me">
            <h1>About Me</h1>
            <p>As a skilled web developer, I leverage cutting-edge technologies to craft dynamic <br>
                and user-friendly digital experiences. With a keen eye for design and a passion for <br>
                problem-solving, I specialize in creating responsive websites and web applications <br>
                that exceed client expectations. My expertise spans across front-end and back-end <br>
                develo, ensuring seamless functionality and captivating user interfaces. Committed <br>
                staying ahead in the ever-evolving tech landscape, I continuously seek opportunity<br>
                innovate and deliver exceptional results. With a proven track record of delivering<br>
                high-quality projects on time, I'm dedicated to driving success through impactful <br>
                solutions.</p>
        </div>
        <div class="technology-section">
            <h1>Technologies Studied</h1>
        </div>
        <div class="logos">
            <img src="../assets/logo-1.png"><br>
            <img src="../assets/logo-2.png">

        </div>
        <div class="bottom-container">
            <div class="project-bottom">
                <a href="">My projects</a>
                <a href="">My Resume</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

* {
    border-color: black;
}

.main-container {
    display: flex;
    flex-direction: row;
    background-color: rgb(2, 2, 2);
    min-height: 100vh;
    size: 100%;
    height: 100%;
    width: 100%;
}

.container-one {
    position: relative;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-left: 1%;
    background-color: rgb(252, 115, 206);
    width: 30%;
    text-align: center;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;

}

.container-two {
    margin-left: -2%;
    margin-top: 1%;
    margin-bottom: 1%;
    margin-right: 1%;
    background-color: rgb(248, 157, 220);
    width: 70%;
    display: flex;
    flex-direction: column;

}

.profile img {
    margin-top: 10%;
    margin-left: 0%;
    height: 5cm;
    width: 5cm;
    border-radius: 50%;

    animation: border-blink 2s infinite linear alternate;
    /* Blinking animation */
}

@keyframes border-blink {
    100% {
        box-shadow: 0 0 0 0 rgba(5, 5, 5, 0.5);
    }

    /* Start with no shadow */
    100% {
        box-shadow: 0 0 0 10px rgba(255, 250, 254, 0.8);
    }

    /* End with darker shadow */
}

.link img {
    margin-top: 10%;
    margin-left: 0%;
    height: 1cm;
    width: 1cm;
}

.logos img {
    margin-top: 2%;
    height: 1cm;
    width: 1cm;
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 0 5px;
    display: flex;
    flex-direction: row;
}

.logos {
    text-align: center;
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 43%;
    margin-bottom: 5%;
    align-items: center;
}

.technology-section {
    margin-left: 0%;
    align-items: center;
    text-align: center;
}

.about-me {
    margin-top: 15%;
    margin-left: 15%;
}

.project-bottom a {
    margin-top: 2cm;
    display: block;
    text-align: center;
    background-color: rgb(252, 115, 206);
    padding: 5px;
    margin: 5px;
    border-radius: 40%;
    text-decoration: none;
    color: rgb(11, 11, 11);
}

.bottom-container {
    display: flex;
    float: row;
    justify-content: center;
}
</style>
