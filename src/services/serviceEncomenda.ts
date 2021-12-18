import { response } from "express";
import Precos from "../models/precos.model";

class serviceEncomenda {
    async generatePrice(zonaDestino: number, zonaProve: number, encoPeso: number) {

        const dif = Math.abs(zonaProve - zonaDestino);
        try {
            const preco = await Precos.findOne({where:{ peso: encoPeso}});
            if(dif <= 1)
                return preco.sul;
            if( dif == 2)
                return preco.norte;
        } catch (error) {
            return false;
        }
            
    
    }
}

export default new serviceEncomenda();