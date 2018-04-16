module.exports = (sequelize, DataTypes) => {
  const Kanji = sequelize.define('Kanji', {
    gaiji: {type: DataTypes.STRING, allowNull: false},
    part: {type: DataTypes.TEXT, allowNull: false}
  })

  return Kanji
}