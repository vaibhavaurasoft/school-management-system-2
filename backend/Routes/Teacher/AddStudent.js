const experss = require("express");
const router = experss.Router();
const auth = require("../../middelwear/Auth");
const StudentData = require("../../controller/teacher/addstudent");

// add student
router.route("/createstudent").post(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    StudentData.AddStudent
)

// get all student list
router.route("/allstudent").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher",),
    StudentData.AllStudent
) 

// get single student
router.route("/singlestudent/:id").get(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    StudentData.SingleStudent
)

// update student
router.route("/updatestudent/:id").put(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    StudentData.UpdateStudent
)

// delete student
router.route("/deletestudent/:id").delete(
    auth.isAuthenticateUser,
    auth.authorizeRole("teacher"),
    StudentData.DeleteStudent
)

// login user
router.route("/login").post(
    StudentData.studentLogin
)

module.exports = router
