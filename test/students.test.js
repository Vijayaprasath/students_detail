const request = require('supertest')
const router = require("../routes/students")
const students = require("../src/studentsDetails")
const app = require("../src/index")


describe('GET /', () => {
    test('gives the students data', async () => {
      const response = await request(app).get('/students');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(students);
    });
    test('gives the student data', async () => {
        const response = await request(app).get('/students/11');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({id: "11", name: "vijay", email: "vijay@gmail.com" });
      });
    test('gives the student data', async () => {
        const response = await request(app).get('/students/22');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({id: "22", name: "vicky", email: "vicky@gmail.com" });
      });
    test('gives the student data', async () => {
        const response = await request(app).get('/students/33');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({id: "33", name: "vikram", email: "vikram@gmail.com" });
      });
    test('gives the student data', async () => {
        const response = await request(app).get('/students/44');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({id: "44", name: "Thilip", email: "thilip@gmail.com" });
      });
    test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/student');
      expect(response.status).toBe(404);
    });
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(404);
    }); 
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/11');
      expect(response.status).toBe(404);
    }); 
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/22');
      expect(response.status).toBe(404);
    }); 
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/33');
      expect(response.status).toBe(404);
    }); 
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/44');
      expect(response.status).toBe(404);
    });    
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/students/66');
      expect(response.status).toBe(404);
      expect(response.text).toBe("No student found with the id of 66")
    });    
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/students/23');
      expect(response.status).toBe(404);
      expect(response.text).toBe("No student found with the id of 23")
    });    
      test('should give an status code 404 when passed with incorrect route', async () => {
      const response = await request(app).get('/students/1111');
      expect(response.status).toBe(404);
      expect(response.text).toBe("No student found with the id of 1111")
    });    

})

describe('POST', ()=>{
    test("should give an successful message after post", async()=>{
    const newStudent = {
     id: 1,
     name: "karthick",
     email: "karthick@example.com"
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(201);
      expect(response.text).toEqual("Registered Successfully");
    });
    test("should give an successful message after post", async()=>{
    const newStudent = {
     id: 123,
     name: "panda",
     email: "panda@example.com"
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(201);
      expect(response.text).toEqual("Registered Successfully");
    });
    test("should give an error message while post", async()=>{
    const newStudent = {
     id: 1,
     name: "karthick"
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Please enter the email");
    });
    test("should give an error message while post", async()=>{
    const newStudent = {
     name: "karthick",
     email: "karhick@gmail.com"
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Please enter the id");
    });
    test("should give an error message while post", async()=>{
    const newStudent = {
     id: 1,
     email: "karhick@gmail.com"
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Please enter the name");
    });
    test("should give an error message while post", async()=>{
    const newStudent = {}
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(400);
      expect(response.text).toBe("Please enter the id");
    });
    test("should give an error message while post for the duplicate id", async()=>{
    const newStudent = {
      id: 11,
      name: "vijay",
      email: "vijay@gmail.com" 
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(409);
      expect(response.text).toBe("This id already exists");
    });
    test("should give an error message while post for the duplicate id", async()=>{
    const newStudent = {
      id: 22,
      name: "vicky",
     email: "vicky@gmail.com"
    }
      const response = await request(app).post('/students').send(newStudent);
      expect(response.status).toBe(409);
      expect(response.text).toBe("This id already exists");
    });
})

describe("PUT", ()=>{
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"22",
      name: "vijayaprasath"
    }
    const response = await request(app).put("/students/22").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "22", name: "vijayaprasath", email: "vicky@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"22",
      email: "vijayaprasath@gmail.com"
    }
    const response = await request(app).put("/students/22").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "22", name: "vijayaprasath", email: "vijayaprasath@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"11",
      name: "vignesh"
    }
    const response = await request(app).put("/students/11").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "11", name: "vignesh", email: "vijay@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"11",
      email: "vignesh@gmail.com"
    }
    const response = await request(app).put("/students/11").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "11", name: "vignesh", email: "vignesh@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"33",
      email: "ram@gmail.com"
    }
    const response = await request(app).put("/students/33").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "33", name: "vikram", email: "ram@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"33",
      name: "ram"
    }
    const response = await request(app).put("/students/33").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "33", name: "ram", email: "ram@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"44",
      name: "riyaz"
    }
    const response = await request(app).put("/students/44").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "44", name: "riyaz", email: "thilip@gmail.com" })
  })
  test("should update the details of the student",async()=>{
    const updatedStudent = {
      id:"44",
      email: "riyaz@gmail.com"
    }
    const response = await request(app).put("/students/44").send(updatedStudent);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id: "44", name: "riyaz", email: "riyaz@gmail.com" })
  })
  test("should show the error message", async()=>{
    const updatedStudent = {
      id:"323",
      email: "full@gmail.com"
    }
    const response = await request(app).put("/students/323").send(updatedStudent);
    expect(response.status).toBe(404);
    expect(response.text).toBe("No student found with the id of 323")
  })
  test("should show the error message", async()=>{
    const updatedStudent = {
      id:"3",
      email: "anywhereworks@gmail.com"
    }
    const response = await request(app).put("/students/3").send(updatedStudent);
    expect(response.status).toBe(404);
    expect(response.text).toBe("No student found with the id of 3")
  })
  
})

describe("DELETE", ()=>{
  test("should delete the student from the students array", async()=>{
    const response = await request(app).delete("/students/11")
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Deleted successfully")
  })
  test("should delete the student from the students array", async()=>{
    const response = await request(app).delete("/students/22")
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Deleted successfully")
  })
  test("should delete the student from the students array", async()=>{
    const response = await request(app).delete("/students/33")
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Deleted successfully")
   })
  test("should delete the student from the students array", async()=>{
    const response = await request(app).delete("/students/44")
    expect(response.status).toBe(200);
    expect(response.text).toEqual("Deleted successfully")
  })
  test("should show the error message", async()=>{
    const response = await request(app).delete("/students/66")
    expect(response.status).toBe(404);
    expect(response.text).toBe("No student found with the id of 66")
  })
  test("should show the error message", async()=>{
    const response = await request(app).delete("/students/323")
    expect(response.status).toBe(404);
    expect(response.text).toBe("No student found with the id of 323")
  })

})