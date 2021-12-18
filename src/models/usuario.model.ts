import { DataType, Model } from "sequelize-typescript";
import database from '../database';


export interface UserI {
    id: number;
    dataNascimento: Date;
    tipoDocumento: number;
    nrDocumento: string;
    endereco_id: number;
    pessoa_id: number;
    codigo: string;
    estado: boolean
}


export default class Usuario extends Model implements UserI {
    id: number;
    dataNascimento: Date;
    tipoDocumento: number;
    nrDocumento: string;
    endereco_id: number;
    pessoa_id: number;
    codigo: string;
    estado: boolean
}

Usuario.init(
    {
        id:{
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dataNascimento: {
            type: DataType.DATEONLY,
            allowNull: true
        },
        tipoDocumento:{
            type: DataType.INTEGER
        },
        nrDocumento:{
            type: DataType.STRING,
            unique: true
        },
        codigo:{
            type: DataType.STRING,
            allowNull: true
        }, 
        estado:{
            type: DataType.BOOLEAN,
            defaultValue: false
        },
        endereco_id:{
            type: DataType.INTEGER
        },
        pessoa_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
    },
    {
        tableName: 'usuario',
        sequelize: database
    }
)