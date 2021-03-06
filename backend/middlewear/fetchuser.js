var jwt=require('jsonwebtoken');
const JWT_SECRET='mansithepasswo$rd';
const fetchuser=(req,res,next)=>
{   
    //get the user from jwt token and id to req object
    const token=req.header(`auth-token`);
    if(!token)
    {
       res.status(401).send("Please authenticate using the  valid token");
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
    } catch (error) {
        res.status(401).send("Please authenticate using the  valid token");
    }
       next();
}
module.exports=fetchuser;