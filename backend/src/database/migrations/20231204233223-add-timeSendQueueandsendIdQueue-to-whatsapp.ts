import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
        queryInterface.addColumn("Whatsapps", "timeSendQueue", {
          type: DataTypes.NUMBER,
          defaultValue: 0
        }),
        queryInterface.addColumn("Whatsapps", "sendIdQueue", {
          type: DataTypes.NUMBER,
          defaultValue: null,
          allowNull: true
        })
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return Promise.all([
        queryInterface.removeColumn("Whatsapps", "timeSendQueue"),
        queryInterface.removeColumn("Whatsapps", "sendIdQueue")
    ]);
  }
};
