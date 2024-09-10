import React from 'react'
import Footer from '../navigation/Footer'
/* import { useEffect,useState } from 'react' */
function Homepage() {
    /* const [events,setevents]=useState({})
    const [offers,setoffers]=useState({})
    const [partners,setpartners]=useState({})
    useEffect(()=>
        fetch('')
        .then(res=>res.json())
        .then(data=>setevents(data))
    ,[events])
    useEffect(()=>
        fetch('')
        .then(res=>res.json())
        .then(data=>setoffers())
    ,[offers])
    useEffect(()=>
        fetch('')
        .then(res=>res.json())
        .then(data=>setpartners(data))
    ,[partners]) */
    
    return (
        <div>
            <div className='upcomingevents'>
                up coming events
            </div>

            <div className='special offers'>
                special offers
            </div>

            <div className='partners'>
                partners
            </div>
            <Footer/>
        </div>
        
    )
}

export default Homepage