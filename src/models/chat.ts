import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Chat extends Model {
    public userId! : string;
    public message!: string;
    public time!: Date;
    public status!: string;
}

Chat.init({
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
sequelize,
tableName: 'Chat',
});

export default Chat