// import React from 'react'
import Hoc from '../../hoc/Hoc'
import Header from '../../components/Header/Header'

const Layout = (props) => (
    <Hoc>
        <Header></Header>
        <main>{props.children}</main>
    </Hoc>
    
)

export default Layout