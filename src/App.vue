<template>
<!-- <FirstPage/> -->
<!-- <signUp/> -->


<LogIno/>

<!--<h1>{{messag}}</h1>-
<a v-bind:href="link">here is link video"</a>->

<<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>-->
</template>

<script>
//import bootstrapVue from './components/bootstrap.vue'
//import mainO from './components/dataManagment.vue'
//import bootStrap from './components/bootStrap.vue'
//import SignIno from './components/SignIno.vue'
//import HeaderOne from './components/HeaderOne.vue'
//import SignUp from './components/SignUp.vue'
//import FirstPage from './components/FirstPage.vue'
//import secondAll from './components/secondAll.vue'
//import MyProfile from './components/MyProfile.vue' //import section
import LogIno from './components/LogIno.vue'
//import SignInoVue from './components/SignIno.vue'
export default { // register a component ...or instance
    // el: '#example',
    //  data() {
    //  return {
    // messag: "Umer Is Here",
    //link: "https://www.youtube.com/watch?v=JvrPzwzCdyI",
    // message: 'Hello'

    // }
    // },
    // computed: {
    // a computed getter
    // reversedMessage: function () {
    // `this` points to the vm instance
    // return this.message.split('').reverse().join('')
    //  }
    // },
    components: {
        // SignUp,
        // FirstPage,
        //secondAll,
        LogIno
        // HeaderOne
        // SignIno
       // UserInfo
      // mainO
      
    }
}
</script>

<style>


</style>