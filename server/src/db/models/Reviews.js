module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {

    review: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    watchList: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    favorite: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

  })

  return Review
}
