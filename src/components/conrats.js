import React from 'react'
import './congrats.css'
import img from '../images/images.gif'
import { useParams } from 'react-router-dom';

const Congrats = (props) => {
    const params= useParams()
    let name = params.id
    let mobile = params.id2
    let createdAt = params.id2
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
console.log(props)
    return (
        <div>

            <div className="contain">
                <div className="congrats">
                    <h1>Congrat<span className="hide">ulation</span>s !</h1>
                    <div className="done">
                       <img src={img} alt="hello" x="0px" y="0px" viewBox="0 0 37 37" />
                    </div>
                    <div className="text">
                        <p>You have successfully redeemed your coupon<br/><br />You have won<br /><br /></p>
                        <p className="discount">discount</p><br/>
                        <p className="share">Share the screenshot with the dealer to receive your price
                        </p>
                    </div>
                    <div>
                    <table>
  <tbody>
  <tr>
      <th scope="row">Name :</th>
      <td>{name}</td>
    </tr>
    <tr>
      <th scope="row">Mobile Number :</th>
      <td>{mobile}</td>
    </tr>
    <tr>
      <th scope="row">Coupon Code :</th>
      <td>code</td>
    </tr>
    <tr>
      <th scope="row">Dealer Name :</th>
      <td>dealer</td>
    </tr>
    <tr>
      <th scope="row">Date :</th>
      <td>{currentDate}</td>
    </tr>
    <tr>
      <th scope="row">Time :</th>
      <td>{time}</td>
    </tr>
  </tbody>
</table>
                    </div>
                    <p className="regards">Regards, V-DROP</p>
                </div>
            </div>

        </div>
    )
}

export default Congrats