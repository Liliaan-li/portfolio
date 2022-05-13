import React from 'react';
import Nav from './Navigation/Nav'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
           <Nav/>
        </div>
    );
};

export default Header;