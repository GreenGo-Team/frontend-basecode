import React from 'react'
import Footer from '../../navigation/Footer'
import { useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
function Scan() {
    const webcamRef = useRef(null);
    const navigate = useNavigate();
    const capture = () => {
        navigate('./scaned')
    };
    return (
        <>
            Scan
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={300}
            />
            <button onClick={capture}>Capture photo</button>
            <Footer />
        </>
    )
}

export default Scan