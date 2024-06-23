import './styles.css';
import { useState } from 'react';

import {UpdateValues} from "./useEffect";
import ChangeColor from "./useState";
import DisplayMessage from "./conditionalRendering";
import Menu from "./navbar";
import AddAssets from "./addingAssets"
import Calculator from "./calculator"

function App(){
    const cards = [<Menu />, <DisplayMessage />, <Calculator/>, <AddAssets />, <ChangeColor/>,<UpdateValues />]
    let [index, setIndex] = useState(0);
    let [display, setDisplay] = useState(cards[index]);

    function Prev(){
        if(index<=0){
            setDisplay (cards[0]);
        }
        else{
            setDisplay(cards[index-1]);
            setIndex(index-1);
        }
        }

    function Next(){

        //the last array element is cards.length-1
        if(index >= cards.length-1){
            setDisplay(cards[cards.length-1]);
        }
        else if(index < cards.length){
            setDisplay(cards[index+1]);
            setIndex(index+1);
        }
    }

    return(
        <div>
            <div className='h-screen flex justify-center items-center flex-col'>
                    <div className='main-container rounded-lg h-4/5 py-10 mx-10 w-96'>
                        {display}
                        <div className='next-prev-div'>
                        <button className='prev-button' onClick={Prev}>Prev</button>
                        <button className='next-button' onClick={Next}>Next</button>
                        </div>
                    </div>
                    <p className='text-black pt-3 text-sm' >© 2024 <a class="hover:underline" href="https://shubhakhadgi.com.np/" rel="noopener noreferrer" target="_blank">Shubha Khadgi</a> | All rights reserved</p>
            </div>
        </div>
    );
}

export default App; 