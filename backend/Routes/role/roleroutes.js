const experss = require("express");
const router = experss.Router();
const data = require("../../controller/userController/roleController")


router.route("/createrole").post(data.RegisterRole)
router.route("/deleteerole/:roleId").delete(data.DeleteRole);
router.route("/updaterole/:roleId").put(data.UpdateRole);
router.route("/AllRole").get(data.AllRoles);


module.exports = router