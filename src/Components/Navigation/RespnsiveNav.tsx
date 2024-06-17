'use client'


import React, { useState } from 'react'
import Nav from './Nav'
import MoileNav from './MoileNav'

const RespnsiveNav : React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false);

    const toggleNav = (): void => {
        setShowNav(!showNav);
    }
    
console.log(showNav);

    return (
        <div>
            <Nav openNav={toggleNav} />
            <MoileNav showNav={showNav} openNav={toggleNav} />
        </div>
    );
};

export default RespnsiveNav ;