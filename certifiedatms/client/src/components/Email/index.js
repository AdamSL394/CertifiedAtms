import React from 'react'

import './style.css'
function emailForm() {
    return (
        <div>
            <div>

                <img src={"https://owips.com/sites/default/files/clipart/drawn-airplane/449847/drawn-airplane-paper-airplane-449847-1423338.jpg"} className="paperAirPlane" alt="paper airplane" />

                <div className="form-group">
                    {/* <div className="form-grou"> */}
                    <h3 id="directions">
                        ~Simply enter your email address and email us your inquiry!
                    </h3>
                    <form action="https://formspree.io/mbjjvqzv"
                        method="POST" />
                    <input type="email" 
                    name='_replyto'
                    className="form-control space-top" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    {/* </div> */}
                    {/* <div className="form-grou"> */}
                    <textarea type="password" className="space-top form-control" id="exampleInputPassword1" placeholder="Type message" 
                    name='message'
                    />
                    
                    <button type="submit" 
                    value='Send'
                    className="space-top btn btn-primary">Submit</button>
                </div>

                {/* </div> */}
            </div>

        </div>
    )
}

export default emailForm;