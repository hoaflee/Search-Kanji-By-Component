const { Kanji, Component } = require('../models')

const config = require('../config/config')
const part = require('path')
var _ = require('lodash');

module.exports = {
  async components(req, res) {
    try {
      const params = req.query
      const components = await Component.findAll()
      
      let offset = (params.page - 1) * params.perPage
      let models = components
      res.status(200).send({
        currentPage: params.page,
        lastPage: Math.ceil(models.length / params.perPage),
        perPage: params.perPage,
        total: components.length,
        data: models.slice(offset, offset + params.perPage)
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to search components'
      })
    }
  },
  async gaijis(req, res) {
    try {
      let kanjis = null
      const params = req.query
      gaijiKey = JSON.parse(params.query).gaiji
      if (gaijiKey.length != 0) {
        kanjis = await Kanji.findAll({
          where: {
            gaiji: gaijiKey
          }
        });
      }  else {
        kanjis = await Kanji.findAll()   
      }        
      let offset = (parseInt(params.page,10) - 1) * parseInt(params.perPage,10)
      let models = kanjis
            
      res.status(200).send({
        currentPage: params.page,
        lastPage: Math.ceil(models.length / params.perPage),
        perPage: params.perPage,
        total: models.length,
        data: models.slice(offset, offset + parseInt(params.perPage,10))
      })
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to search kanji'
      })
    }
  },
  compsGrid(req, res) {
    res.status(200).send({
      'options': {
        'sort': 'id',
        'create': false,
        'update': true,
        'delete': false
      },
      'filters': {
        'model': {
          'stroke': '',
          'part': ''
          },
          'fields': {
            'stroke': {
              'label': 'Stroke'
            },
            'part': {
              'label': 'Part'
            }
          },
          'rules': {}
        },
      'columns': [
        {
          'text': 'Id',
          'value': 'id'
        },
        {
          'text': 'Stroke',
          'value': 'stroke'
        },
        {
          'text': 'Part',
          'value': 'part'
        }
      ]
    })
  },
  gaijiGrid(req, res) {
    res.status(200).send({
      'options': {
        'sort': 'id',
        'create': true,
        'update': true,
        'delete': true
      },
      'filters': {
        'model': {
          'gaiji': ''
          },
          'fields': {
            'gaiji': {
              'label': '外字'
            }
          },
          'rules': {}
        },
      'columns': [
        {
          'text': 'Id',
          'value': 'id'
        },
        {
          'text': '外字',
          'value': 'gaiji'
        },
        {
          'text': 'Part',
          'value': 'part'
        }
      ]
    })
  }
}