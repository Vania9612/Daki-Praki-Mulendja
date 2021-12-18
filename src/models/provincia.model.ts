import database from "../database";
import { DataType, Model } from "sequelize-typescript";

export interface ProvI{
    id: number,
    nome: string,
    codigo: string
    zona: number;
}

export default class Provincia extends Model implements ProvI{
    id: number;
    nome: string;
    codigo: string;
    zona: number;
}

Provincia.init(
    {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome:{
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        codigo:{
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        zona:{
            type: DataType.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'provincia',
        sequelize: database
    }
)