<template>
  <div>
    <h2>Model Form</h2>
    <form @submit.prevent="submitModel" :disabled="!manifestId">
      <label for="modelId">Model ID:</label>
      <input type="text" id="modelId" v-model="modelId">
      <button type="submit" :disabled="!manifestId">Submit Model</button>
    </form>
    <div v-if="modelData">
      <p>Model Field 1: {{ modelData.field1 }}</p>
      <p>Model Field 2: {{ modelData.field2 }}</p>
      <!-- Display other fields as needed -->
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { fetchModelData } from '../services/DataService';

export default {
  props: ['manifestId'], // Receive manifestId as a prop
  data() {
    return {
      modelId: '',
      modelData: null,
      error: ''
    };
  },
  methods: {
    submitModel() {
      this.error = '';
      fetchModelData(this.modelId, this.manifestId)
        .then(model => {
          this.modelData = model;
        })
        .catch(error => {
          this.error = error.message;
        });
    }
  }
};
</script>
