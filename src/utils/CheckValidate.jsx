import React from 'react'

const ValidateSignUp = (firstName,lastName,phone,email,password,confirmPassword) => {

    const validfirstName=/^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$/.test(firstName)
    const isValidLastName=/^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$/.test(lastName)
    const isValidEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isValidPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
     const isValidPhoneNumber=/^\+?[\d\s\-()]+$/.test(phone)


     if(firstName===""){
        return "please fill firstName"
     }
     if(lastName===""){
        return "please fill lastName"
     }
     if(phone===""){
        return "please fill phone"
     }
     if(email===""){
        return "please fill email"
     }
     if(password===""){
        return "please fill password"
     }
     if(confirmPassword===""){
        return "please fill confirm password"
     }

    if(!validfirstName) return "please fill correct firstName character"
    if(!isValidLastName) return "please fill correct lastName";
    if(!isValidEmail) return "please fill correct email "
    if(!isValidPassword) return "please fill password contain 8 characters"
    if(!isValidPhoneNumber) return "please fill valid phone number"

    if (confirmPassword !== password) {
     return "password does not match";
    }


     

  return  null
     
}

export default ValidateSignUp
