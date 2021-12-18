import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface ViagI{ 
    id: number,
    data_ida: Date,
    endereco_id: number,
    pessoa_id: number
}

export default class Viagem extends Model implements ViagI{
    id: number;
    data_ida: Date;
    endereco_id: number;
    pessoa_id: number
    
}

Viagem.init(
    {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        data_ida:{
            type: DataType.DATEONLY,
            allowNull: false
        },
        endereco_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        pessoa_id:{
            type: DataType.INTEGER,
            allowNull: false
        }
    },{
        tableName: "viagem",
        sequelize: database
    }
)