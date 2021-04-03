
const navItem = (props) => (
    <li className="navItem">
        <a 
            href={props.link}
            className={props.active ? "active" : null}
            >{props.children}</a></li>
)

export default navItem