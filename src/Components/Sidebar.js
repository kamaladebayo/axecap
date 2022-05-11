import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <span className='sidebar__logo'><ion-icon name="logo-xing"></ion-icon></span>
            <a href='/' className='sidebar__active'><ion-icon name="grid"></ion-icon></a>
            <Link to='/company-profile'><ion-icon name="business"></ion-icon></Link>
            <Link to='/info'><ion-icon name="information"></ion-icon></Link>
            <Link to='/report'><ion-icon name="bug"></ion-icon></Link>
        </div>
     );
}
 
export default Sidebar;