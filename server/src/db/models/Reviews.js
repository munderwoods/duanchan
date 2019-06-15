module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {

    review: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  })

  return Review
}
