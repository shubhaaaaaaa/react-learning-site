import ReactPlayer from "react-player";
import React from "react";

const vidSrc = "https://www.youtube.com/watch?v=4xDzrJKXOOY";

function AddAssets(){
    return(
        <div>
            <p style={{fontSize: "30px", textTransform: "uppercase"}} className='main-heading text-center'>Video Player</p>
            <br/>  
            <p className='text-md px-8 pb-4'>Here is a youtube video : </p>    
            <MyVideo /> 
            <p className='text-sm text-center italic mt-24 opacity-50'>Things I learnt:
                <ul>
                    <li>- managing assets</li>
                    <li>- using React Player npm package</li>
                </ul>
            </p>
        </div>
    );
}

function MyVideo(){
    return (
        <div className="flex items-center justify-center">
        <ReactPlayer
        url={vidSrc}
        width="90%"
        height="100%"
        />
        </div>
    );
}

export default AddAssets;