import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../../Context/Context'
import Logo from '../Logo/Logo'
import "./_Navbar.scss"
import { Link } from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
  const { searchData, search, open, openInput } = useContext(mainContext)
  return (
    <div className='allNavbar'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Logo />
          </div>
          <div className="col-9 navbarRight">
            <div className='search'>
              <AiOutlineSearch onClick={openInput} />
              <form style={open ? { display: "block"} : { display: "none"}}>
                <input type="text" onChange={searchData} value={search} placeholder="search" />
              </form>
            </div>
            <ul className='navbarLinks'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="add">Add</Link>
              </li>
            </ul>
            <div className='hamburger'>
              <div>
                <GiHamburgerMenu/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar