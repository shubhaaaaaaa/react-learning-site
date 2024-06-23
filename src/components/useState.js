//Use state hook - allows to track the state of a component

import React, { useState } from "react";
import './styles.css';

function ChangeColor(){

    const [color, setColor] = useState("red");

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{fontSize: "30px", textTransform: "uppercase"}} className='text-center main-heading  pb-5'>color magic</p>

            <h1>Hover or Click the text to change color!</h1> <br></br>
            <p
            style= {{cursor: "pointer", color: color, fontSize: "40px", textTransform: "uppercase"}}
            onClick={()=> color==="orange"? setColor("yellow"): setColor("orange")}
            onMouseOver={() => setColor("white")}
            onMouseOut={() => setColor("red")}

            >{ color }</p>

            <p className='text-sm text-center italic mt-44 opacity-50'>Things I learnt:
                <ul>
                    <li>- useState hook</li>
                    <li>- arrow function</li>
                </ul>
            </p>
        </div>
    );

}

export default ChangeColor;