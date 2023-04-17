module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define("Todos", {
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    complete: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0,
    },
  })
  return todos;
}