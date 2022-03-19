import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Body.css'

const Body = () => {
    const [search, setSearch] = useState('');
    const [city, setCity] = useState([]);
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6342610aaa48a82449a5d915055de20b`
        fetch(url)
            .then(res => res.json())
            .then(data => setCity(data))
    },[search])
    
    console.log(city);
    return (
        <div className='container register'>
            <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>{ search}</h3>
                        <hr />
                        <h6 className='line-height'>Search by city, and get the perfect Weather</h6>
                        <hr />
                        <h6>Search City:</h6>
                        <input onKeyUp={event => setSearch(event.target.value)} type="text" className="font"/>
                        <hr />
                        <h6>Need better service? <br />Join Premium.</h6>
                        <input className='font' type="text" placeholder='email'/>
                        <Button className="button font" type="submit" >Join</Button><br/>
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