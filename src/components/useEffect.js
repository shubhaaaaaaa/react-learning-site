    //useEffect hook - allows you to perform side effects in your component

    import React, { useState, useEffect } from 'react';
    import './styles.css';

    function UpdateValues(){
        
        const [number, setNumber] = useState(0);
        const [double, setDouble] = useState(0);
        const [triple, setTriple] = useState(0);
        const [quadruple, setQuadruple] = useState(0);
        const [quintuple, setQuintuple] = useState(0);

        useEffect(()=>{
            setDouble( number*2);
            setTriple( number*3);
            setQuadruple( number*4);
            setQuintuple( number*5);
        }, [number]);

        return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{fontSize: "30px", textTransform: "uppercase"}} className='text-center main-heading '>press the buttons</p><br />
                <div style={{display:'flex', flexDirection: 'row', gap: '1rem'}} className='text-lg'>
                    <button className='button rounded px-3 py-1 '
                    onClick={() => setNumber((n) => Math.max(0,n-1))}
                    > Decrease </button>
                    <span className='font-bold text-3xl'>{number}</span>
                    <button className='button rounded px-3 py-1'   
                    onClick={() => setNumber((n) => Math.min(10,n+1))}
                    > Increase </button> 
                </div>

                <div style={{display:'flex', flexDirection: 'column', gap: '1rem'}} className='text-xl'>
                    <br />
                    <p>Double: {double} </p> 
                    <p>Triple: {triple} </p>
                    <p>Quadruple: {quadruple} </p>
                    <p>Quintuple: {quintuple} </p>
                </div>

                
            <p className='text-sm text-center italic mt-12 opacity-50'>Things I learnt:
                <ul>
                    <li>- useEffect hook</li>
                    <li>- event management</li>
                </ul>
            </p>
            </div>
        );
    }

    export { UpdateValues};
