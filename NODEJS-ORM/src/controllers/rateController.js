const sequelize = require('../models');
const initModels = require('../models/init-models');
const {successCode, failCode, errorCode} = require("../ultis/response");

const model = initModels(sequelize);

const getRate = async (req, res) =>{
    const {user_id, res_id} = req.body;
    const checkRate = await model.rate_res.findOne({where: {
        user_id,
        res_id
    }})
    if(checkRate){
        try{
            const result = await model.rate_res.findAll({where: {
                user_id,
                res_id
            }})
             successCode(res, result, "Lấy rate thành công");
        }catch(err){
            errorCode(res, err, "Lỗi! Lấy rate thất bại")
        }
    }else{
        failCode(res, "", `không tồn tại user_id: ${user_id} hoặc res_id: ${res_id}`);
    }
}

const addRate = async (req, res) =>{
    const {user_id, res_id, amount} = req.body;
    const checkUser = await model.users.findOne({attributes: ['user_id'], where: {
        user_id, 
    }
    })
    const checkRes = await model.restaurant.findOne({attributes: ['res_id'], where:{
        res_id
    }});
    if(checkUser && checkRes){
        try{
            const newRate = {
                user_id,
                res_id,
                amount
            }
            const result = await model.rate_res.create(newRate);
            successCode(res, result, "Thêm rate thành công");
        }catch(err){
            errorCode(res, err, `Lỗi ${err} - đã tồn tại rate này`);
        }
    }else{
        failCode(res, "lỗi nhập user_id hoặc res_id", `thêm rate không thành công user_id: ${user_id} hoặc res_id: ${res_id} không tồn tại`);
    } 
}

module.exports = {
    getRate,
    addRate   
}