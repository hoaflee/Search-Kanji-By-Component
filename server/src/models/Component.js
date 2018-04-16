module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
    part: {type: DataTypes.STRING, allowNull: false},
    stroke: {type: DataTypes.INTEGER, allowNull: false}
  })

  return Component
}