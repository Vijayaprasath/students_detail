//Middlewares

const students = require("../src/studentsDetails");

function getAllStudentData(req, res, next) {
  try {
    res.status(200).send(students);
  } catch (error) {
    res.set("Content-Type", "text/plain");
    console.log(error);
    res.status(500).send("Error occured");
  }
}

function getStudentData(req, res, next) {
  try {
    let student = students.find((student) => {
      if (student.id == parseInt(req.params.id)) {
        return student;
      }
    });
    if (student === undefined) {
      res.set("Content-Type", "text/plain");
      res.status(404).send(`No student found with the id of ${req.params.id}`);
    } else {
      res.send(student);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occured, SORRY!");
  }
}

function addStudentData(req, res, next) {
  try {
    // console.log(req.body);
    const { id, name, email } = req.body;
    res.set("Content-Type", "text/plain");

    if (!id) {
      return res.status(400).send("Please enter the id");
    }
    if (!name) {
      return res.status(400).send("Please enter the name");
    }
    if (!email) {
      return res.status(400).send("Please enter the email");
    }

    // if (!id || !name || !email) {
    //   return res.status(400).send("Please enter all the details");
    // }
    const found = students.some((student) => student.id == parseInt(id));
    if (!found) {
      const newStudent = {
        id,
        name,
        email,
      };
      students.push(newStudent);
      res.status(201).send("Registered Successfully");
    } else {
      res.status(409).send("This id already exists");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured");
  }
}

function updateStudentData(req, res, next) {
  try {
    const { id, name, email } = req.body;
    const target = students.find((student) => student.id === id);
    console.log(target);
    if (target === undefined) {
      res.set("Content-Type", "text/plain");
      res.status(404).send(`No student found with the id of ${id}`);
    } else {
      target.name = name ? name : target.name;
      target.email = email ? email : target.email;
      res.status(200).send(target);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Ocuured");
  }
}

function deleteStudentData(req, res, next) {
  try {
    if (!req.params.id) {
      res.status(400).send("Please enter the id");
    }
    const targetIndex = students.findIndex(
      (student) => student.id == parseInt(req.params.id)
    );
    if (targetIndex === -1) {
      res.set("Content-Type", "text/plain");
      res.status(404).send(`No student found with the id of ${req.params.id}`);
    } else {
      students.splice(targetIndex, 1);
      res.status(200).send("Deleted successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured");
  }
}

module.exports = {
  getStudentData,
  getAllStudentData,
  addStudentData,
  updateStudentData,
  deleteStudentData,
};
