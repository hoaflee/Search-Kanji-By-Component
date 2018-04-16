const path = require('path')

module.exports = {
  port: process.env.PORT || 3128,
  db: {
    database: process.env.DB_NAME || 'kanji',
    user: process.emitWarning.DB_USER || 'postgres',
    password: process.env.DB_PASS || '123456',
    option: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      port: '5432'
    },
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'uec-jp',
      timestamps: true
    },
  }
}