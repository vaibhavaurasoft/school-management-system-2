const experss = require("express");
const router = experss.Router();
const auth = require("../../middelwear/Auth");
const StudentData = require("../../controller/teacher/addstudent");
const Data = require("../../controller/userController/User")

// add student
router
  .route("/createstudent")
  .post(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    Data.AddUser
  );

// get all student list
router.route("/allstudent").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher",),
    // StudentData.AllStudent
    Data.AllUser
) 

// get single student
router.route("/singlestudent/:id").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    Data.UserDetails
)

// update student
router.route("/updatestudent/:id").put(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    Data.UpdateUser
)

// delete student
router.route("/deletestudent/:id").delete(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    Data.DeleteUser
)

// login user
router.route("/login").post(
    StudentData.studentLogin
)

module.exports = router
