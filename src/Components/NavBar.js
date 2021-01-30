import React from 'react';
import { NavLink } from 'react-router-dom';


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
            </div>
        </header>
    )
}

export default NavBar
