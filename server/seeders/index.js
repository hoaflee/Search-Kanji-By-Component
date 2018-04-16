const {
  sequelize,
  Kanji,
  Component
} = require('../src/models')

const Promise = require('bluebird')
const kanjis = require('./kanji-full.json')
const components = require('./component.json')

sequelize.sync({ force: true })
  .then(async function () {
    await Promise.all(
      kanjis.map(kanji => {
        Kanji.create(kanji)
      })
    )

    await Promise.all(
      components.map(comp => {
        Component.create(comp)
      })
    )
  })
