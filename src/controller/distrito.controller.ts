import { Request, Response } from 'express';
import Distrito from '../models/distrito.model';

class distritoController{
    async read(request: Request, response: Response){
        try {
            const distritos = await Distrito.findAll({});
            if(distritos.length <= 0)
                return response.status(404).json({
                    error: true,
                    message: 'Sem dados',
                    data: null
                })
            return response.status(202).json({
                error: false,
                message: 'Lista de distritos',
                data: distritos
            })
        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha ao listar distritos',
                data: error
            })
        }
    }

    async readOne( request: Request, response: Response){
        if(!request.params.id)
            return response.status(400).json({
                error: true,
                message: 'Nenhum distrito foi selecionado',
                data: null
            })
        
        const id = request.params.id;
        try {
            const distrito = await Distrito.findOne({ where:{ id: id}});

            if(!distrito)
                return response.status(404).json({
                    error: true,
                    message: 'Distrito não achado',
                    data: null
                })
            return response.status(202).json({
                error: false,
                message: 'Distrito achado',
                data: distrito
            })
        } catch (error) {
            
        }

    }
}

export {distritoController}