const bcrypt = require('bcryptjs');

// Encriptamos!
const encrypt = async(textPlain)=>{
    const hash =await bcrypt.hash(textPlain,10);
    return hash;
}
// comparamos!
const compare= async(passwordPlain,Hashpassword)=>{
    return await bcrypt.compare(passwordPlain,Hashpassword);
}

module.exports={encrypt,compare}