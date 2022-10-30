const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const models = initModels(sequelize);
const {successCode, failCode, errorCode} = require("../ultis/response");

const getLike = async (req, res) =>{
    const {user_id, res_id} = req.body;
    const checkLike = await models.rate_res.findOne({where: {
        user_id,
        res_id
    }})
    if(checkLike){
        try{
            const result = await models.like_res.findAll({where: {
                user_id,
                res_id,
            }})
            successCode(res, result, "Lấy danh sách like thành công");
        }catch(err){
            errorCode(res, "", `lỗi ${err}`)
        }
    }else{
        failCode(res, "", `không tồn tại user_id: ${user_id} hoặc res_id: ${res_id}`);
    }
}

const addLike = async (req, res) =>{
    const {user_id, res_id} = req.body;
    const checkUser = await models.users.findOne({attributes: ['user_id'], where: {
        user_id, 
    }
    })
    const checkRes = await models.restaurant.findOne({attributes: ['res_id'], where:{
        res_id
    }});
    if(checkUser && checkRes){
        try{
            const newLike = {
                user_id,
                res_id
            }
            const result = await models.like_res.create(newLike);
            successCode(res, result, "Thêm like thành công");
        }catch(err){
            errorCode(res, err, `Lỗi ${err} - đã tồn tại like này`);
        }
    }else{
        failCode(res, "lỗi nhập user_id hoặc res_id", `thêm like không thành công user_id: ${user_id} hoặc res_id: ${res_id} không tồn tại`);
    } 
}

const removeLike = async (req, res) =>{
    const {user_id, res_id} = req.body;
    try{
        const result = await models.like_res.destroy({where: {
            user_id,
            res_id,
        }});
        successCode(res, result, "Xóa like thành công");
    }catch(err){
        errorCode(res, err, "Xóa like không thành công");
    }
}
    

module.exports = {
    addLike,
    getLike,
    removeLike
}