const Role = require("../../model/role/roleSchema");
const TryCatch = require("../../middelwear/TryCatch");

// careate user role
const RegisterRole = TryCatch(async (req, res) => {
  const { name } = req.body;
  const user = await Role.create({
    name,
  });
  res.json({ sucess: "user created succesfull", user: user });
});

// All roles
const AllRoles = TryCatch(async(req,res)=>{
  const AllRoles = await Role.find()
  res.json({Roles : AllRoles})
})

// Delete user role
const DeleteRole = TryCatch(async (req, res) => {
  const { roleId } = req.params;
  if (!roleId) {
    return res.json({ error: "please provid roleId" });
  }
  const role = await Role.findById(roleId);
  if (!role) {
    return res.json({ error: "role ID are not valid" });
  }
  await Role.findByIdAndDelete(roleId);
  res.json({ success: "Role deleted successfully" });
});

// Update role name
const UpdateRole = TryCatch(async (req, res) => {
  const { roleId } = req.params;
  const { newRoleName } = req.body;

  const role = await Role.findById(roleId);
  if (!role) {
    return res.status(404).json({ error: "Role not found" });
  }

  // Update the role name
  role.name = newRoleName;
  await role.save();

  res.json({ success: "Role name updated successfully", role: role });
});

module.exports = {
  RegisterRole,
  DeleteRole,
  UpdateRole,
  AllRoles
};
