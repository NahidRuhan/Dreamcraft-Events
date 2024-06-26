import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  console.log(user)

  const handleSignOut=()=>{
    logOut();
  }

    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/venues">Venues</NavLink></li>
    <li><NavLink to="/aboutUs">About Us</NavLink></li>
    {user ? <></> :  <><li><NavLink to="/login">Login</NavLink></li><li><NavLink to="/Register">Register</NavLink></li></>}
</>
    
    return (
        <div>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="text-center pr-5">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user?<img data-aos="fade-left" data-aos-duration="5000" className="w-10 rounded-full" src={user.photoURL}/>:<p></p>}
        </div>
      </label>
      {user?<p>{user.displayName}</p>:<p></p>}
    </div>
    {user ?
    <a onClick={handleSignOut} className="btn">Sign Out</a>
    :
    <a href='/login' className="btn">Sign In</a>}
  </div>
</div>
            
        </div>
    );
};

export default Navbar;