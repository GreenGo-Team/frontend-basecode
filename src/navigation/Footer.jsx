import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        //all navigations to all pages in footer
        <>
            <div className='d-flex w-50 m-auto justify-content-between fixed-bottom mb-5'>
                <Link to='/homepage'>homepage icon</Link>
                <Link to='/rewards'>reward icon</Link>
                <Link to='/scan'>scan icon</Link>
                <Link to='/learn'>learn icon</Link>
                <Link to='/profile'>profile icon</Link>
            </div>
        </>
    )
}

export default Footer