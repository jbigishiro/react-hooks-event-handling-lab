import React from "react";
// Code Keypad Component Here

function Keypad (){

    return (
        <div>
            <input
        type="password"
        name="search"
        onChange={()=>console.log('Entering password...')}
        placeholder="Enter password..."
      />
        </div>
    )
}

export default Keypad;