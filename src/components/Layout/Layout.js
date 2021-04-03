// import React from 'react'
import Hoc from '../../hoc/Hoc'
import Nav from '../../components/Nav/Nav'
import Dummy from '../../components/dummy/Dummy'

const Layout = (props) => (
    <Hoc>
        <Nav></Nav>
        <main>{props.children}</main>
    </Hoc>
    
)

export default Layout