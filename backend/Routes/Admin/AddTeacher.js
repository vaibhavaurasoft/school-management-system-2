const experss = require("express");
const router = experss.Router();
const auth = require("../../middelwear/Auth");
const TeacherData = require("../../controller/admin/addteacher");

// add teacher
router.route("/addteacher").post(
    auth.isAuthenticateUser,
    auth.authorizeRole("admin"),
    TeacherData.AddTeacher
)
 
// all teacher
router.route("/allteacher").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("admin"),
    TeacherData.AllTeacher
)

// single teacher
router.route("/singleteacher/:id").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("admin"),
    TeacherData.SingleTeacher
)

// update teacher
router.route("/updateteacher/:id").put(
    auth.isAuthenticateUser,
    auth.authorizeRole("admin"),
    TeacherData.UpdateTeacher
)

// delete teacher
router.route("/deleteteacher/:id").delete(
    auth.isAuthenticateUser,
    auth.authorizeRole("admin"),
    TeacherData.DeleteTeacher
)

module.exports = router
