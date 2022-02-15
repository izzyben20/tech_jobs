import React, { useState, useEffect } from 'react'
import logo from '../img/logo1.svg';
import search from '../img/search.svg';

import { HeaderStyled } from './HeaderStyles';

const Header = () => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNavColor = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavColor)
    },[])

    return (
        <HeaderStyled>
            <nav scrollNav={scrollNav} className="navigation">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className='nav-items'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Near Jobs</a>
                        </li>
                        <li>
                            <a href="#">Find Jobs</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">POST A JOB</a>
                </div>
            </nav>

            <div className="header-content">
                <h1>
                    Over <span>10,000</span> jobs available <br />
                    You can choose your dream job
                </h1>
                <p className='main-para'>
                    Find great job for build your bright career. Have many job in this platform
                </p>
                <div className="input-control">
                    <input type="text" placeholder='Job Title or Keywords' />
                    <select name="location" id="location">
                        <option value="">London</option>
                        <option value="">Lagos</option>
                        <option value="">Abuja</option>
                        <option value="">Manchester</option>
                        <option value="">Liverpool</option>
                        <option value="">Swansea</option>
                    </select>
                    <select name="jobs" id="jobs">
                        <option value="dev">Game Development</option>
                        <option value="dev">Game Designing</option>
                        <option value="dev">Web Design</option>
                        <option value="dev">Web Development</option>
                        <option value="dev">UI / UX</option>
                        <option value="dev">Product Marketing</option>
                        <option value="dev">DevOp</option>
                        <option value="dev">Network Engineering</option>
                    </select>
                    <button className='search-btn'>
                        <img src={search} alt="" />
                    </button>
                </div>
            </div>
        </HeaderStyled>
    )
}

export default Header;
