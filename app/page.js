'use client'

import { useState, useEffect } from 'react'
import './page.css'
import AllCombos from './AllCombos'


export default function Page(){

    const [isLoading, setIsLoading] = useState(true);
    const [gameFrames, setGameFrames] = useState([])
    const [lastFrameObject, setlastFrameObject] = useState(0)

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:6001/data")
        .then(response => response.json())
        .then(incomingFrames => setGameFrames(previousValue => incomingFrames))
        setIsLoading(false)
    }, [])

    useEffect(() => {
        setIsLoading(true)
        fetch("http://localhost:6001/data")
        .then(response => response.json())
        .then(incomingFrames => setlastFrameObject(previousValue => incomingFrames[incomingFrames.length - 1]))
        setIsLoading(false)
    }, [])

    return(
        <>
            <div className='combo_on_stage'>
                <img src='battlefield_image_for_coords.png' className="stage"/>
            </div>
            {isLoading ? <h2>loading</h2> :
            <AllCombos gameFrames={gameFrames} lastFrameObject={lastFrameObject} />}   
        </>
    )
}