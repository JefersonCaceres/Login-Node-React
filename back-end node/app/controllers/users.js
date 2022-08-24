const {httpError}= require('../helpers/handlerError');
const userModel = require('../models/users');
const {encrypt,compare} = require('../helpers/handleBcrypt');


//Login!
const loginCtrl=async(req,res)=>{
try{
    const {username,password}=req.body;
    const usuario= await userModel.findOne({username});
    if(!usuario){
        res.status(404);
        res.send({error: 'User not found algo pasoS'});
    }
    const checkPassword= await compare(password, usuario.password);
    if(checkPassword){
        res.send({
            data: usuario    
        })
        return;
    }
    if(!checkPassword){
        res.status(409);
        res.send({
            error: 'Invalid Password'
        })
        return;
    }
}
catch(e){httpError(res,e)}
}
// Registramos usuario
const registerCtrl = async(req, res)=>{
    try{
        const { name, username, password } = req.body;
        const passwordHash = await encrypt(password);
        const registerUser = await userModel.create({
            name,
            username,
            password: passwordHash
        });
        res.send({data: registerUser});
    }catch(e){
        httpError(res,e);
    }}

    

module.exports={loginCtrl,registerCtrl}