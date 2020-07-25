const Sequelize = require('sequelize')

// 数据库配置
module.exports = new Sequelize({
  host: '118.25.100.53',
  username: 'root',
  password: '1234',
  dialect: 'mysql',
  database: 'kuaizi-shop'
})