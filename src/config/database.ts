import {Sequelize} from 'sequelize';
const sequelize = new Sequelize('USERS', 'username', 'password', {
    host:'127.0.0.1',
    dialect:'mysql',
    port: 3306,
});

export default sequelize;