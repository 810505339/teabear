const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();


// 聚合记录云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库聚合结果
  const wxContext = cloud.getWXContext();
  const user=await db.collection('user').where({
    openid:wxContext.openid
  }).get();
 return user
};