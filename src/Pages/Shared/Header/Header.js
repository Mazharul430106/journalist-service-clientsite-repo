import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext);

    const handleLogoutUser = ()=> {
        logoutUser()
        .then(()=>{})
        .catch(error=> {
            console.log(error);
        })
    }
    
    const menuItems = <>
        <li><Link className=' p-2 mx-1' to='/home'>Home</Link></li>
        <li><Link className=' p-2 mx-1' to='/blog'>Blog</Link></li>
        <>
            {
                user?.uid ? 
                <>
                   <li><Link className=' p-2 mx-1' to='/addService'>Add Services</Link></li>
                   <li><Link className=' p-2 mx-1' to='/service'>Services</Link></li>
                   <li><Link className=' p-2 mx-1' to='/myreviews'>My Reviews</Link></li>
                   <li><Link className=' p-2 mx-1 ' onClick={handleLogoutUser} >Logout</Link></li>
                </> 
                :
                <>
                    <li><Link className=' p-2 mx-1' to='/register'>Register</Link></li>
                    <li><Link className=' p-2 mx-1' to='/login'>Login</Link></li>
                </>
            }
        </>

        <>
            {
                user?.photoURL ? 
                <>
                    <li className='pl-3'>
                        <img src={user?.photoURL} title={user?.displayName} className='w-12 h-12 rounded-full cursor-pointer' alt="" />
                    </li>
                </>
                :
                <>
                    <li className='pl-3'><Link ><FaUserAlt></FaUserAlt></Link> </li>
                </>
            }

        </>

    </>

    return (
        <div className="navbar mt-5 lg:px-10">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="text-3xl font-semibold w-full text-primary">Jurnalist Services</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" menuItem menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;
