// This script was generated and reflects raw data. It is recommended to change this code to your required logic

const swaggerApi = require('./swaggerApi.js')();

load.initialize("Initialize", async function () {
});

load.action("Action", async function () {

    var petId = Math.floor(Math.random() * 200);

    const TRT_getPetById = new load.Transaction("getPetById");

    TRT_getPetById.start();
    const apiReq = swaggerApi.getPetById(petId.toString());
    

    const apiResp = apiReq.sendSync();

    TRT_getPetById.stop();

    if (apiResp.status == 200) {
        const petJson = /*JSON.parse(*/apiResp.jsonBody; //);
        load.log("petID : " + petId + "/" + petJson.id + " name : " + petJson.name + " status : " + petJson.status , load.LogLevel.debug);
    } else {
        load.log("petID not found : " + petId);
    }
});

load.finalize("Finalize", async function () {
});
