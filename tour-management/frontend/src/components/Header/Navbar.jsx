
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {MdTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import './Navbar.css' 
const Navbar = () => {
    const [active , setActive] = useState('navBar');
    //Funstion to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    } 

    const closeNav = ()=>{
        setActive('navBar')
    } 
  return (
    <div className='navBarsection pt-0'>
    
        <header className='header flex'>
            <div className='logoDiv'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='logo flex'><MdTravelExplore className='icon'/> ZNZ</h1>
                </Link>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                    <Link to='/' className='navLink'>Home</Link>
                        

                    </li>

                    <li className='navItem'>
                        <Link to='/tours' className='navLink'>Packages</Link>
                    </li>

                   

                    <li className='navItem'>
                        <Link to='/About' className='navLink'>About US</Link>
                    </li>

                    <li className='navItem'>
                        <Link to='/Blog'  className='navLink'>Blog</Link>
                        
                    </li>


                    <button className='btn primary__btn'>
                    <Link to='/Contacts'  className='navLink'>CONTACTS</Link>
                       
                    </button>
                </ul>
                <div onClick={closeNav} className='closeNavbar'>
                    <AiFillCloseCircle className="icon"/>
                </div>
            </div>

            

            <div onClick={showNav} className='toggleNavBar'>
                <TbGridDots className='icon'/>
            </div>

        </header>
      
    </div>
  );
}

export default Navbar;
