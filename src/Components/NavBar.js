import React from 'react';
import { NavLink } from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

const NavBar = () => {
    return (
        <header className="bg-pink-400 ">
            <div className="container mx-auto flex justify-evenly">
                <nav className="flex">
                    <NavLink to='/' exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-900 hover:text-blue-900 text-4xl font-bold cursive tracking-widest">
                        Juli
                    </NavLink>
                    <NavLink to='/posts' activeClassName="text-red-100 bg-pink-400"className="inline-flex items-center py-3 px-3 my-6 rounded text-red-900 hover:text-green-800">
                        Blog
                    </NavLink>
                    <NavLink to='/projects' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-900 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink to='/about' className="inline-flex items-center py-3 px-3 my-6 rounded text-red-900 hover:text-green-800">
                        About Me!
                    </NavLink>
                </nav>
                 {/* <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/earthtojuli" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://earthtojuli.tumblr.com/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon url="https://www.instagram.com/earthtojuli/?hl=en" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                </div>  */}
            </div>
        </header>
    )
}

export default NavBar
