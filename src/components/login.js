import { useState} from 'react'
import React from 'react'
import './login.css'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // const [name, setName] = useState(0)
const verify = useNavigate()

 let storeLength
  
  const [name, setName] = useState('')
  const [coupon, setCoupon] = useState('')
  const [mobile, setMobile] = useState('')
  const [store, setStore] = useState(0)
 
  const allFields = async (e) =>{
    e.preventDefault()
// let collectLength ;

    try {
      let res = await fetch("login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          coupon: coupon,
          mobile: mobile,
        }),
      });
      console.log()
      let rese = await res.json();
      // collectLength=rese
     
      console.log(rese)
      storeLength=  rese.length
      if (res.status === 200) {
        console.log("User created successfully");
      } else {
        console.log("Some error occured");
      }
      if(rese.length>0){
       
        verify(`/verify/${mobile}`)
      }
      else{
        alert('Wrong coupon code')
        
        setName('')
        setCoupon('')
        setMobile('')
       
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(storeLength)
  return (
    <div>
      <form className="form" method='POST'>
      <div className="title">Redeem</div>
      <div className="subtitle">Your Coupon Code Here</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " value ={name} onChange={(e)=>setName(e.target.value)} />
        <div className="cut"></div>
        <label htmlFor="firstname" className="placeholder">Name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input"  type="text" placeholder=" " value ={mobile}  onChange={(e)=>setMobile(e.target.value)} />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Contact Number</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " value ={coupon}  onChange={(e)=>setCoupon(e.target.value)}/>
        <div className="cut cut-short"></div>
        <label  className="placeholder">Coupon Code</label>
        {
        storeLength ? ( <p style={{
          color:'red',
          fontFamily:'Roboto',
          marginTop:'4px',marginLeft:'4px'
         }}>Wrong coupon code</p>):(<p style={{display:'none'}}>hello</p>)
      
        }
        
      </div>
      <button type="text" className="submit" onClick={allFields}>Generate OTP</button>
    </form>
 
    
    </div>
  )
}

export default Login