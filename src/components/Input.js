import React from 'react'
import {Button, Form} from 'react-bootstrap';

const Input = (props) => {

    const myStyle = {
        borderRadius: "20px",
        marginLeft: "12.5%",
        width: "75%"
    };

    return (          
        <div>
            <form onSubmit={props.getWeather}>
                <Form.Control autoComplete="off" style={myStyle} size="lg" type="text" name='city' placeholder="Enter City name" />
                <br/>
                <div className="d-grid gap-2">
                    <Button style={myStyle} variant="outline-info" size="lg" type='submit'><i>Get Weather</i></Button>
                </div>
            </form>
        </div>           
    )
}

export default Input