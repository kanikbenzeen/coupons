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
                       <img src={img} alt="hello"/>
                    </div>
                    <div className="text">
                        <p>You have successfully booked an appointment with us. <br/>Here are your details<br/>Date: 12.12.12<br />
                            Time: 11am<br/>
                                ID: 12324
                        </p>
                        <p>Eagerly awaiting your visit
                        </p>
                    </div>
                    <p className="regards">Regards, Team Tarini Netradham</p>
                </div>
            </div>

        </div>
    )
}

export default Congrats