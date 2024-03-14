<template>
  <div class="container">
    <div class="manifest-section">
      <h2>Manifest</h2>
      <input type="number" v-model="primenumber" placeholder="Enter a number">
      <button @click="submitManifest">Check Prime</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'practicO',
  data() {
    return {
      primenumber: '',
    };
  },
  methods: {
    submitManifest() {
      if (this.isPrime(parseInt(this.primenumber))) {
        alert(`${this.primenumber} is a prime number.`);
      } else {
        alert(`${this.primenumber} is not a prime number.`);
      }
    },
    isPrime(num) {
      
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>
