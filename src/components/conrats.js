import React from 'react'
import './congrats.css'
import img from '../images/images.gif'
import { useParams } from 'react-router-dom';

const Congrats = (props) => {
    const params= useParams()
    let name = params.id
    let mobile = params.id2
    let createdAt = params.id2
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
                        <p className="discount">{mobile}</p><br/>
                        <p>Share the screenshot with the dealer to receive your price
                        </p>
                    </div>
                    <p className="regards">Regards, {name}</p>
                </div>
            </div>

        </div>
    )
}

export default Congrats