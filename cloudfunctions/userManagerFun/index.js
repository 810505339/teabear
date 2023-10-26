// 云函数入口文件
const cloud = require('wx-server-sdk')
const AddUser=require('./addUser/index')
const findUser=require('./findUser/index')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {

  switch (event.type) {
    case 'addUser':
      return await AddUser.main(event,context)
    case 'findUser':
      return await findUser.main(event,context)
  }
}