import React from 'react'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <div>SignUp
            <p>have account? <Link to='/signin'>sign in</Link></p>
        </div>
    )
}

export default SignUp