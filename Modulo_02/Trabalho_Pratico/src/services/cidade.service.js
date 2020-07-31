import fetch from "node-fetch";
import fs from "fs";
import EstadoService from "./estado.service";
import { error } from "console";
class CidadeService {
    async getAll() {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json"
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllLocal() {
        try {
            const data = await fs.readFileSync("./results/cities.json");

            return JSON.parse(data);
        } catch (error) {
            throw error;
        }
    }

    async getAllByUf(uf) {
        const state = await EstadoService.findByUf(uf);

        if (!state) throw error("State not found");

        const all = await this.getAllLocal();

        return all.filter((x) => x.Estado === state.ID);
    }

    async countNameOfCitiesWithState() {
        const states = await EstadoService.getAllLocal();
        const cities = await this.getAllLocal();

        return states.map((item) => {
            const { Sigla, ID } = item;
            const citiesOfState = cities.filter((x) => x.Estado === ID);
            return {
                ID,
                ShortName: Sigla,
                Cities: citiesOfState.map((city) => {
                    const { Nome, Estado } = city;
                    return {
                        Name: Nome,
                        Length: Nome.trim().length,
                        StateId: Estado,
                    };
                }),
            };
        });

        // return cities.map((item) => {
        //     const { Nome, Estado } = item;
        //     const foundState = states.find((x) => x.ID === Estado);
        //     const { Sigla } = foundState;
        //     return {
        //         CityName: item.Nome,
        //         LengthName: Nome.trim().length,
        //         StateId: Estado,
        //         ShortNameState: Sigla,
        //     };
        //});
    }
}

export default new CidadeService();
