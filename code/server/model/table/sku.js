const Sequelize = require('sequelize')
const NBug = require('kuaizi').Exception.NBug

const sequelize = require('../index')

class Sku extends Sequelize.Model{}

Sku.init({
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get(){
      return this.getDataValue('price')/100
    },
    set(value){
      if(value != 0 && !value)
        throw NBug('价格未填写')
      if(!/^\d+(.\d+)$/.test(value)){
        value *=100
        if(value == value.toFixed(0))
          this.setDataValue('price', value)
      }
      throw NBug('价格格式不正确')
    }
  }
}, {
  sequelize
}).sync()

module.exports = Sku