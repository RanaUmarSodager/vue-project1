<template>
<div id="secondAll">
    Name : {{ fname }} <br> Lastname : {{ lname }} <br> Method: {{ run('world') }}
    <p>Result of a + b: {{ sumResult }}</p>
</div>
</template>

<script>
export default {
    name: 'secondAll',
    data() {
        return {
            fname: "Umar",
            lname: "Sodager",
            a: 5,
            b: 10
        };
    },
    computed: {
        sumResult() {
            return this.a + this.b;
        }
    },
    methods: {
        run(message) {
            return "I am Umar" + message + this.fname;
        }
    }
}
</script>
