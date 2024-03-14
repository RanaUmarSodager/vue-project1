<template>
<div class="container">
    <div class="manifest-section">
        <h2>Manifest</h2>
        <input v-model="manifestId" placeholder="Enter Manifest ID">
        <button @click="submitManifest">Submit Manifest</button>
        <span v-if="manifestError" class="error">{{ manifestError }}</span>
        <div class="data-display" v-if="selectedManifest">
            <h3>Manifest Data</h3>
            <p>Manifest ID: {{ selectedManifest.id }}</p>
            <p>Field 1: {{ selectedManifest.field1 }}</p>
            <p>Field 2: {{ selectedManifest.field2 }}</p>
            <p>Field 3: {{ selectedManifest.field3 }}</p>
            <p>Field 4: {{ selectedManifest.field4 }}</p>
        </div>
    </div>

    <div class="model-section" :class="{ disabled: !selectedManifest }">
        <h2>Model</h2>
        <input v-model="modelId" placeholder="Enter Model ID based on Manifest" :disabled="!selectedManifest">
        <button @click="submitModel" :disabled="!manifestId">Submit Model</button>
        <span v-if="modelError" class="error">{{ modelError }}</span>
        <div class="data-display" v-if="selectedModel">
            <h3>Model Data</h3>
            <p>Model ID: {{ selectedModel.id }}</p>
            <p>Field 1: {{ selectedModel.field1 }}</p>
            <p>Field 2: {{ selectedModel.field2 }}</p>
            <p>Field 3: {{ selectedModel.field3 }}</p>
            <p>Field 4: {{ selectedModel.field4 }}</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'practicO',
    data() {
        return {
            manifestId: '',
            modelId: '',
            manifestError: '',
            modelError: '',
            manifestNumbers: [{
                    "id": "m1",
                    "field1": "field1",
                    "field2": "field2",
                    "field3": "field3",
                    "field4": "field4"
                },
                {
                    "id": "manifest2",
                    "field1": "field1",
                    "field2": "field2",
                    "field3": "field3",
                    "field4": "field4"
                }
            ],
            models: [{
                    "id": "mo1",
                    "manifest_numbers": "m1",
                    "field1": "field1",
                    "field2": "field2",
                    "field3": "field3",
                    "field4": "field4"
                },
                {
                    "id": "model2",
                    "manifest_numbers": "manifest2",
                    "field1": "field1",
                    "field2": "field2",
                    "field3": "field3",
                    "field4": "field4"
                }
            ],
            selectedManifest: null,
            selectedModel: null
        };
    },
    methods: {
        submitManifest() {
            if (!this.manifestId) {
                this.manifestError = "Please Enter ID";
                return;
            }
            this.manifestError = '';
            this.selectedManifest = this.manifestNumbers.find(manifest => manifest.id === this.manifestId)
            if (!this.selectedManifest) {
                this.manifestError = "manifestId not Matched";
                this.manifestId = '';
                return;
            }
            this.selectedModel = null;
        },
        submitModel() {
            if (!this.modelId) {
                this.modelError = "Please Enter ID";
                return;
            }
            this.modelError = '';
            const selectModel = this.models.find(models => models.id === this.modelId)
            if (!selectModel) {
                this.modelError = "model id not Matched";
                this.modelId = '';
                return;
            }
            this.modelError = '';
            this.selectedModel = this.models.find(model => model.id === this.modelId && model.manifest_numbers === this.manifestId)
            this.modelError = "manifest id not matched";
            return;

        }
    }
};
</script>
