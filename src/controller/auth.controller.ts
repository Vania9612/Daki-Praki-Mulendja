import { Request, Response } from 'express';
import Usuario from '../models/usuario.model';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/authConfig';
import Pessoa from '../models/pessoa.model';

class authController {
    async ativar(request: Request, response: Response){
        const {codigo} = request.body;
        
        if(!codigo){
            return response.status(400).json({
                error: true,
                message: 'Introduza o código de validação',
                data: null
            })
        }

        try {
            const usuario = await Usuario.findOne({ where:{ codigo: codigo}});
            if(!usuario)
                return response.status(404).json({
                    error: true,
                    message: 'Código inválido',
                    data: null
                })
            try {
                await Usuario.update({ estado: true, codigo: null}, {where:{id: usuario.id}});
                return response.status(202).json({
                    error: false,
                    message: 'Usuário autenticado',
                    data: null
                })
            } catch (error) {
                return response.status(404).json({
                    error: true,
                    message: 'Falha autenticando o usuário',
                    data: error
                })
            }
        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha ao buscar dados do usuario',
                data: error
            })
        }

    }

    async login(request: Request, response: Response) {
        console.log(request.body)
        const { email, senha } = request.body;

        let erro = false;
        let msg = [];

        if (!email) {
            erro = true,
                msg.push("Informe o email ou contato");
        }

        if (!senha) {
            erro = true,
                msg.push("Informe a senha");
        }

        if (erro)
            return response.status(404).json({
                error: true,
                data: msg
            })
        
        let pessoa = null;
        pessoa = await Pessoa.findOne({ where:{email: email}});
        if(!pessoa)
            pessoa = await Pessoa.findOne({ where: {contato: email}});
        
        if(!pessoa)
            return response.status(404).json({
                error: true,
                message: 'O usuario não existe',
                data: null
            })
        
        const compared = await compare(senha, pessoa.senha);
        if(!compared)
            return response.status(403).json({
                error: true,
                message: 'Acesso negado',
                data: null
            })

        try {
            const usuario = await Usuario.findOne({ where:{pessoa_id: pessoa.id}});
            if(!usuario)
                return response.status(404).json({
                    error: true,
                    message: 'Usuário não existe',
                    data: null
                })

            if(!usuario.estado)
                return response.status(401).json({
                    error: true,
                    message: 'Conta desativada',
                    data: null
                })

            delete pessoa.senha;
            var token = sign({ id: pessoa.id }, authConfig.jwt.secret, {
                subject: String(pessoa.id),
                expiresIn: authConfig.jwt.expiresIn
            });

            const objeto = {
                'id' : pessoa.id,
                'nome': pessoa.nome,
                'apelido': pessoa.nome ? pessoa.nome : 'Desconhecido',
                'contato': pessoa.contato,
                'sexo': pessoa.sexo ? pessoa.sexo : 'Desconhecido',
                'email': pessoa.email ? pessoa.email : 'Desconhecido',
                'dataNascimento' : usuario.dataNascimento ? usuario.dataNascimento : 'Desconhecida',
                'tipoDocumento': usuario.tipoDocumento ? usuario.tipoDocumento : 'Desconhecido',
                'nrDocumento' : usuario.nrDocumento ? usuario.nrDocumento : 'Desconhecido',
                'estado': usuario.estado, 
            }
            
            return response.status(200).json(
                {
                    error: false,
                    objeto,
                    token
                }
            )

        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha buscando dados do usuário',
                data: error
            })
        }


    }
}

export { authController }