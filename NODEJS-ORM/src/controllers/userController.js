const sequelize = require("../models");

const initModels = require("../models/init-models");
const model = initModels(sequelize);
const {successCode, failCode, errorCode} = require("../ultis/response");

const addOrder = async (req, res)=>{
    const {user_id, food_id, amount} = req.body;
    const checkUser = await model.users.findOne({attributes: ['user_id'], where: {
        user_id, 
    }
    })
    const checkFood = await model.food.findOne({attributes: ['food_id'], where:{
        food_id
    }});
    if(checkUser && checkFood){
        try{
            const newOrder = {
                user_id,
                food_id,
                amount
            }
            const result = await model.orders.create(newOrder);
            successCode(res, result, "Thêm order thành công");
        }catch(err){
            errorCode(res, err, `Lỗi ${err} - đã tồn tại order này`);
        }
    }else{
        failCode(res, "lỗi nhập user_id hoặc food_id", `thêm order không thành công user_id: ${user_id} hoặc food_id: ${food_id} không tồn tại`);
    } 
}

module.exports = {
    addOrder    
}

