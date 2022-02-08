// This script was generated and reflects raw data. It is recommended to change this code to your required logic

const swaggerApi = require('./swaggerApi.js')();

load.initialize("Initialize", async function () {
});

load.action("Action", async function () {
    const TRT_getPetById = new load.Transaction("getPetById");
    TRT_getPetById.start();
    const httpResp = swaggerApi.getPetById("1");
    TRT_getPetById.stop();
});

load.finalize("Finalize", async function () {
});
