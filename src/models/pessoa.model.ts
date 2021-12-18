import { DataType, Model } from "sequelize-typescript";
import database from '../database';
import bcrypt from 'bcrypt';


export interface PessoaI {
    id: number;
    nome: string;
    apelido: string;
    contato: string;
    sexo: string;
    email: string;
    senha: string;
}


export default class Pessoa extends Model implements PessoaI {
    id: number;
    nome: string;
    apelido: string;
    contato: string;
    email: string;
    senha: string;
    sexo: string;
}

Pessoa.init(
    {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataType.STRING(200)
        },
        apelido: {
            type: DataType.STRING(200),
            allowNull: true
        },
        contato: {
            type: DataType.STRING(15),
            allowNull: false
        },
        sexo:{
            type: DataType.STRING,
            allowNull: true
        },
        email:{ 
            type: DataType.STRING(200),
            allowNull: true,
            unique: true
        },
        senha:{
            type: DataType.TEXT,
            allowNull: false
        }
    },
    {
        tableName: 'pessoa',
        sequelize: database
    }
)

Pessoa.beforeCreate((user, option) => {
    return bcrypt.hash(user.senha, 10)
        .then(hash => {
            user.senha = hash
        })
        .catch(erro => {
            console.log("No password");
        })
})