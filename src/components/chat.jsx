// import React from 'react'
// import { useParams } from 'react-router-dom'

// const chat = () => {
//   const  {toTargetUserId}=useParams();
//   return (
//     <div className='py-2'>

//       <div className='w-full md:w-6/12'>
         
//          <div>
//             <div className='border-gray-200 p-3 ring-1 ring-gray-300 '> 
//               <img src={image? targeu user?}  />
//                <h1>ismail oday</h1>
              
//           </div>
//          </div>
//          <div className='ring-1 ring-gray-200 border-2 h-[70vh] border-gray-300'>
//             middle
//          </div>
//          <div className='flex gap-2 items-center justify-center'> 

//           <input placeholder='message'  
//            className='ring-1 rounded-md w-full ring-gray-300 p-3 m-2'
//           />
//            <button className='bg-(--color-primary) text-white  capitalize cursor-pointer p-6 py-3 rounded-md '>send</button>
//         </div>
       

//       </div>

      
    
      
//     </div>
//   )
// }

// export default chat

 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../utils/Constant';
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';


const chat = () => {
  const { toTargetUser } = useParams();
const [newMessage, setNewMessage] = useState("");
const [messages, setMessages] = useState([]);

  const [targetUser, setTargetUser] = useState(null);
   const navigate=useNavigate()
   const user=useSelector(store=>store?.user)
    const userId=user?._id
//const navigate=useNavigate();

    const GetChat=async()=>{
      if (!targetUser?._id) return;
      if(user?._id===targetUser?._id){
        return navigate(-1)
      }
        const res = await axios.get(
      `${BASE_URL}/chat/${targetUser._id}`,
          { withCredentials: true }
        );
      console.log("AXIOS RESPONSE:", res);
    console.log("RESPONSE DATA:", res.data);
    console.log("MESSAGES:", res.data?.messages);

    setMessages(res.data?.messages || []);

    }

    useEffect(()=>{
    
      if(targetUser?._id){
  GetChat()
      }
    },[targetUser?._id])


  useEffect(() => {
    const getTargetUser = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/user/connection/${toTargetUser}`,
          { withCredentials: true }
        );

      //  console.log("TARGET USER:", res.data);

        // Change this depending on your backend response
        setTargetUser(res.data.data);
      } catch (error) {
        console.log(error.response?.data || error.message);
      }
    };

    if (toTargetUser) {
      getTargetUser();
    }
    const socket=createSocketConnection();
    if(!userId){
      return;
    }
      socket.emit("joinChat",{
        firstName:user?.firstName,
        userId,
        toTargetUser
      })
      console.log(userId  + "     " + toTargetUser)

      socket.on("messageRecieved",({firstName,text})=>{
        setMessages((messages)=>[...messages,{text,firstName}])
      })

      return ()=>{
        socket.disconnect();
      }
  }, [toTargetUser]);

  if (!targetUser) {
    return <h1>Loading...</h1>;
  }

  // useEffect(()=>{
 

  // },[userId,toTargetUser])
  const SendMessage=()=>{
    if(!newMessage) {
      return console.log("empty messaage")
    }
      const socket =createSocketConnection();
      socket.emit("sendMessage",{
        firstName:user?.firstName,
        userId,
        toTargetUser,
        text:newMessage,
      });
      setNewMessage("");
  };

  return (
    <div className="py-2">
      <div className="w-full md:w-6/12 relative  ">
      <button className='px-6 absolute bg-gray-300 p-3 rounded-md right-2 top-2 cursor-pointer '
      onClick={()=>navigate(-1)}
      >back</button>

        {/* Target user */}
        <div className="border-gray-500 p-3 ring-1 ring-gray-500 flex items-center gap-3">

          <img
            src={targetUser.photo}
            alt={targetUser.firstName}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h1 className="font-bold text-black text-xl">
              {targetUser.firstName} {targetUser.lastName}
            </h1>

            <p className="text-gray-500">
              {targetUser.email}
            </p>
          </div>

        </div>

        {/* Messages */}
        <div className="ring-1 ring-gray-200 border-2 h-[70vh] border-gray-300 ">
           
          <div className="ring-1 ring-gray-200 border-2 h-[70vh] border-gray-300 overflow-y-auto">
              
            {messages.map((msg, index) => (
            <div key={index} className={user?.firstName===msg?.firstName ?"flex justify-end w-max-[60px] w-full":"flex justify-start w-full"}>
              <span className='-px-1 text-sm text-gray-400'>{msg?.firstName}</span>
              <p className={user.firstName===msg.firstName ? "text-md my-2  break-words whitespace-normal  bg-gray-200 ring-1 my-2 ring-gray-200 rounded-lg p-3":" text-md  break-words ring-1 ring-gray-200 rounded-lg p-3 whitespace-normal  bg-green-200"}>{msg?.text}</p>
            </div>
            ))}

          </div>

        </div>

        {/* Input */}
        <div className="flex gap-2 items-center justify-center">
          <input
            placeholder="message"
            className="ring-1 rounded-md w-full ring-gray-300 p-3 m-2"
            value={newMessage}
            onChange={(e)=>setNewMessage(e.target.value)}
          />

          <button className="bg-(--color-primary) text-white cursor-pointer p-6 py-3 rounded-md"
          
          onClick={SendMessage}
          
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
};

export default chat;