import {Sequelize} from 'sequelize-typescript';

// import Usuario from '../models/usuario.model';

const sequelize = new Sequelize('dakipraki', 'root', '', {
    repositoryMode: true,
    host: "localhost",  
    dialect: "mysql"
});


 
// const sequelize = new Sequelize('d97vmes8o8ago7', 'zmnwsatpquuvnp', '0d6c39685dcf123d9242833e5cf4e7cf55412d9ecf5da4202955d302e67c0c49', {
//     repositoryMode: true,
//     port: 5432,
//     host: 'ec2-3-209-38-221.compute-1.amazonaws.com',
//     dialect: "postgres",
//     "dialectOptions":{
//         ssl:{
//             require: true,
//             rejectUnauthorized: false
//         } 
//     }
// });

export default sequelize;