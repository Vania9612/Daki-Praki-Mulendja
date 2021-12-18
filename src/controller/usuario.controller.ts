import { Request, Response } from 'express';
import sendSMS from '../services/sendSMS';
import Pessoa from '../models/pessoa.model';
import Usuario from '../models/usuario.model';
import generatePassword from '../services/generatePassword';

class usuarioController{

    async create(request: Request, response: Response){
        const {nome, contato, email, senha} = request.body;

        let erro = false;
        let msg = [];

        if(!nome){
            erro = true,
            msg.push("Informe o seu nome");
        }

        if(!contato){
            erro = true;
            msg.push("Informe o seu número de contato");
        }

        if(!email){
            erro = true;
            msg.push("Informe o seu email");
        }
        
        if(!senha){
            erro = true;
            msg.push("Defina a senha de acesso");
        }

        if(erro)
            return response.status(404).json({
                error: true,
                message: msg,
                data: null
            })
         
        try {
            const codigo = generatePassword.generateCode(6);
            const novaPessoa = await Pessoa.create({nome: nome, contato: contato, email: email, senha: senha});

            try {
                const novoUser = await Usuario.create({codigo: codigo, pessoa_id: novaPessoa.id});
                try {
                    const message = "Bem vindo(a), " + novaPessoa.nome + ", o seu código de ativação é: " + codigo;
                    const sms = sendSMS.sendMessage(novaPessoa.contato, message);
                
                } catch (error) {

                    await Pessoa.destroy({where:{id: novaPessoa.id}});
                    await Usuario.destroy({ where:{ id: novoUser.id}});
                    
                    return response.status(404).json({
                        error: true,
                        message: 'Falha no registro',
                        data: error
                    })  
                }

            } catch (error) {
                await Pessoa.destroy({where:{ id: novaPessoa.id}});
                return response.status(404).json({
                    error: true,
                    message: 'Falha ao salvar dados do usuário',
                    data: error
                })
            }
        
            return response.status(202).json({
                error: false,
                message: 'Registro feito com sucesso'
            })
        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha no registro',
                data: error
            })
        }

    }

    async read(request: Request, response: Response){
        try {
            const usuarios = await Usuario.findAll({});
            if(usuarios.length <= 0)
                return response.status(202).json({
                    error: false,
                    message: 'Sem usuários',
                    data: null
                })
            
            let lista = [];
            for (let index = 0; index < usuarios.length; index++) {
                const pessoa = await Pessoa.findOne({ where:{ id: usuarios[index].pessoa_id}});

                lista.push({
                    'id': pessoa.id,
                    'nome' : pessoa.nome,
                    'apelido' : pessoa.apelido ? pessoa.apelido : 'Desconhecido',
                    'contato' : pessoa.contato,
                    'sexo' : pessoa.sexo ? pessoa.sexo : 'Desconhecido',
                    'email' : pessoa.email ? pessoa.email : 'Desconhecido',
                    'dataNascimento' : usuarios[index].dataNascimento ? usuarios[index].dataNascimento : 'Desconhecida',
                    'tipoDocumento': usuarios[index].tipoDocumento ? usuarios[index].tipoDocumento : 'Desconhecido',
                    'nrDocumento' : usuarios[index].nrDocumento ? usuarios[index].nrDocumento : 'Desconhecido',
                    'estado': usuarios[index].estado,
                });
                
            }
            return response.status(202).json({
                error: false,
                message: 'Lista de usuários',
                data: lista
            })
        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha na listagem',
                data: error
            })
        }
    }

    async readOne(request: Request, response: Response){
        const id = request.params.id;

        if(!id)
            return response.status(400).json({
                error: true,
                message: 'Selecione o usuario',
                data: null
            })
        try {
            const pessoa = await Pessoa.findOne({where:{ id: id}});
            if(!pessoa)
                return response.status(404).json({
                    error: true,
                    message: 'Usuário não foi encontrado',
                    data: null
                })
            
                try {
                    const usuario = await Usuario.findOne({ where: {pessoa_id: pessoa.id}});

                    return response.status(202).json({
                        error: false,
                        message: 'Dados do usuário',
                        data: {
                            'id': pessoa.id,
                            'nome' : pessoa.nome,
                            'apelido' : pessoa.apelido ? pessoa.apelido : 'Desconhecido',
                            'contato' : pessoa.contato,
                            'sexo' : pessoa.sexo ? pessoa.sexo : 'Desconhecido',
                            'email' : pessoa.email ? pessoa.email : 'Desconhecido',
                            'dataNascimento' : usuario.dataNascimento ? usuario.dataNascimento : 'Desconhecida',
                            'tipoDocumento': usuario.tipoDocumento ? usuario.tipoDocumento : 'Desconhecido',
                            'nrDocumento' : usuario.nrDocumento ? usuario.nrDocumento : 'Desconhecido',
                            'estado': usuario.estado,
                        }
                    })
                } catch (error) {
                    return response.status(404).json({
                        error: true,
                        message: 'Falha ao listar dados do usuário',
                        data: error
                    })
                }
        } catch (error) {
            return response.status(404).json({
                error: true,
                message: 'Falha buscando usuário',
                data: error
            })
        }
    }
    
}
export {usuarioController}