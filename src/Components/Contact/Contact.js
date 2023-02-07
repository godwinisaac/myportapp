import React, { useState } from 'react';

import Title from '../Layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    

    const emailValidation = () => {
        return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handleSend= (e)=>{
        e.preventDefault();
        
      

        if(username === ""){
            setErrMsg("UserName is required!");
        }
        else if(phoneNumber === ""){
            setErrMsg("Phone Number is required!");
        }
        else if(email === ""){
            setErrMsg("Email id is required!");
        }
        else if(!emailValidation(email)){
            setErrMsg("Please Enter Your Valid Email!");
        }
        else if(subject === ""){
            setErrMsg("Please give your Subject!");
        }
        else if(message === ""){
            setErrMsg("Message is required!");
        }
        else{
            setSuccessMsg(`Thank you dear ${username},Your Message has been sent Successfully!`);
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };
    
    
    
  return (
    <section id="contacts" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me"/>
      </div>
      <div className="max-w-6xl mx-auto">
          <div className="w-full" >
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <ContactLeft />
                <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[$23272b] flex flex-col p-4 lgl:p-8 gap-8  rounded-lg shadow-shadowOne">
                    <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:p-5">
                        {
                            errMsg && (<p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 tracking-wide animate-bounce rounded-lg">{errMsg}</p>)
                        }
                        {
                            successMsg && (<p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 tracking-wide animate-bounce rounded-lg">{successMsg}</p>)
                        }
                        <div className="w-full flex flex-col lgl:flex-row gap-10">
                            <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                                <input
                                 onChange={(e)=>setUsername(e.target.value)}
                                  value={username}
                                  type="text" 
                                  name="user_name"
                                  className={`${errMsg === "UserName is required!" && "outline-head"} contactInput`}
                                />
                            </div>
                            <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                                <input
                                 onChange={(e)=>setPhoneNumber(e.target.value)}
                                 value={phoneNumber} 
                                 type="text" 
                                 name="user_phoneNumber"
                                 className={`${errMsg === "Phone Number is required!" && "outline-head"} contactInput`} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                            <input
                             onChange={(e)=>setEmail(e.target.value)}
                             value={email}
                             type="email" 
                             name="user_email"
                             className={`${errMsg === "Email id is required!!" && "outline-head"} contactInput`} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                            <input 
                             onChange={(e)=>setSubject(e.target.value)} value={subject}
                             type="text" 
                             name="user_sub"
                             className={`${errMsg === "Please give your Subject!" && "outline-head"} contactInput`} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                            <textarea
                             onChange={(e)=>setMessage(e.target.value)}
                             value={message}
                             name="user_msg"
                             className={`${errMsg === "Message is required!" && "outline-head"} conTxt`} 
                             cols="30" 
                             rows="8"></textarea>
                        </div>
                        <div className="w-full">
                            <button
                             onClick={handleSend}
                             type="submit" 
                             value="Send"
                             className="contactBnt">Send Message</button>
                        </div>
                        {
                            errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 tracking-wide animate-bounce rounded-lg">{errMsg}</p>
                        }
                        {
                            successMsg && (<p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 tracking-wide animate-bounce rounded-lg">{successMsg}</p>)
                        }
                    </form>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Contact;
