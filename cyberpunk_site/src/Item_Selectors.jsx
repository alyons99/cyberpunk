import React, { useState, useEffect } from 'react';

function Item_Selectors(){
    return(
        <div className="item-selectors-div">
            <button className='item-selectors-btn'>Armor</button>
            <button className='item-selectors-btn'>Cyberdecks</button>
            <button className='item-selectors-btn'>Cyberwear</button>
            <button className='item-selectors-btn'>Drugs</button>
            <button className='item-selectors-btn'>Equipment</button>
            <button className='item-selectors-btn'>Weapon Attachments</button>
            <button className='item-selectors-btn'>Weapons</button>
        </div>
    );
}

export default Item_Selectors;