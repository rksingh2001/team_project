import React,{useState,useEffect} from 'react';
import {auth} from '../../firebase/firebase';

function Signup() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [user,setUser]=useState('');
  let create= async()=>{
      let res=await  auth.createUserWithEmailAndPassword(email,password);
      console.log(res);
  }
  useEffect(()=>{
     let unsub=auth.onAuthStateChanged((user)=>setUser(user));
     return ()=>{
         unsub();
     }
  },[])
  let logout=async()=>{
      await auth.signOut();
  }
  return (
    <>
    {
        user==null?
        <div>
        <label htmlFor="email">Enter the email</label>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        <label htmlFor="password">Enter the Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button onClick={create}>Sign Up</button>
        </div>:
        <>
            <div>{user.email}</div>
            <button onClick={logout}>Logout</button>
        </>

    }
    </>
  )
}

export default Signup