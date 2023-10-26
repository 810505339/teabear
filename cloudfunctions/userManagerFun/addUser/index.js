const cloud = require('wx-server-sdk');

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});
const db = cloud.database();


// 聚合记录云函数入口函数
exports.main = async (event, context) => {
  // 返回数据库聚合结果
  const wxContext = cloud.getWXContext();
  const openid=wxContext.OPENID;
  


  try {
    const user=await getUser(openid)
    console.log(user);
    if(user==undefined)
    {

      await AddUser(openid)
    }
    return {
      success: true,
      type:event.type,
    };
  } catch (error) {
    return {
      success: false,
      error:error
    };
  }
 
};

const  getUser=async(openid)=>{
  const user=await db.collection('user').where({
    openid:openid
  }).get();
  console.log(user);
  return user.data[0]
}

const AddUser=async (openid)=>{

  const data=await db.collection('user').count()
  const index=data.total+1
  await db.collection('user').add({
    data:{
      openid:openid,
      index:index
    }
  });
}