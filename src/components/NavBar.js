import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineBell } from 'react-icons/ai';


function Nav() {
    return (
        <>
        <div className='flex justify-between'>
            <div className='logo w-20 bg-transparent ml-4 mt-4'>
                <a href="!#">
                    <img src="/Photo/logo.png" loading='lazy' alt="Error" />
                </a>
            </div>
            <div className='links'>
                <ul className='flex justify-between space-x-28 mt-4'>
                    <li className='hover:underline'><a href='!#'>Now</a></li>
                    <li className='hover:underline'><a href='!#'>Movies</a></li>
                    <li className='hover:underline'><a href='!#'>Series</a></li>
                    <li className='hover:underline'><a href='!#'>Cortoons</a></li>
                </ul>
            </div>
            <div className='icon flex justify-between space-x-2 mr-4 mt-4'>
                <span className='cursor-pointer'>
                    <BiSearch className='text-2xl' />
                </span>
                <span className='cursor-pointer'>
                    < AiOutlineBell className='text-2xl' />
                </span>
            </div>
            </div>


        </>
    )
}

export default Nav