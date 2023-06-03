const experss = require("express");
const router = experss.Router();
const auth = require("../../middelwear/Auth");
const AdminData = require("../../controller/superAdmin/addadmin");

// add admin
router.route("/addadmin").post(
    auth.isAuthenticateUser,
    auth.authorizeRole("superadmin"),
    AdminData.AddAdmin
)

// all admin
router.route("/alladmin").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("superadmin"),
    AdminData.Alladmin
)
  
// single admin
router.route("/singleadmin/:id").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("superadmin"),
    AdminData.Singleadmin
)

// update admin
router.route("/updateadmin/:id").put(
    auth.isAuthenticateUser,
    auth.authorizeRole("superadmin"),
    AdminData.Updateadmin
)

// delete admin
router.route("/deleteadmin/:id").delete(
    auth.isAuthenticateUser,
    auth.authorizeRole("superadmin"),
    AdminData.Deleteadmin
)

module.exports = router;