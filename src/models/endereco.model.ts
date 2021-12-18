import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface EnderecoI{   
    id: number;
    distrito_id: number;
    provincia_id: number;
    bairro: string;
    avenida: string;
    rua: string;
    encomenda: boolean
}

export default class Endereco extends Model implements EnderecoI{
    id: number;
    avenida: string;
    rua: string;
    bairro: string;
    distrito_id: number;
    provincia_id: number;
    encomenda: boolean
}

Endereco.init(
    {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        avenida:{
            type: DataType.STRING
        },
        rua:{
            type: DataType.STRING
        },
        bairro:{
            type: DataType.STRING
        },
        distrito_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        provincia_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        encomenda:{
            type: DataType.BOOLEAN,
            defaultValue: false
        }

    },{
        tableName: "endereco",
        sequelize: database
    }
)