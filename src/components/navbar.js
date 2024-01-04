import { Link } from "react-router-dom"
import styles from '../style.module.css'
const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <Link className={styles.link} to='/'>Home</Link> &nbsp;
            <Link className={styles.link} to='/page1'>page1</Link> &nbsp;
            <Link className={styles.link} to='/page2'>page2</Link> &nbsp;
            <Link className={styles.link} to='/page3'>page3</Link>
        </div>
    )
}

export default Navbar