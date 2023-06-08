const express = require("express");
const students = require("../src/studentsDetails");
const {getStudentData, getAllStudentData, addStudentData, updateStudentData, deleteStudentData} = require('../middlewares/studentData')


const router = express.Router();

//get request
router.get("/", getAllStudentData);
router.get("/:id", getStudentData);
//post request
router.post("/", addStudentData);
//put request
router.put("/:id", updateStudentData);
//delete request
router.delete("/:id", deleteStudentData);


module.exports = router;




// const details = {
//   name: "asjhdf",
//   age: 34,
//   id: "46e45",
//   address: {
//     doorNo: 23,
//     street: "ahjsfdk",
//     area: "aeaasd"
//   }
//   }

//   const {address:{street, area}, name = "vijay"} = details;
//   console.log(street)
//   console.log(area)
//   console.log(name)
