import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaBeer, FaUserAlt } from 'react-icons/fa';

const Header = () => {

    const {user, logoutUser} = useContext(AuthContext);
    console.log(user);
    const handleLogoutUser = ()=> {
        logoutUser()
        .then(()=>{})
        .catch(error=> {
            console.log(error);
        })
    }

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/service'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        <>
            {
                user?.displayName ? 
                <>
                   <li><Link>{user?.displayName}</Link></li> 
                   <li><Link onClick={handleLogoutUser} >Logout</Link></li>
                </> 
                :
                <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
            }
        </>
        
        <>
            {
                user?.photoURL ? 
                <>
                    <li>
                        <img src={user?.photoURL} alt="" style={{width: '60px'}} />
                    </li>
                </>
                :
                <>
                    <li><Link> <FaUserAlt></FaUserAlt> </Link> </li>
                </>
            }
        
        </>

    </>

    return (
        <div className="navbar mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
               
                        {menuItems}

                    </ul>
                </div>
                <Link className="text-3xl font-semibold">Jurnalist Services</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menuItems}

                </ul>
            </div>
        </div>
    );
};

export default Header;