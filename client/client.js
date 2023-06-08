const axios = require('axios');

const env = {
  api: "http://localhost:7000/students"
}


const postRequest = async(data)=>{
  try{
  let response = await axios.post(env.api, data)
  console.log(response.data)
  } catch(error) {
    console.error(error.response.data)
  }
}


const getRequest = async()=>{
  try{
    let response = await axios.get(env.api)
    console.log(response.data)
  } catch(error) {
    console.error(error.response.data)
  }
}

const getRequestForsingleId = async(id) =>{
  try{
    let response = await axios.get(`${env.api}/${id}`)
    console.log(response.data)
  } catch(error) {
    console.log(error.response.data)
  }
}
const putRequest = async(id,data)=>{
  try{
    let response = await axios.put(`${env.api}/${id}`, data)
    console.log(response.data)
  } catch(error) {
    console.log(error.response.data)
  }
}

const deleteRequest = async(id)=>{
  try{
    let response = await axios.delete(`${env.api}/${id}`)
    console.log(response.data)
  } catch(error) {
    console.log(error.response.data)
  }
}


getRequest()
getRequestForsingleId("13")

postRequest({id: 66, name:"siva", email: "siva@gmail.com"})
postRequest({id: 66, email: "siva@gmail.com"})
postRequest({ name:"siva", email: "siva@gmail.com"})

putRequest("33", {name: "sdfjhk"})
putRequest("333", {name: "sdfjhk"})

deleteRequest("33")
deleteRequest('dgf')


module.exports = axios;