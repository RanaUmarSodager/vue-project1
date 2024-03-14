<template>
<div class="main-container">
    <div class="login-container">
        <div class="logo">
            <img src="../assets/HM-logo.png" alt="Snow">
            <select class="language-select">

                <option value="english">English</option>
                <option value="urdu">Urdu</option>

            </select>

        </div>

        <div class="login-menu">
            <h2>Log In</h2><br>
            <h3>Welcome back, Please enter your details</h3><br><br>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email</label><br>
                    <input type="email" id="email" v-model="email" placeholder="email@domain.com" @input="checkEmailValidity"><br>
                    <span v-if="!isEmailValid && email.length > 0" class="error-message">Invalid email format</span>
                    <span v-else-if="!emailValid && formSubmitted && email.length == 0 " class="error-message">Email cannot be empty</span>
                   
                </div><br>
                <div class="form-group">
                    <label for="password">Password</label><br>
                    <div class="password-input">
                        <input :type="passwordFieldType" id="password" v-model="password"  @input="validateForm" placeholder="**********************">
                        <button type="button" class="password-toggle-btn" @click="togglePasswordVisibility">
                            <i :class="['fa', showPassword ? 'fa-eye-slash' : 'fa-eye']" style="font-size: 18px;"></i>
                        </button>

                    </div>

                    <span v-if="!passwordValid && formSubmitted && password.length ==0" class="error-message">Password cannot be empty</span>
                    <span v-else-if="passwordValid && !isPasswordStrong" class="error-message">Password must contain at least 8 characters<br> with one uppercase letter <br>and one special character</span><br>

                    <div class="container_2">
                        <div class="rememberme_1">
                            <input type="checkbox" id="remember" v-model="rememberMe">
                            <label for="remember">Remember me</label>
                        </div><br>
                        <br>

                        <div class="forgot-password"><br>
                            <button type="button" @click="forgotPassword" class="forgot-password-link"><b>Forgot Password?</b></button>
                        </div>
                    </div>
                </div>
                <div class="button_1">
                    <button v-on:click="signUp" type="submit" class="login"><b>LSign Up</b></button>
                </div><br>
                <div class="button_2"><br>
                    <button type="button" class="google">
                        <img src="../assets/Google.png" alt="Google Icon"> Log In With Google
                    </button>
                    <button type="button" class="linkedin">
                        <img src="../assets/Linkd.png" alt="LinkedIn Icon"> Log In With LinkedIn
                    </button>
                </div><br>
                <div class="last">
                    <h3>Do not have an account?</h3>
                    <a href=" "><b>SigIn</b></a>
                </div><br>
                <div class="last_2">
                    <h3 style="margin-right: auto;">Copyright@2023</h3>
                    <a href="#" style="display: flex; align-items: center;">
                        <b>Help</b>
                        <i class="fas fa-question-circle fa-lg"></i>
                    </a>
                </div>

            </form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignIno',
    data() {
        return {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            isPasswordStrong: false,
            formSubmitted: false,
            showPassword: false,
            rememberMe: false,

        };
    },
    computed: {

        isLoginFormValid() {
            return this.emailValid && this.passwordValid && this.isPasswordStrong;// is a computed property that checks whether the login form is valid based on the following criteria The method returns true if all these conditions are met, indicating that the login form is valid and ready for submission
        },
        passwordFieldType() {
            return this.showPassword ? 'text' : 'password'; // Toggle password field type based on showPassword state
        },
    },
    methods: {
      async  signUp()
        {
let result =  await axios.post("http://localhost:3000/user",
{
    email:this.email,
    password:this.password
});
console.warn(result);
if(result.status==201){
    alert("SignUp Done");
}
localStorage.setItem("user-info",JSON.stringify(result.data))
        },

        togglePasswordVisibility() {
            this.showPassword = !this.showPassword; // Toggle showPassword state if it's value is true if turn false and vice versa here true means shoe and false means hide 
        },
        checkEmailValidity() {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//create a constant veriable 
            this.isEmailValid = emailRegex.test(this.email);// check the by email formate by using  test medthod it return ture of false 
        },
        validateForm() {
            this.emailValid = this.email.trim() !== '';//Checks if the trimmed email input is not empty
            this.passwordValid = this.password.trim() !== '';//Checks if the trimmed password input is not empty
            this.isPasswordStrong = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/.test(this.password);//direct test password formate without creating constant veriable 
        },
        login() {
            this.formSubmitted = true;
            this.checkEmailValidity();
            this.validateForm();
            if (this.isLoginFormValid) {
               alert('Form submitted successfully!');
               // Proceed with login logic
            } else {
                 alert('Please fill in all the required fields correctly.');
                // Handle form validation errors
            }
        }
    },
};
</script>

<style scoped>
.main-container {
    display: flex;

}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}

.login-container {
    position: relative;

    width: 100%;
    height: 100%;
    display: flex;
    font-style: normal;
    font-family: Roboto, sans-serif;
    background-color: whitesmoke;

    /* Adjust width as needed */
}

.logo {
    display: flex;
    position: absolute;
    top: 0px;
    left: 10px;

}

.logo {
    display: flex;
    align-items: center;
}

.language-options {
    background-color: white;
    padding: 10px;
    margin-left: 100px;
    border-radius: 5px;
    font-weight: bold;
}

.language-select {
    background-color: white;
    border-radius: 10px;
    color: #040404;
    /* Adjust color as needed */
    font-size: inherit;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin-left: 450px;
    border-color: white;
    border-block-color: white;
    border-block-end-style: hidden;
    width: 140px;
    /* Set the width as needed */
    height: 80px;
    /* Set the height as needed */
    font-size: 20px;
    font-style: bold;
    font-weight: bold;
}

.language-select option {
    color: rgb(0, 0, 0);
    /* Adjust color as needed */
}

.logo,
img {
    width: 160px;
    height: auto;
}

.login-menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 150px;
}

.form-group {
    margin-bottom: 15px;
    
}

label {
    display: block;
    font-weight: bold;
}

input[type="email"],
input[type="password"],
input[type="text"] {
    width: 700px;
    /* Adjusted width for all input fields */
    padding: 12px;
    border-radius: 5px;
    border: 1px solid white;
    border-radius: 10px;
    height: 60px;

}

.password-input {
    position: relative;
}

.password-toggle-btn {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    height: 20px;
    width: 20px;
}

.password-toggle-btn i {
    color: #666;
}

button.login {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #2e28e1;
    color: #fff;
    cursor: pointer;
    height: 60px;
}

button.login:hover {
    background-color: #0a5fbb;
}

h3 {
    color: rgb(110, 109, 109);
}

h2 {
    color: #1c53f4;
    font-size: 40px;
    line-height: 47px;
    display: block;
}

.rememberme_1 {
    display: flex;
    align-items: center;
    /* Align items vertically */
    color: #878787;
    font-size: 16px;
    /* Adjust font size as needed */
    margin-bottom: 20px;
    /* Add some bottom margin for spacing */
}

.rememberme_1 input[type="checkbox"] {
    margin-right: 10px;
    /* Add some right margin to separate checkbox from label */
}

.forgot-password {
    display: flex;
    justify-content: flex-end;
    /* Align the link/button to the right */

    /* Add some margin for spacing */
    margin-left: 420px;
}

.forgot-password-link {
    background: none;
    border: none;
    font-size: 16px;
    font-style: bold;
    color: rgb(80, 80, 247);
    /* Change the color to blue */
    cursor: pointer;
}

.container_2 {
    display: flex;
    align-items: inherit;
    flex-direction: row;
}

.button_2 {
    display: flex;
    justify-content: center;
}

.button_2 button {
    padding: 15px 40px;
    margin: 10px;
    border-color: rgb(255, 255, 255);
    border-radius: 8px;
    font-size: 14Spx;
    font-weight: bold;
    color: #000000;
    background-color: #fefefe;
    /* LinkedIn color */
    transition: background-color 0.3s ease;
    width: 250px;
    display: flex;
    align-items: center;
}

.button_2 button:hover {
    background-color: #e8e8e8;
    /* Darker LinkedIn color on hover */
}

.button_2 .google {
    background-color: #fbfbfb;
    /* Google color */
    margin-left: 0px;
}

.button_2 .google:hover {
    background-color: #e8e8e8;
    /* Darker Google color on hover */
}

.button_2 img {
    width: 20px;
    /* Adjust image size as needed */
    margin-right: 10px;

}

.last {
    display: flex;
    align-items: center;
    /* Center items vertically */
    justify-content: center;
    /* Center items horizontally */
}

.last_2 {
    display: flex;
    align-items: center;
    /* Center items vertically */
    justify-content: space-between;
    /* Move items to opposite ends */
    padding: 0 20px;
    /* Add padding for better spacing */
}

.last_2 a {
    color: rgb(0, 0, 0);
    /* Change link color as needed */
    text-decoration: none;
    /* Remove underline */
}

.last_2 a:hover {
    color: darkblue;
    /* Change link color on hover */
}

.last_2 i {
    color: rgb(0, 217, 255);
    margin-left: 10px;

}
</style>
