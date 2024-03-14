<template>
  <div>
    <h2>ManifestForm</h2>
    <form @submit.prevent="submitManifest">
      <label for="manifestId">Manifest ID:</label>
      <input type="text" id="manifestId" v-model="manifestId">
      <button type="submit">Submit Manifest</button>
    </form>
    <div v-if="manifestData">
      <p>Manifest Field 1: {{ manifestData.field1 }}</p>
      <p>Manifest Field 2: {{ manifestData.field2 }}</p>
      <!-- Display other fields as needed -->
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { fetchManifestData } from '../services/DataService';

export default {
  data() {
    return {
      manifestId: '',
      manifestData: null,
      error: ''
    };
  },
  methods: {
    submitManifest() {
      this.error = '';
      fetchManifestData(this.manifestId)
        .then(manifest => {
          this.manifestData = manifest;
        })
        .catch(error => {
          this.error = error.message;
        });
    }
  }
};
</script>
