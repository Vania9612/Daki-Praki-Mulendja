import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface RecpI{
    id: number,
    pessoa_id: number,
    encomendante: number,
}

export default class Receptor extends Model implements RecpI{
    id: number;
    pessoa_id: number;
    encomendante: number
}

Receptor.init(
    {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        pessoa_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        encomendante:{
            type: DataType.INTEGER,
            allowNull: false
        }
    },{
        tableName: 'receptor',
        sequelize: database
    }
)