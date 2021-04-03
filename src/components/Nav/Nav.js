import React from "react"

import styles from './Nav.css'
import Logo from '../../components/Logo/Logo'

function Nav (props){
    return (
    <header className={styles.Nav}>
        <div>MENU</div>
        <Logo />
    </header>
    )
    
}

export default Nav