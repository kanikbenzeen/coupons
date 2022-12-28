import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import './verify.css'
import {useNavigate} from 'react-router-dom'
import Congrats from './conrats'
import { useEffect } from 'react'



const Verify = () => {
const navCongrats = useNavigate()
       const params = useParams()
       let mobile = params.id
     let rese 
const [otp, setOtp] = useState()

const otpVerify = async(e)=>{
  e.preventDefault()
  try {
    let res = await fetch("verify", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobile: mobile,
        otp:otp
      }),
    })
    rese = await res.json();
    console.log(rese)
   
if(rese.verify==='approved'){
  console.log('Your data is safe ')
  navCongrats(`/congrats/${rese.alldata.name}/${rese.alldata.mobile}/${rese.alldata.createdAt}/${rese.alldata.coupon}`)
}else{
  alert('You Entered Wrong Otp')
}
}catch (err) {
  console.log(err);
};
}
  return (
    <div>
      <form method='POST'>
    <div className="form">
 
      <div className="subtitle">Verify Your OTP</div>

      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" "onChange={(e)=>setOtp(e.target.value)} />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Enter Your OTP</label>
      </div>
    
      <button type="text" className="submit" onClick={otpVerify} >Verify OTP</button>
    </div>
 
    </form>
    </div>

  )
}

export default Verify