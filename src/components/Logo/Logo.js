import React from "react"
import logo from "../../assets/images/logo.svg"
import styles from './Logo.css'

function Logo(props) {
    return (
        <div className={styles.Logo}>
            <img src={logo} width="130" alt="logo"></img>
        </div>
    )
   
}

export default Logo

