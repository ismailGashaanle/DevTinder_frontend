import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useLoginApi, useSignUpApi} from '../services/Api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [isSignform,setSignForm]=useState(true)
    const [email,setemail]=useState("");
    const [password,setPassword]=useState("")
    const [confirmPassword,setconfirmPassword]=useState("")

    const HandleLogin=useLoginApi(email,password)
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [phone,setphone]=useState("")

    const Errors=useSelector(store=>store?.Errors);
     
    //firstName,lastName,phone,email,password
    ///const HandleSingUp=useSignUpApi(firstName,lastName,phone,email,password);


    const HandleSingUp = useSignUpApi(
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword
     );
    
// const navigate=useNavigate()
//     const user=useSelector(store=>store.user)
   
    
   
     

    const toggleForm=()=>{
        setSignForm(!isSignform)
    }

    const signUpError=useSelector(store=>store?.signUpError)


    

  return (
    <div className='bg-(--color-bg) min-h-screen  '>
      
      <div className='w-9/12 mx-auto h-100 grid grid-cols-1 gap-0 md:grid-cols-2 
       
         justify-center items-center space-x-3 space-y-1 '>
           <div className=''>
            <h1 className='text-5xl font-bold  text-(--color-primary)'>Facebook</h1>

            <div className='md:text-lg pt-3'>
                Connects with Friends and the world <br></br> 
                around you on facebook
            </div>

        </div>

        <div className='py-5'>
            <form onSubmit={(e)=>e.preventDefault()} className='bg-white   ring-1 p-4 shadow-2xl ring-(--color-border) '>
           
            {Errors ?  (
              <div className=' flex bg-red-500  capitalize  px-6 rounded-l-full 
              rounded-r-full py-2 items-center text-center w-11/12  mx-auto text-white
               font-bold'>{Errors?.message}</div>
            ):null
            }
            
          
          {signUpError &&  
              <div className=' flex bg-red-500  capitalize  px-6 rounded-l-full 
              rounded-r-full py-2 items-center text-center w-11/12  mx-auto text-white
               font-bold'>{signUpError} </div>
            
            }
         

             
    { !isSignform &&(
        <div>
                 <div className='grid grid-cols-1 md:grid-cols-2'>
                
                 <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='firstName'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={firstName}
            onChange={(e)=>setfirstName(e.target.value)}
            />
                 </div>


               <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="text" 
            placeholder='lastName'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
             value={lastName}
             onChange={(e)=>setlastName(e.target.value)}
            />
                  </div>    
                </div>


       <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="number" 
            placeholder='phone number or mobile'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            />
        </div>

              {/* <div className='grid grid-cols-1 md:grid-cols-2'>
                 <div className='flex flex-col relative py-3 px-2'>
            
            <input  type="password" 
            placeholder='password'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            />
        </div>


         <div className='flex flex-col relative py-3 px-2'>
            <input  type="password" 
            placeholder='confirm password'
            className='ring-1 ring-(--color-border) p-3 rounded-sm'
            />
        </div>

              </div> */}

          {/* <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>
             <div>
            <label>Gender</label>
         
            <div className='flex  gap-3 space-x-2'>
                 <span className=''>
              <input type="radio" name="gender" />
            <label value="male">male</label>
          </span>
          <span>
              <input type="radio" name="gender" />
            <label value="female">female</label>
          </span>
            </div>
            
         </div>

         
         <div  className='flex flex-col gap-2' >
            <label>BirthDay</label>
            <input type="date"
             className='ring-1 ring-(--color-border) p-3 rounded-sm'
            />
         </div>
 

          </div> */}

        </div>
     )}
     
        
    
       
    

       
    

                <div className='flex flex-col relative py-3 px-2'>
                    
                    <input  type="email" 
                    placeholder='email or Phone number'
                     className='ring-1 ring-(--color-border) p-3 rounded-sm'
                     value={email}
                     onChange={(e)=>setemail(e.target.value)}
                     />
                </div>

                <div className='relative flex flex-col py-3 px-2'>
                    
                    <input type="password" 
                    placeholder='Password'
                    className='ring-1 ring-(--color-border) p-3 rounded-sm '
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>


                {!isSignform && <div className='relative flex flex-col py-3 px-2'>
                    
                    <input type="password" 
                    placeholder='Password'
                    className='ring-1 ring-(--color-border) p-3 rounded-sm '
                    value={confirmPassword}
                    onChange={(e)=>setconfirmPassword(e.target.value)}
                     />
                </div>}



                 { !isSignform &&(
                     <button className='text-center bg-(--color-success) hover:(--color-success-hover) py-3 cursor-pointer 
                ring-0 border-0 justify-center w-full rounded-md text-md  text-white'
                
                onClick={HandleSingUp}

                >
                   Create New Account
                  </button>
                 )}

             { isSignform &&(
                  <button type="submit" className='text-center bg-(--color-primary) py-3 cursor-pointer 
                ring-0 border-0 justify-center w-full rounded-md text-md  text-white'
                
                onClick={HandleLogin}

                >
                    Log in
             </button>
             )}
             <span onClick={toggleForm} className='cursor-pointer'>
              {  !isSignform &&(  <span className='text-gray-400'>al ready exit <span className='text-black font-bold'>Sign In</span></span>)}
              {  isSignform &&(  <span className='text-gray-400'>new account <span className='text-black font-bold'>SignUp</span></span>)}
             </span>

             

            </form>
        </div>

      </div>
      
    </div>
  )
}

export default SignUp
