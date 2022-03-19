import React from 'react';
import { Button } from 'react-bootstrap';
import './Body.css'

const Body = () => {
    return (
        <div className='container register'>
            <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <hr />
                        <h6 className='line-height'>Search by city, and get the perfect Weather</h6>
                        <hr />
                        <h6>Search City:</h6>
                        <input type="text"/>
                        <Button className="button" type="submit" >Search</Button><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="ocean">
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Body;