import { DataType, Model } from "sequelize-typescript";
import database from '../database';

export interface CategI{
    id: number,
    descricao: string
}

export default class Categoria extends Model implements CategI{
    id: number;
    descricao: string;
}

Categoria.init(
    {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        descricao:{
            type: DataType.STRING,
            unique: true,
            allowNull: false
        }
    },{
        tableName: "categoria",
        sequelize: database
    }
)