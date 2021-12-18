import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface EncI {
    id: number,
    codigo: string,
    peso: number,
    preco: number,
    provinciaProv: number,
    endereco_id: number,
    categoria_id: number,
    pessoa_id: number,
    receptor_id: number,
    descricao: string,
    atribuida: boolean
}

export default class Encomenda extends Model implements EncI {
    id: number;
    codigo: string;
    peso: number;
    preco: number;
    provinciaProv: number;
    endereco_id: number;
    categoria_id: number;
    pessoa_id: number;
    receptor_id: number;
    descricao: string;
    atribuida: boolean;
}

Encomenda.init(
    {
        id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        codigo: {
            type: DataType.STRING,
            allowNull: true
        },
        peso: {
            type: DataType.FLOAT,
            allowNull: true
        },
        preco: {
            type: DataType.FLOAT,
            allowNull: true
        },
        provinciaProv:{
            type: DataType.INTEGER,
            allowNull: false
        },
        endereco_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        categoria_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        pessoa_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        receptor_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        descricao: {
            type: DataType.TEXT,
            allowNull: false
        },
        atribuida: {
            type: DataType.BOOLEAN,
            defaultValue: false
        }
    }, {
    tableName: "encomenda",
    sequelize: database
}
)