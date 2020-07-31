import fs from "fs";
import CidadeService from "./cidade.service";

import fetch from "node-fetch";
class EstadoService {
    async getAll() {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json"
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    async getAllLocal() {
        try {
            const data = await fs.readFileSync("./results/states.json");

            return JSON.parse(data);
        } catch (error) {
            throw error;
        }
    }
    async findByUf(uf) {
        try {
            const data = await this.getAllLocal();

            var state = data.find((x) => x.Sigla === uf);

            return state;
        } catch (error) {
            throw error;
        }
    }

    async countCityByStateShortName(uf) {
        try {
            if (!uf) throw error("Params uf is required");

            const cities = await CidadeService.getAllByUf(uf);

            return cities.length;
        } catch (error) {
            throw error;
        }
    }

    async getStateConcatWithCountCities() {
        const states = await this.getAllLocal();
        let newArray = [];

        for (let item in states) {
            // console.log(item);

            const { Sigla } = states[item];
            const Count = await this.countCityByStateShortName(Sigla);

            newArray.push({
                Sigla,
                Count,
            });
        }

        return newArray;
    }
}

export default new EstadoService();
