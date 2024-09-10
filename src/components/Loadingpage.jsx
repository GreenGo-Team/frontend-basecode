import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Loadingpage() {
    const navigate = useNavigate();
    const signup = true
    //load logo for 5 sec before go to homepage or sign up
    useEffect(() => {
        const timer = setTimeout(() => {
            signup ? navigate('/homepage') : navigate('/signup')
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate,signup]);

    return (
        <div>
            <p>logo</p>
        </div>
    )
}

export default Loadingpage