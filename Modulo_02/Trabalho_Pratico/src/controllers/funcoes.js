import CidadeService from "./../services/cidade.service";
import EstadoService from "./../services/estado.service";
import fs from "fs";
import { error } from "console";
import { format } from "path";

class FuncoesController {
    async initialCharge() {
        const cities = await CidadeService.getAll();
        const states = await EstadoService.getAll();

        if (!fs.existsSync("./results")) {
            fs.mkdirSync("./results");
        }

        if (cities) {
            fs.writeFile(
                `./results/cities.json`,
                JSON.stringify(cities),
                (err) => {
                    if (err) console.log(err);
                }
            );
        }

        if (states) {
            fs.writeFile(
                `./results/states.json`,
                JSON.stringify(states),
                (err) => {
                    if (err) console.log(err);
                }
            );
        }
    }

    async createFileByState() {
        try {
            const response = await EstadoService.getAllLocal();

            if (!fs.existsSync("./results/states")) {
                fs.mkdirSync("./results/states");
            }

            response.map((item) => {
                fs.writeFile(
                    `./results/states/${item.Sigla}.json`,
                    "",
                    (err) => {
                        if (err) console.log(err);
                    }
                );
            });

            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async countCityByStateShortName(uf) {
        try {
            if (!uf) throw error("Params uf is required");

            return EstadoService.countCityByStateShortName(uf);
        } catch (error) {
            throw error;
        }
    }

    async fiveStateHasMoreCities() {
        let newArray = await EstadoService.getStateConcatWithCountCities();

        newArray = newArray
            .sort((a, b) => {
                return b.Count - a.Count;
            })
            .splice(0, 5);

        newArray = newArray.map((item) => {
            return item.Sigla + " - " + item.Count;
        });
        return newArray;
    }

    async fiveStateHasLessCities() {
        let newArray = await EstadoService.getStateConcatWithCountCities();

        newArray = newArray
            .sort((a, b) => {
                return a.Count - b.Count;
            })
            .splice(0, 5);

        newArray = newArray.map((item) => {
            return item.Sigla + " - " + item.Count;
        });
        return newArray;
    }

    async cityBigNameByState() {
        let newArray = await CidadeService.countNameOfCitiesWithState();

        newArray = newArray.sort((a, b) => {
            a.ID - a.ID;
        });

        let result = [];
        for (let i in newArray) {
            const { ShortName, Cities } = newArray[i];

            const cityOfBigName = Cities.sort((a, b) => {
                return b.Length - a.Length;
            }).splice(0, 1)[0];
            //console.log(cityOfBigName);
            result.push(cityOfBigName.Name + " - " + ShortName);
        }

        return result;
    }

    async citySmallNameByState() {
        let newArray = await CidadeService.countNameOfCitiesWithState();

        newArray = newArray.sort((a, b) => {
            a.ID - a.ID;
        });

        let result = [];
        for (let i in newArray) {
            const { ShortName, Cities } = newArray[i];

            const cityOfBigName = Cities.sort((a, b) => {
                return a.Length - b.Length;
            }).splice(0, 1)[0];
            //console.log(cityOfBigName);
            result.push(cityOfBigName.Name + " - " + ShortName);
        }

        return result;
    }

    async cityBigName() {
        let newArray = await CidadeService.countNameOfCitiesWithState();

        newArray = newArray.sort((a, b) => {
            a.ID - a.ID;
        });

        let citiesLength = [];
        for (let i in newArray) {
            const { ShortName, Cities } = newArray[i];

            const cityOfBigName = Cities.sort((a, b) => {
                return b.Length - a.Length;
            })
                .sort((a, b) => {
                    return a.Name - b.Name;
                })
                .splice(0, 1)[0];
            //console.log(cityOfBigName);
            citiesLength.push({
                Name: cityOfBigName.Name,
                Length: cityOfBigName.Length,
                StateName: ShortName,
            });
        }

        const result = citiesLength.sort((a, b) => {
            return b.Length - a.Length;
        })[0];

        return result.Name + " - " + result.StateName;
    }

    async citySmallName() {
        let newArray = await CidadeService.countNameOfCitiesWithState();

        newArray = newArray.sort((a, b) => {
            a.ID - a.ID;
        });

        let citiesLength = [];
        for (let i in newArray) {
            const { ShortName, Cities } = newArray[i];

            const cityOfBigName = Cities.sort((a, b) => {
                return b.Length - a.Length;
            }).splice(0, 1)[0];
            //console.log(cityOfBigName);
            citiesLength.push({
                Name: cityOfBigName.Name,
                Length: cityOfBigName.Length,
                StateName: ShortName,
            });
        }

        const result = citiesLength.sort((a, b) => {
            return a.Length - b.Length;
        })[0];

        return result.Name + " - " + result.StateName;
    }
}

export default new FuncoesController();
