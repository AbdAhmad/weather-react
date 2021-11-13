import React from 'react'

const Weather = (props) => {

    const errorTextColor = {
        color: 'red'
    }

    return (
        <div className='text-center'>
            <h3><i>{props.city}</i></h3>
            {props.temp && <h3><i>{props.temp}&#176;C</i></h3>}
            <h3><i>{props.desc}</i></h3>
            <h3><i style={errorTextColor}>{props.error}</i></h3>

        </div>
    )
}

export default Weather