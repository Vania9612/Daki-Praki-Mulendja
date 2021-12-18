import { Request, Response} from 'express';
import Provincia from '../models/provincia.model';

class provinciaController{
    async read( request: Request, response: Response){
        try {
            const provincias = await Provincia.findAll({});
            if(provincias.length <= 0)
                return response.status(404).json({
                    error: true,
                    message: 'Sem dados',
                    data: null
                })
            return response.status(202).json({
                error: false,
                message: 'Lista de províncias',
                data: provincias
            })
        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha ao listar províncias',
                data: error
            })
        }
    }

    async readOne( request: Request, response: Response){
        if(!request.params.id)
            return response.status(400).json({
                error: true,
                message: 'Nenhuma província foi selecionada',
                data: null
            })
        
        const id = request.params.id;
        try {
            const provincia = await Provincia.findOne({ where:{ id: id}});

            if(!provincia)
                return response.status(404).json({
                    error: true,
                    message: 'Província não achada',
                    data: null
                })
            return response.status(202).json({
                error: false,
                message: 'Província achada',
                data: provincia
            })
        } catch (error) {
            
        }

    }
}

export {provinciaController}