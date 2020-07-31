import FuncoesController from "./src/controllers/funcoes";

(async function () {
    //await FuncoesController.initialCharge();
    const exercicio1 = await FuncoesController.createFileByState();
    if (exercicio1) console.log("files creted succefull");

    const exercicio2 = await FuncoesController.countCityByStateShortName("MT");
    console.log("exercicio2: City count - ", exercicio2);

    const exercicio3 = await FuncoesController.fiveStateHasMoreCities();
    console.log("exercicio3: ", exercicio3);

    const exercicio4 = await FuncoesController.fiveStateHasLessCities();
    console.log("exercicio4: ", exercicio4);

    const exercicio5 = await FuncoesController.cityBigNameByState();
    console.log("exercicio5: ", exercicio5);

    const exercicio6 = await FuncoesController.citySmallNameByState();
    console.log("exercicio6: ", exercicio6);

    const exercicio7 = await FuncoesController.cityBigName();
    console.log("exercicio7: ", exercicio7);

    const exercicio8 = await FuncoesController.citySmallName();
    console.log("exercicio8: ", exercicio8);
})();
