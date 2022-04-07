import React from 'react';

function Nav() {
    return (
        <header>
            <h2 className='myheader'>SHRM</h2>
            <ul>
                <li> <a href='#Home'>Home</a></li>
                <li> <a href='#Membership'>Membership</a> </li>
                <li> <a href='#Events'>Events</a> </li>
                <li> <a href='#Resources'>Resources</a> </li>
                <li> <a href='#Contact'>Contact</a> </li>
            </ul>
        </header>   

    )
}

export default  Nav;