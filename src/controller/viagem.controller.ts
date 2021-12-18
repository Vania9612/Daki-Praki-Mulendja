import { Request, Response } from 'express';
import Distrito from '../models/distrito.model';
import Provincia from '../models/provincia.model';
import Endereco from '../models/endereco.model';
import Pessoa from '../models/pessoa.model';
import Usuario from '../models/usuario.model';
import Viagem from '../models/viagem.model';
 
class viagemController {
    async addViagem(request: Request, response: Response) {
        const { data_ida, provincia, distrito, bairro } = request.body;

        try {
            const pessoa = await Pessoa.findOne({ where: { id: request.userId } });

            if(!pessoa)
                return response.status(404).json({
                    error: true,
                    message: 'Erro de autênticação',
                    data: null
                })
            try {
                const usuario = await Usuario.findOne({where:{pessoa_id: pessoa.id}});

                let erro = false;
                let msg = [];
        
                
        
                if (erro)
                    return response.status(400).json({
                        error: true,
                        message: msg,
                        data: null
                    })

                if (!data_ida) {
                    erro = true;
                    msg.push("Informe a data de partida");
                }
            
                if (!provincia) {
                    erro = true;
                    msg.push("Informe a província de destino");
                }
                if (!distrito) {
                    erro = true;
                    msg.push("Informe a destríto de destino");
                }

                if (erro)
                    return response.status(400).json({
                        error: true,
                        message: msg,
                        data: null
                    })
                
                try {
                    const endereco = await Endereco.create({ provincia_id: provincia, distrito_id: distrito, bairro: bairro});

                    try {
                        const viagem = await Viagem.create({ data_ida: data_ida, endereco_id: endereco.id, pessoa_id: request.userId });
                        return response.status(202).json({
                            error: false,
                            message: 'Viagem adicionada',
                            data: null
                        })
                    } catch (error) {
                        await Endereco.destroy({where:{id: endereco.id}});
                        return response.status(404).json({
                            error: true,
                            message: 'Falha ao adicionar viagem',
                            data: error
                        })
                    }
                    
                } catch (error) {
                    return response.status(404).json({
                        error: true,
                        message: 'Falha ao adicionar endereço da viagem',
                        data: error
                    })
                }

            } catch (error) {
                return response.status(404).json({
                    error: true,
                    message: 'Falha buscando dados do usuário',
                    data: null
                })
            }

        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha buscando dados',
                data: null
            })
        }

    }

    async readViagem(request: Request, response: Response) {
        try {
            const viagens = await Viagem.findAll({ where: { pessoa_id: request.userId } });
            console.log(viagens)

            if (viagens.length <= 0)
                return response.status(204).json({
                    error: false,
                    message: 'Usuário sem viagens marcadas',
                    data: null
                })

            let lista = [];
            console.log(viagens.length)
            for (let index = 0; index < viagens.length; index++) {
                const endereco = await Endereco.findOne({where:{id: viagens[index].endereco_id}});
                console.log(endereco);
                const provincia = await Provincia.findOne({where:{id: endereco.provincia_id}});
                console.log(provincia);
                const distrito = await Distrito.findOne({where:{codigo: endereco.distrito_id}});
                console.log(distrito);
                const today = new Date();
                console.log(today);
                const currentDateFormatted = Date.parse(today.toISOString().substring(0,10));
                const dataDaViagem = Date.parse(viagens[index].data_ida.toString());

if(dataDaViagem >= currentDateFormatted){
    lista.push({
        'id': viagens[index].id,
        'data_ida': viagens[index].data_ida,
        'avenida': endereco.avenida ? endereco.avenida : 'Não foi informada',
        'rua': endereco.rua ? endereco.rua : 'Não foi informada',
        'bairro': endereco.bairro ? endereco.bairro : 'Não foi informado',
        'provincia': provincia.nome ? provincia.nome : 'Não foi informado',
        'distrito': distrito.nome ? distrito.nome : 'Não foi informado'
    })
}
               
                
            }
            return response.status(200).json({
                error: false,
                message: 'Lista de viagens marcadas',
                data: lista
            })

        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha ao listar viagens',
                data: error
            })
        }
    }
}

export { viagemController }