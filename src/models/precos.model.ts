import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface PrecI{
    id: number,
    peso: number,
    sul: number,
    centro: number,
    norte: number,
}

export default class Precos extends Model implements PrecI{
    id: number;
    peso: number;
    sul: number;
    centro: number;
    norte: number;
}

Precos.init(
    {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        peso:{
            type: DataType.FLOAT,
            unique: true,
            allowNull: false
        },
        sul:{
            type: DataType.FLOAT,
            allowNull: false
        },
        centro:{
            type: DataType.FLOAT,
            allowNull: false
        },
        norte:{
            type: DataType.FLOAT,
            allowNull: false
        }
    },{
        tableName: "precos",
        sequelize: database
    }
)