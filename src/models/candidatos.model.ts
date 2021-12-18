import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface CandI{
    id: number,
    encomenda_id: number,
    candidato_id: number,
    aprovado: boolean
}

export default class Candidatos extends Model implements CandI{
    id: number;
    encomenda_id: number;
    candidato_id: number;
    aprovado: boolean
}

Candidatos.init(
    {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        encomenda_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        candidato_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        aprovado:{
            type: DataType.BOOLEAN,
            defaultValue: false
        }
    },{
        tableName: "candidatos",
        sequelize: database
    }
)