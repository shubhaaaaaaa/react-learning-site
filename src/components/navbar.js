import './styles.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function Menu(){
    const logoSrc = require('../assets/react-logo.png');
    const instaLogo = require('../assets/instagram.png');
    const linkedinLogo = require('../assets/linked-in.png');
    const githubLogo = require('../assets/github.png');

    function Homepage(){
        return(
            <>
            <p className='text-center px-8'>
                <span className='text-3xl font-bold'>Hello, I am Shubha. </span>
                <br /><br/>
                I am implementing basic concepts of React that I have learnt via this small project.</p>

            <p className='text-xs italic text-center mt-32 opacity-50'>Every card has a 'Things I learnt' section at the bottom.</p>
            </>    
        );
    }
    function About(){
        return(
            <>
                <p class="text-center px-6 pb-3">
                    While working on building this project I learnt:
                </p>
                <ul class="text-left px-8">
                    <li>- Components</li>
                    <li>- Props</li>
                    <li>- JSX</li>
                    <li>- Arrow function</li>
                    <li>- State Management</li>
                    <li>- Event and Hooks</li>
                    <li>- Prop Drilling</li>
                    <li>- Links and Routing</li>
                    <li>- Bundling assets</li>
                </ul>  
            </> 
        );
    }
    function Connect(){
        return(
            <>                
            <p className='text-xl text-center'> Connect with me:</p>
            <div className='flex justify-center items-center'>
                <a href="https://www.linkedin.com/in/shubhakhadgi/"><img src={linkedinLogo} alt='linked in logo'  className='hover:opacity-60' width='30px' /></a>    
                <a href="https://github.com/shubhaaaaaaa"><img src={githubLogo} alt='github logo ' className='hover:opacity-60' width='40px'/></a>     
                <a href="https://www.instagram.com/strokes_byshubha/"><img src={instaLogo} alt='instagram logo'  className='hover:opacity-60' width='35px' /></a>           
            </div>
            <p className='text-sm text-center italic mt-32 opacity-50'>Things I learnt:
                <ul>
                    <li>- making a navigation bar</li>
                    <li>- using links and routing</li>
                </ul>
            </p>
            </>


        );
    }

    return(
        <div>
            <div className='flex justify-center items-center'>
            <img width='35px' src={logoSrc} alt='React Logo'/>
            <p style={{fontSize: "30px", textTransform: "uppercase"}} className='main-heading flex items-center justify-center px-2 pt-1'>React Learning</p>
            </div>
            
            <nav className='nav-elements text-sm font-semibold flex gap-8 py-2  mt-6 mb-8 w-full justify-center items-center'>
                <Link to = "/">Homepage</Link>
                <Link to = "/about">About</Link>
                <Link to = "/connect">Connect</Link>
            </nav>

            <Routes>    
                <Route path="/" element={< Homepage />} />
                <Route path="/about" element={< About />} />
                <Route path="/connect" element={< Connect />} />
            </Routes>

        </div>

    );
}

export default Menu;