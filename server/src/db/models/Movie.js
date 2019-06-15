module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    synopsis: {
      type: DataTypes.STRING(2500),
      allowNull: false,
    },

    trailer: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    must: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    period: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    review: {
      type: DataTypes.STRING(2500),
      allowNull: false,
    },

    still: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  })

  /*
  Movie.associate = models => {
    Movie.hasMany(models.Group, {
      foreignKey: 'userId'
    })
  }
  */

  return Movie
}
