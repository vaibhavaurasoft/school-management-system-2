const Role = require("../model/role/roleSchema")
const TryCatch = require("../middelwear/TryCatch");

// careate user role 
const RegisterRole = TryCatch(async (req, res) => {
  const { name } = req.body;
  const user = await Role.create({
    name,
  });
  res.json({ sucess: "user created succesfull", user: user });
});

// delete user Role

const UpdateRole = TryCatch(async(req,res)=>{
  const roleId = req.body;

  const role = await Role.findById(roleId)
  
})

module.exports= {
    RegisterRole
}