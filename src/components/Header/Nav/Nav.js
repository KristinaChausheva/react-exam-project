import NavItem from '../NavItem/NavItem'

const nav = (props) => (
    <ul className="navItems">
       <NavItem />
       <NavItem link="/" active>Home</NavItem>
       <NavItem link="/about">About</NavItem>
       <NavItem link="/blog">Blog</NavItem>
       <NavItem link="/contact">Contact</NavItem>
    </ul>
)

export default nav