<template>
<div class="container_1">
    <h1>Enter Manifest ID</h1>
    <div class="manifest-section">
        <h2>Manifest</h2>
        <input v-model="manifestId" placeholder="Enter Manifest ID" v-on:keyup.enter="submitManifest"><br>
        <button @click="submitManifest"> Submit Manifest </button>
        <span v-if="manifestError" class="error">{{ manifestError }}</span>
        <div class="data-display" v-if="selectedManifest">
            <div class="data-heading">
                <h3>Manifest Data</h3>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Internal ID:</strong> {{ selectedManifest.id }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Actual ID:</strong> {{ selectedManifest.field1 }}</p>
                </div>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Type:</strong> {{ selectedManifest.field2 }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Status:</strong> {{ selectedManifest.field3 }}</p>
                </div>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Location:</strong> {{ selectedManifest.field4 }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Recieve ID:</strong> {{ selectedManifest.field5 }}</p>
                </div>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Scanned Units:</strong> {{ selectedManifest.field6 }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Total Units:</strong> {{ selectedManifest.field7 }}</p>
                </div>
            </div>

        </div>
    </div>
    <div class="model-section" v-show="selectedManifest">
        <h2>Model</h2>
        <input v-model="modelId" placeholder="Enter Model ID based on Manifest" v-on:keyup.enter="submitModel">
        <button @click="submitModel">Submit Model</button>
        <span v-if="modelError" class="error">{{ modelError }}</span>
        <div class="data-display" v-if="selectedModel">
            <div class="data-heading">
                <h3>Model Data</h3>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Model ID:</strong> {{ selectedModel.id }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Field 1:</strong> {{ selectedModel.field1 }}</p>
                </div>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Field 2:</strong> {{ selectedModel.field2 }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Field 3:</strong> {{ selectedModel.field3 }}</p>
                </div>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Field 4:</strong> {{ selectedModel.field4 }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Field 5:</strong> {{ selectedModel.field5 }}</p>
                </div>
            </div>
            <div class="data-row">
                <div class="data-column">
                    <p><strong>Field 6:</strong> {{ selectedModel.field6 }}</p>
                </div>
                <div class="data-column">
                    <p><strong>Field 7:</strong> {{ selectedModel.field7 }}</p>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainO',
    data() {
        return {
            manifestId: '',
            modelId: '',
            manifestError: '',
            modelError: '',
            manifestNumbers: [{
                    "field1": "8",
                    "id": "11",
                    "field2": "unit",
                    "field3": "open",
                    "field4": "PK",
                    "field5": "4",
                    "field6": "0",
                    "field7": "1",

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
                    "id": "carry",
                    "manifest_numbers": "11",
                    "field1": "field1",
                    "field2": "field2",
                    "field3": "field3",
                    "field4": "field4",
                    "field5": "field5",
                    "field6": "field6",
                    "field7": "field7"
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
                this.manifestError = 'Manifest ID is required.';
                return;
            }
            this.manifestError = '';
            this.selectedManifest = this.manifestNumbers.find(manifest => manifest.id === this.manifestId);
            if (!this.selectedManifest) {
                this.manifestError = 'Manifest ID not found.';
                this.manifestId = '';
                return;
            }
            this.selectedModel = null;
        },
        submitModel() {
            if (!this.modelId) {
                this.modelError = 'Model ID is required.';
                return;
            }
            this.modelError = '';
            const modelMatch = this.models.find(model => model.id === this.modelId && model.manifest_numbers === this.manifestId);
            if (!modelMatch) {
                this.modelError = 'Model ID does not match Manifest ID.';
                this.modelId = '';
                this.selectedModel = '';
                return;
            }
            this.selectedModel = modelMatch;
        },
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container_1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #f0f0f0;

}

.manifest-section,
.model-section {

    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #f0f0f0;
}

.manifest-section button,
.model-section button {
    height: 40px;
    margin-bottom: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: #2980b9;
    color: #fff;
    transition: background-color 0.3s ease;
}

.manifest-section button:hover,
.model-section button:hover {
    background-color: #2c3e50;

}

.manifest-section input,
.model-section input {
    width: calc(100% - 32px);
    background-color: #ecf0f1;
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
}

.data-display {
    padding: 10px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.data-display:hover {
    transform: scale(1.02);
}

.error {
    color: #e74c3c;
}

.data-heading {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border-radius: 4px 4px 0 0;
}

.data-content {
    padding: 10px;
}

.data-row {
    display: flex;
    margin-top: 10px;
}

.data-column {
    flex: 1;
    padding: 0 10px;
    justify-content: space-between;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.data-display {
    animation: fadeIn 0.5s ease, slideIn 0.5s ease;
}
</style>
