import React from 'react'
import './congrats.css'
import img from '../images/images.gif'

const Congrats = () => {
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
                        <p className="discount">100 Rs</p><br/>
                        <p>Share the screenshot with the dealer to receive your price
                        </p>
                    </div>
                    <p className="regards">Regards, VDROP RO SYSTEM</p>
                </div>
            </div>

        </div>
    )
}

export default Congrats