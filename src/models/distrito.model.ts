import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface DistI{
    id: number,
    nome: string,
    codigo: string,
    provincia_id: number
}

export default class Distrito extends Model implements DistI{
    id: number;
    nome: string;
    codigo: string;
    provincia_id: number;
}

Distrito.init(
    {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nome:{
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        codigo:{
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        provincia_id:{
            type: DataType.INTEGER,
            allowNull: false
        }
    },{
        tableName: "distritos",
        sequelize: database
    }
)